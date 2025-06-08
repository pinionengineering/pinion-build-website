/*
CHECKOUT INTEGRATION
 
This code opens checkout in a new tab using your Pinion checkout page:

This page does not require a login to view products. After starting a purchase,
users will be directed to a page where they can log in or create an account
and and 

- URL: https://hydrogen.pinion.build/payments/web/checkout?price_id=PRICE_ID
- Opens in new tab (_blank)
- Handles popup blockers gracefully
- Works for both one-time and metered pricing
 
Make sure your Stripe price IDs in the products array match your actual Stripe prices.
*/

// Function to show notifications
function showNotification(message, type = 'success') {
	const notification = document.getElementById('notification');
	notification.textContent = message;
	notification.className = `notification ${type}`;
	notification.classList.add('show');

	setTimeout(() => {
		notification.classList.remove('show');
	}, 3000);
}

// Function to fetch products from API
async function fetchProducts() {
	try {
		const response = await fetch('https://hydrogen.pinion.build/payments/offerings');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching products:', error);
		showNotification('Failed to load products. Please refresh the page.', 'error');
		return [];
	}
}

// Function to transform API data to our product format
function transformProductData(apiProduct) {
	return {
		id: apiProduct.ID,
		name: apiProduct.Name,
		description: apiProduct.Description,
		displayPrice: apiProduct.DisplayPrice,
		items: apiProduct.Items || {}
	};
}

// Function to handle checkout by opening new tab to your checkout page
async function handlePurchase(product) {
	const button = document.querySelector(`[data-product-id="${product.id}"]`);
	const originalText = button.innerHTML;

	// Show loading state briefly for user feedback
	button.disabled = true;
	button.innerHTML = '<div class="loading" style="display: flex;"><div class="spinner"></div><span>Opening checkout...</span></div>';

	try {
		// Construct checkout URL with offer_id
		const checkoutUrl = `https://hydrogen.pinion.build/payments/web/checkout?offer_id=${product.id}`;

		// Open checkout in new tab
		const newTab = window.open(checkoutUrl, '_blank');

		// Check if popup was blocked
		if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
			throw new Error('Popup blocked - please allow popups for this site');
		}

		// Show success notification
		showNotification('Checkout opened in new tab', 'success');

		// Reset button after short delay
		setTimeout(() => {
			button.disabled = false;
			button.innerHTML = originalText;
		}, 1500);

	} catch (error) {
		console.error('Error opening checkout:', error);

		if (error.message.includes('Popup blocked')) {
			showNotification('Please allow popups and try again', 'error');
		} else {
			showNotification('Unable to open checkout. Please try again.', 'error');
		}

		// Reset button state
		button.disabled = false;
		button.innerHTML = originalText;
	}
}

// Function to create product cards
function createProductCard(product) {
	// Create items list if there are any items
	let itemsList = '';
	if (product.items && Object.keys(product.items).length > 0) {
		const itemsArray = Object.entries(product.items).map(([key, value]) =>
			`<li><strong>${key}:</strong> ${value}</li>`
		).join('');
		itemsList = `
			<div class="product-items">
				<h4>Includes:</h4>
				<ul>${itemsArray}</ul>
			</div>
		`;
	}

	return `
        <div class="product-card">
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${itemsList}
            <div class="product-pricing">
              <div class="product-price">${product.displayPrice}</div>
            </div>
            <button class="buy-button" data-product-id="${product.id}" onclick="handlePurchase(${JSON.stringify(product).replace(/"/g, '&quot;')})">
              Get Started
            </button>
          </div>
        </div>
      `;
}

// Function to show loading state
function showLoadingState() {
	const container = document.getElementById('products-container');
	container.innerHTML = `
		<div class="loading-container" style="display: flex; justify-content: center; align-items: center; min-height: 200px; width: 100%;">
			<div class="loading" style="display: flex; align-items: center; gap: 10px; font-size: 18px;">
				<div class="spinner"></div>
				<span>Loading products...</span>
			</div>
		</div>
	`;
}

// Function to show empty state
function showEmptyState() {
	const container = document.getElementById('products-container');
	container.innerHTML = `
		<div class="empty-state" style="text-align: center; padding: 40px; width: 100%;">
			<h3>No products available</h3>
			<p>Please check back later or contact us for more information.</p>
		</div>
	`;
}

// Load products on page load
document.addEventListener('DOMContentLoaded', async function() {
	const container = document.getElementById('products-container');

	// Show loading state
	showLoadingState();

	try {
		// Fetch products from API
		const apiProducts = await fetchProducts();

		if (!apiProducts || apiProducts.length === 0) {
			showEmptyState();
			return;
		}

		// Transform API data to our format
		const products = apiProducts.map(transformProductData);

		// Render products
		container.innerHTML = products.map(createProductCard).join('');

		// Add entrance animations
		const cards = document.querySelectorAll('.product-card');
		cards.forEach((card, index) => {
			card.style.opacity = '0';
			card.style.transform = 'translateY(50px)';

			setTimeout(() => {
				card.style.transition = 'all 0.6s ease';
				card.style.opacity = '1';
				card.style.transform = 'translateY(0)';
			}, index * 200);
		});

	} catch (error) {
		console.error('Error loading products:', error);
		showNotification('Failed to load products. Please refresh the page.', 'error');
		showEmptyState();
	}
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
	const cards = document.querySelectorAll('.product-card');
	cards.forEach(card => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const rotateX = (y - centerY) / 50;
			const rotateY = (centerX - x) / 50;

			card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
		} else {
			card.style.transform = '';
		}
	});
});
