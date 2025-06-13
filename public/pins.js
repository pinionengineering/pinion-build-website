import { getAccessToken, handleCallback, fetchOIDCConfig, setupNavbar } from './oauth.js';
import { authenticatedApiRequest, showSubscriptionRequired } from './api.js';

// Store active polling intervals
const pollingIntervals = new Map();

// Function to show delete confirmation dialog
function showDeleteConfirmation(requestId, pinName, pinCid) {
	// Create overlay
	const overlay = document.createElement('div');
	overlay.className = 'confirmation-overlay';

	// Create dialog
	const dialog = document.createElement('div');
	dialog.className = 'confirmation-dialog';

	// Dialog content
	dialog.innerHTML = `
		<h3>Delete Pin?</h3>
		<p>Are you sure you want to delete this pin?</p>
		<div class="pin-info">
			<p><strong>Name:</strong> ${pinName}</p>
			<p><strong>CID:</strong> <span class="mono">${pinCid}</span></p>
		</div>
		<p class="warning">This action cannot be undone.</p>
		<div class="dialog-buttons">
			<button class="cancel-button">Cancel</button>
			<button class="confirm-delete-button">Delete</button>
		</div>
	`;

	// Add event listeners
	const cancelBtn = dialog.querySelector('.cancel-button');
	const confirmBtn = dialog.querySelector('.confirm-delete-button');

	cancelBtn.addEventListener('click', () => {
		document.body.removeChild(overlay);
	});

	confirmBtn.addEventListener('click', async () => {
		confirmBtn.disabled = true;
		confirmBtn.textContent = 'Deleting...';

		try {
			await deletePin(requestId);
			document.body.removeChild(overlay);

			// Remove the pin card from display with animation
			const pinCard = document.querySelector(`[data-request-id="${requestId}"]`);
			if (pinCard) {
				pinCard.style.transition = 'all 0.3s ease';
				pinCard.style.opacity = '0';
				pinCard.style.transform = 'scale(0.95)';
				setTimeout(() => {
					pinCard.remove();
				}, 300);
			}
		} catch (error) {
			confirmBtn.disabled = false;
			confirmBtn.textContent = 'Delete';
			alert('Failed to delete pin: ' + error.message);
		}
	});

	// Click outside to close
	overlay.addEventListener('click', (e) => {
		if (e.target === overlay) {
			document.body.removeChild(overlay);
		}
	});

	// Add to page
	overlay.appendChild(dialog);
	document.body.appendChild(overlay);
}

// Function to delete a pin
async function deletePin(requestId) {
	const url = `https://hydrogen.pinion.build/pinning/api/v1/pins/${requestId}`;
	const token = await getAccessToken();

	try {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});

		if (response.status === 401) {
			showSubscriptionRequired();
			throw new Error('Subscription required');
		}

		if (response.status === 200) {
			console.log('Pin deleted successfully');
			// Stop any polling for this pin
			const pinCard = document.querySelector(`[data-request-id="${requestId}"]`);
			if (pinCard) {
				const cid = pinCard.getAttribute('data-cid');
				const interval = pollingIntervals.get(cid);
				if (interval) {
					clearInterval(interval);
					pollingIntervals.delete(cid);
				}
			}
			return true;
		} else {
			throw new Error(`Delete failed with status: ${response.status}`);
		}
	} catch (error) {
		console.error('Failed to delete pin:', error);
		throw error;
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	await fetchOIDCConfig();
	await handleCallback();
	setupNavbar();
	populateTable();
	handleUploadAnywhere();

	const filterBtn = document.getElementById('apply-filters');
	if (filterBtn) {
		filterBtn.addEventListener('click', () => {
			filterBtn.disabled = true;
			populateTable().finally(() => {
				setTimeout(() => {
					filterBtn.disabled = false;
				}, 500);
			});
		});
	}
	console.log("dom loaded");
});

