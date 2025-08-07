import {
	getAccessToken,
	startAuthFlow
} from './oauth.js';

export {
	authenticatedApiRequest,
	showSubscriptionRequired,
	showLoginRequired
};

// Function to show login required message
function showLoginRequired() {
	const message = document.createElement('div');
	message.className = 'subscription-alert'; // Reuse same styling
	message.innerHTML = `
		<div class="subscription-alert-content">
			<h3>Login Required</h3>
			<p>Please log in to access your pins and account features.</p>
			<button class="subscription-alert-button" id="login-button">Login</button>
		</div>
	`;

	// Remove any existing alerts
	const existingAlert = document.querySelector('.subscription-alert');
	if (existingAlert) {
		existingAlert.remove();
	}

	document.body.appendChild(message);

	// Add click handler to actually start the login flow
	const loginButton = document.getElementById('login-button');
	loginButton.addEventListener('click', async () => {
		try {
			console.log('Starting auth flow...');
			await startAuthFlow();
		} catch (error) {
			console.error('Failed to start login flow:', error);
		}
	});
}

// Function to show subscription required message
function showSubscriptionRequired() {
	const message = document.createElement('div');
	message.className = 'subscription-alert';
	message.innerHTML = `
		<div class="subscription-alert-content">
			<h3>Subscription Required</h3>
			<p>You need an active subscription to access this feature.</p>
			<a href="/products/" class="subscription-alert-button">View Products</a>
		</div>
	`;

	// Remove any existing alerts
	const existingAlert = document.querySelector('.subscription-alert');
	if (existingAlert) {
		existingAlert.remove();
	}

	document.body.appendChild(message);

	// Auto-hide after 10 seconds
	setTimeout(() => {
		message.remove();
	}, 10000);
}

async function authenticatedApiRequest(method, url, data = null) {
	const token = await getAccessToken();

	// Check if user is authenticated first
	if (!token) {
		showLoginRequired();
		throw new Error('Authentication required');
	}

	const options = {
		method,
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	};
	if (data) {
		options.body = JSON.stringify(data);
	}

	try {
		const res = await fetch(url, options);

		// Handle unauthorized specifically (this would be for subscription issues)
		if (res.status === 401) {
			showSubscriptionRequired();
			throw new Error('Subscription required');
		}

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		return res.json();
	} catch (error) {
		// Re-throw the error so calling code can handle it
		throw error;
	}
}
