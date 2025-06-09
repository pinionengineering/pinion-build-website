import {
	getAccessToken
} from './oauth.js';

export {
	authenticatedApiRequest,
	showSubscriptionRequired
};

// Function to show subscription required message
function showSubscriptionRequired() {
	const message = document.createElement('div');
	message.className = 'subscription-alert';
	message.innerHTML = `
		<div class="subscription-alert-content">
			<h3>Subscription Required</h3>
			<p>You need an active subscription to access this feature.</p>
			<a href="/products.html" class="subscription-alert-button">View Products</a>
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

		// Handle unauthorized specifically
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
