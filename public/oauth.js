export {
	fetchOIDCConfig,
	getAccessToken,
	handleCallback,
	setupNavbar,
	startAuthFlow,
};

const config = {
	clientId: window.APP_CONFIG.CLIENT_ID,
	redirectUri: window.APP_CONFIG.APP_URL + window.location.pathname,
	scope: 'openid profile user_hint',
	issuer: window.APP_CONFIG.OAUTH_ISSUER
};

let oidcConfig = null;
let silentRenewalInProgress = false;

function base64UrlEncode(buffer) {
	return btoa(String.fromCharCode(...new Uint8Array(buffer)))
		.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function fetchOIDCConfig() {
	try {
		const res = await fetch(`${config.issuer}.well-known/openid-configuration`);
		if (!res.ok) throw new Error('OIDC discovery failed');
		oidcConfig = await res.json();

		// Cache in sessionStorage for resilience
		sessionStorage.setItem('oidc_config', JSON.stringify(oidcConfig));
	} catch (error) {
		// Try to use cached config
		const cached = sessionStorage.getItem('oidc_config');
		if (cached) {
			oidcConfig = JSON.parse(cached);
			console.warn('Using cached OIDC config due to network error');
		} else {
			throw error;
		}
	}
}

async function generatePKCE() {
	const random = crypto.getRandomValues(new Uint8Array(32));
	const codeVerifier = base64UrlEncode(random);
	const encoder = new TextEncoder();
	const digest = await crypto.subtle.digest('SHA-256', encoder.encode(codeVerifier));
	const codeChallenge = base64UrlEncode(digest);
	return { codeVerifier, codeChallenge };
}

function getQueryParam(name) {
	return new URLSearchParams(window.location.search).get(name);
}

async function startAuthFlow() {
	try {
		const { codeVerifier, codeChallenge } = await generatePKCE();
		sessionStorage.setItem('pkce_verifier', codeVerifier);

		// Store the original URL to return to after auth
		sessionStorage.setItem('auth_return_url', window.location.href);

		// ... rest of the flow
	} catch (error) {
		console.error('Failed to start auth flow:', error);
		// Show user-friendly error
		showAuthError('Unable to start login process. Please try again.');
	}
}

function showAuthError(message) {
	// Reuse your notification system
	const notification = document.getElementById('notification');
	if (notification) {
		notification.textContent = message;
		notification.className = 'notification error show';
		setTimeout(() => notification.classList.remove('show'), 5000);
	}
}

async function exchangeCodeForToken(code, codeVerifier) {
	const params = new URLSearchParams({
		grant_type: 'authorization_code',
		code,
		redirect_uri: config.redirectUri,
		client_id: config.clientId,
		code_verifier: codeVerifier
	});

	const res = await fetch(oidcConfig.token_endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: params.toString()
	});

	if (!res.ok) throw new Error(await res.text());
	const tokens = await res.json();
	return tokens;
}

function storeTokens(tokens) {
	const now = Math.floor(Date.now() / 1000);
	const expiresAt = now + (tokens.expires_in || 300);

	sessionStorage.setItem('access_token', tokens.access_token);
	sessionStorage.setItem('id_token', tokens.id_token || '');
	sessionStorage.setItem('access_token_expires_at', expiresAt.toString());

	if (tokens.refresh_token) {
		sessionStorage.setItem('refresh_token', tokens.refresh_token);
	}
}

function isAccessTokenExpired() {
	const expiresAt = parseInt(sessionStorage.getItem('access_token_expires_at') || '0', 10);
	return Date.now() / 1000 >= expiresAt - 60;
}