// Function to poll status for a specific pin
async function pollPinStatus(pinCid, cardElement) {
	try {
		const url = `https://hydrogen.pinion.build/pinning/api/v1/pins?cid=${pinCid}&limit=1`;
		const response = await authenticatedApiRequest('GET', url);

		if (response.results && response.results.length > 0) {
			const pin = response.results[0];
			const statusSpan = cardElement.querySelector('.pin-status');

			// Update status in the card
			statusSpan.textContent = pin.status;
			statusSpan.className = `pin-status ${pin.status}`;

			// If status is no longer "pinning", stop polling
			if (pin.status !== 'pinning') {
				const interval = pollingIntervals.get(pinCid);
				if (interval) {
					clearInterval(interval);
					pollingIntervals.delete(pinCid);
				}
			}
		}
	} catch (error) {
		console.error(`Error polling status for pin ${pinCid}:`, error);
		// Don't stop polling on error - might be temporary
	}
}

// Function to start polling for all pinning items
function startPollingForPinningItems() {
	const pinsContainer = document.querySelector('#pins-container');
	if (!pinsContainer) return;

	const cards = pinsContainer.querySelectorAll('.pin-card');

	cards.forEach(card => {
		const statusSpan = card.querySelector('.pin-status');
		const cid = card.getAttribute('data-cid');

		if (statusSpan && cid) {
			const status = statusSpan.textContent.trim();

			// Only poll if status is "pinning" and we're not already polling this CID
			if (status === 'pinning' && !pollingIntervals.has(cid)) {
				// Start immediate poll
				pollPinStatus(cid, card);

				// Set up interval polling (every 3 seconds)
				const interval = setInterval(() => {
					pollPinStatus(cid, card);
				}, 3000);

				pollingIntervals.set(cid, interval);
			}
		}
	});
}

// Clear all polling intervals
function clearAllPolling() {
	pollingIntervals.forEach((interval, cid) => {
		clearInterval(interval);
	});
	pollingIntervals.clear();
}

async function populateTable() {
	console.log("populating table");
	console.trace();
	const pinsContainer = document.querySelector('#pins-container');
	const loadingIndicator = document.getElementById('pins-loading');
	const beforeInput = document.getElementById('filter-range-start');
	const afterInput = document.getElementById('filter-range-end');
	const cidInput = document.getElementById('filter-cid');
	const limitInput = document.getElementById('filter-limit');

	if (!pinsContainer || !loadingIndicator) {
		console.error('Could not find pins container or loading indicator');
		return;
	}

	// Clear existing polling before repopulating
	clearAllPolling();

	// Clear container and show spinner
	pinsContainer.innerHTML = '';
	loadingIndicator.style.display = 'block';

	try {
		const params = new URLSearchParams();

		if (beforeInput?.value) {
			params.append('before', new Date(beforeInput.value).toISOString());
		}
		if (afterInput?.value) {
			params.append('after', new Date(afterInput.value).toISOString());
		}
		if (cidInput?.value) {
			params.append('cid', cidInput.value);
		}
		if (limitInput?.value) {
			params.append('limit', limitInput.value);
		}

		const url = `https://hydrogen.pinion.build/pinning/api/v1/pins?${params.toString()}`;
		console.log('Fetching pins from:', url);
		const pinData = await authenticatedApiRequest('GET', url);
		console.log('Pin data received:', pinData);

		if (!pinData.results || pinData.results.length === 0) {
			pinsContainer.innerHTML = '<div class="no-pins-message">No pins found</div>';
			return;
		}

		pinData.results?.forEach(pin => {
			const card = document.createElement('div');
			card.className = 'pin-card';
			card.setAttribute('data-cid', pin.pin.cid);
			card.setAttribute('data-request-id', pin.requestid);

			// Pin name/title
			const titleDiv = document.createElement('div');
			titleDiv.className = 'pin-title';
			titleDiv.textContent = pin.pin.name;
			card.appendChild(titleDiv);

			// Pin details container
			const detailsDiv = document.createElement('div');
			detailsDiv.className = 'pin-details';

			// Status
			const statusDiv = document.createElement('div');
			statusDiv.className = 'pin-detail';
			statusDiv.innerHTML = `<span class="detail-label">Status:</span> <span class="pin-status ${pin.status}">${pin.status}</span>`;
			detailsDiv.appendChild(statusDiv);

			// CID
			const cidDiv = document.createElement('div');
			cidDiv.className = 'pin-detail';
			cidDiv.innerHTML = `<span class="detail-label">CID:</span> <span class="pin-cid">${pin.pin.cid}</span>`;
			detailsDiv.appendChild(cidDiv);

			// Date
			const dateDiv = document.createElement('div');
			dateDiv.className = 'pin-detail';
			const date = new Date(pin.created);
			const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			dateDiv.innerHTML = `<span class="detail-label">Date:</span> <span title="${date.toISOString()}">${dateStr}</span>`;
			detailsDiv.appendChild(dateDiv);

			// Gateway button
			const getBtn = document.createElement('button');
			getBtn.textContent = 'Open in Gateway';
			getBtn.className = 'gateway-button';
			getBtn.addEventListener('click', () => {
				window.open(`https://hydrogen.pinion.build/gateway/web/ipfs/${pin.pin.cid}`, '_blank');
			});

			// Delete button
			const deleteBtn = document.createElement('button');
			deleteBtn.textContent = 'Delete';
			deleteBtn.className = 'delete-button';
			deleteBtn.addEventListener('click', () => {
				showDeleteConfirmation(pin.requestid, pin.pin.name, pin.pin.cid);
			});

			const buttonDiv = document.createElement('div');
			buttonDiv.className = 'pin-detail button-group';
			buttonDiv.appendChild(getBtn);
			buttonDiv.appendChild(deleteBtn);
			detailsDiv.appendChild(buttonDiv);

			card.appendChild(detailsDiv);
			pinsContainer.appendChild(card);
		});

		// Start polling for any items with "pinning" status
		startPollingForPinningItems();

	} catch (err) {
		console.error('Failed to populate pin table:', err);
	} finally {
		loadingIndicator.style.display = 'none';
	}
}

