export {
	getAccessToken,
	handleCallback,
	fetchOIDCConfig,
}

const config = {
	clientId: 'R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq',
	redirectUri: window.location.origin + window.location.pathname,
	scope: 'openid profile',
	issuer: 'https://hydrogen.pinion.build/authen/application/o/pinion-cli/'
};

let oidcConfig = null;
let silentRenewalInProgress = false;

function base64UrlEncode(buffer) {
	return btoa(String.fromCharCode(...new Uint8Array(buffer)))
		.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function fetchOIDCConfig() {
	const res = await fetch(`${config.issuer}.well-known/openid-configuration`);
	if (!res.ok) throw new Error('OIDC discovery failed');
	oidcConfig = await res.json();
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
	const { codeVerifier, codeChallenge } = await generatePKCE();
	sessionStorage.setItem('pkce_verifier', codeVerifier);

	const params = new URLSearchParams({
		response_type: 'code',
		client_id: config.clientId,
		redirect_uri: config.redirectUri,
		scope: config.scope,
		code_challenge: codeChallenge,
		code_challenge_method: 'S256'
	});

	// Clear out stale access token so we don't accidentally use it
	sessionStorage.removeItem('access_token');
	sessionStorage.removeItem('access_token_expires_at');

	// Redirect to login
	window.location.href = `${oidcConfig.authorization_endpoint}?${params}`;
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

	// Store refresh token if available
	if (tokens.refresh_token) {
		sessionStorage.setItem('refresh_token', tokens.refresh_token);
	}
}

function isAccessTokenExpired() {
	const expiresAt = parseInt(sessionStorage.getItem('access_token_expires_at') || '0', 10);
	return Date.now() / 1000 >= expiresAt - 60; // refresh 60s early
}

// Silent token renewal using hidden iframe
async function renewTokenSilently() {
	if (silentRenewalInProgress) {
		// Wait for existing renewal to complete
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

		// Store the verifier for the silent renewal
		sessionStorage.setItem('silent_pkce_verifier', codeVerifier);

		const params = new URLSearchParams({
			response_type: 'code',
			client_id: config.clientId,
			redirect_uri: config.redirectUri,
			scope: config.scope,
			code_challenge: codeChallenge,
			code_challenge_method: 'S256',
			prompt: 'none' // silent renewal in iframe
		});

		const authUrl = `${oidcConfig.authorization_endpoint}?${params}`;

		return new Promise((resolve, reject) => {
			const iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = authUrl;

			const timeoutId = setTimeout(() => {
				cleanup();
				reject(new Error('Silent renewal timeout'));
			}, 10000); // 10 second timeout

			const cleanup = () => {
				clearTimeout(timeoutId);
				document.body.removeChild(iframe);
				silentRenewalInProgress = false;
			};

			iframe.onload = async () => {
				try {
					// Check if we can access the iframe content (same-origin)
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
					// If we can't access iframe content, it might be due to cross-origin
					// In this case, we'll fall back to full page redirect
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

// Try refresh token approach first, then fall back to silent renewal
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

	// Fall back to silent renewal if refresh token isn't available or failed
	try {
		return await renewTokenSilently();
	} catch (error) {
		console.warn('Silent renewal failed, falling back to full redirect:', error);
		// Last resort: full page redirect
		await startAuthFlow();
		return null;
	}
}

async function getAccessToken() {
	if (!oidcConfig) await fetchOIDCConfig();

	const accessToken = sessionStorage.getItem('access_token');

	if (!accessToken || isAccessTokenExpired()) {
		console.log('Access token missing or expired — attempting silent renewal');
		try {
			return await refreshAccessToken();
		} catch (error) {
			console.error('Token renewal failed:', error);
			await startAuthFlow(); // Full page redirect as last resort
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
		window.history.replaceState({}, '', config.redirectUri); // Clean up URL
	} catch (err) {
		throw new Error('Token exchange failed: ' + err.message);
	}
}