async function renewTokenSilently() {
	if (silentRenewalInProgress) {
		return new Promise((resolve) => {
			const checkInterval = setInterval(() => {
				if (!silentRenewalInProgress) {
					clearInterval(checkInterval);
					resolve(sessionStorage.getItem('access_token'));
				}
			}, 100);
		});
	}

	silentRenewalInProgress = true;

	try {
		const { codeVerifier, codeChallenge } = await generatePKCE();

		sessionStorage.setItem('silent_pkce_verifier', codeVerifier);

		const params = new URLSearchParams({
			response_type: 'code',
			client_id: config.clientId,
			redirect_uri: config.redirectUri,
			scope: config.scope,
			code_challenge: codeChallenge,
			code_challenge_method: 'S256',
			prompt: 'none'
		});

		const authUrl = `${oidcConfig.authorization_endpoint}?${params}`;

		return new Promise((resolve, reject) => {
			const iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = authUrl;

			const timeoutId = setTimeout(() => {
				cleanup();
				reject(new Error('Silent renewal timeout'));
			}, 10000);

			const cleanup = () => {
				clearTimeout(timeoutId);
				document.body.removeChild(iframe);
				silentRenewalInProgress = false;
			};

			iframe.onload = async () => {
				try {
					const iframeUrl = iframe.contentWindow.location.href;
					const urlParams = new URLSearchParams(new URL(iframeUrl).search);
					const code = urlParams.get('code');
					const error = urlParams.get('error');

					if (error) {
						cleanup();
						reject(new Error(`Silent renewal failed: ${error}`));
						return;
					}

					if (code) {
						const verifier = sessionStorage.getItem('silent_pkce_verifier');
						if (!verifier) {
							cleanup();
							reject(new Error('Missing PKCE verifier for silent renewal'));
							return;
						}

						const tokens = await exchangeCodeForToken(code, verifier);
						storeTokens(tokens);
						sessionStorage.removeItem('silent_pkce_verifier');

						cleanup();
						resolve(tokens.access_token);
					}
				} catch (e) {
					cleanup();
					reject(new Error('Silent renewal failed - cross-origin restriction'));
				}
			};

			iframe.onerror = () => {
				cleanup();
				reject(new Error('Silent renewal iframe failed to load'));
			};

			document.body.appendChild(iframe);
		});
	} catch (error) {
		silentRenewalInProgress = false;
		throw error;
	}
}

async function refreshAccessToken() {
	const refreshToken = sessionStorage.getItem('refresh_token');

	if (refreshToken) {
		try {
			const params = new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: refreshToken,
				client_id: config.clientId
			});

			const res = await fetch(oidcConfig.token_endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString()
			});

			if (res.ok) {
				const tokens = await res.json();
				storeTokens(tokens);
				return tokens.access_token;
			}
		} catch (error) {
			console.warn('Refresh token failed, trying silent renewal:', error);
		}
	}

	try {
		return await renewTokenSilently();
	} catch (error) {
		console.warn('Silent renewal failed, falling back to full redirect:', error);
		await startAuthFlow();
		return null;
	}
}

async function getAccessToken() {
	if (!oidcConfig) await fetchOIDCConfig();

	const accessToken = sessionStorage.getItem('access_token');

	if (window.location.search.includes('code=')) {
		console.log('Auth callback in progress, skipping token check');
		return null;
	}

	if (!accessToken || isAccessTokenExpired()) {
		console.log('Access token missing or expired — attempting silent renewal');
		try {
			return await refreshAccessToken();
		} catch (error) {
			console.error('Token renewal failed:', error);
			await startAuthFlow();
			return null;
		}
	}

	return accessToken;
}

async function handleCallback() {
	const code = getQueryParam('code');
	if (!code) return;

	try {
		const codeVerifier = sessionStorage.getItem('pkce_verifier');
		if (!codeVerifier) throw new Error('Missing PKCE verifier');
		const tokens = await exchangeCodeForToken(code, codeVerifier);
		storeTokens(tokens);
		sessionStorage.removeItem('pkce_verifier');
		window.history.replaceState({}, '', config.redirectUri);
	} catch (err) {
		throw new Error('Token exchange failed: ' + err.message);
	}
}

async function setupNavbar() {
	if (!oidcConfig) await fetchOIDCConfig();

	const navlist = document.getElementById('navigation-list');
	if (!navlist) return;

	const accessToken = sessionStorage.getItem('access_token');
	if (accessToken && !isAccessTokenExpired()) {
		const logoutUrl = oidcConfig.end_session_endpoint +
			'?post_logout_redirect_uri=' + encodeURIComponent(window.APP_CONFIG.APP_URL);
		const logoutLink = document.createElement('a');
		logoutLink.href = logoutUrl;
		logoutLink.innerText = 'Logout';

		logoutLink.addEventListener('click', () => {
			// Clear all auth data
			sessionStorage.removeItem('access_token');
			sessionStorage.removeItem('id_token');
			sessionStorage.removeItem('refresh_token');
			sessionStorage.removeItem('access_token_expires_at');
		});
		li = document.createElement('li');
		li.id = 'logout';
		li.appendChild(logoutLink);
		navlist.appendChild(li);
	} else {
		const existingLogoutLink = document.getElementById('logout');
		if (existingLogoutLink) {
			navbar.removeChild(existingLogoutLink);
		}
	}
}