function handleUploadAnywhere() {
	const uploadInput = document.getElementById('upload-input');

	if (!uploadInput) {
		console.error('Upload input element not found');
		return;
	}

	window.addEventListener('dragover', (e) => {
		e.preventDefault();
		document.body.classList.add('dragover');
	});

	window.addEventListener('dragleave', (e) => {
		if (!e.relatedTarget || !document.body.contains(e.relatedTarget)) {
			document.body.classList.remove('dragover');
		}
	});

	window.addEventListener('drop', (e) => {
		e.preventDefault();
		document.body.classList.remove('dragover');
		handleFiles(e.dataTransfer.files);
	});

	uploadInput.addEventListener('change', () => {
		handleFiles(uploadInput.files);
	});
}

function handleFiles(fileList) {
	Array.from(fileList).forEach(uploadFile);
}

async function uploadFile(file) {
	const token = await getAccessToken();
	const uploadsContainer = document.getElementById('upload-progress');

	if (!uploadsContainer) {
		console.error('Upload progress container not found');
		return;
	}

	const container = document.createElement('div');
	container.className = 'file-upload';

	const label = document.createElement('span');
	label.textContent = file.name;

	const progress = document.createElement('progress');
	progress.max = 100;
	progress.value = 0;

	container.appendChild(label);
	container.appendChild(progress);
	uploadsContainer.appendChild(container);

	const url = `https://hydrogen.pinion.build/upload/api/v1/?name=${encodeURIComponent(file.name)}`;
	const xhr = new XMLHttpRequest();

	xhr.open('POST', url);
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);

	xhr.upload.addEventListener('progress', (e) => {
		if (e.lengthComputable) {
			const percent = (e.loaded / e.total) * 100;
			progress.value = percent;
		}
	});

	xhr.addEventListener('load', () => {
		if (xhr.status >= 200 && xhr.status < 300) {
			// Show upload complete message
			label.textContent += ' — Upload complete, pinning...';
			label.style.color = '#10b981';

			// Remove progress bar after a short delay, then refresh table
			setTimeout(() => {
				container.remove();
				populateTable(); // This will start polling for the new pin
			}, 2000);
		} else {
			label.textContent += ` — Error (${xhr.status})`;
			label.style.color = '#ef4444';
		}
	});

	xhr.addEventListener('error', () => {
		label.textContent += ' — Upload failed (network error)';
		label.style.color = '#ef4444';
	});

	xhr.send(file);
}

// Clean up polling when the page is unloaded
window.addEventListener('beforeunload', () => {
	clearAllPolling();
});
