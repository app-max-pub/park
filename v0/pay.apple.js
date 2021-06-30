function methods() {
	// Example supported payment methods:
	return [{
		supportedMethods: "https://apple.com/apple-pay",
		data: {
			supportedNetworks: ['visa', 'mastercard'],
			supportedTypes: ['debit', 'credit']
		}
	}];
}

function details() {
	// Hardcoded for demo purposes:
	return {
		id: 'order-123',
		displayItems: [
			{
				label: 'Example item',
				amount: { currency: 'USD', value: '1.00' }
			}
		],
		total: {
			label: 'Total',
			amount: { currency: 'USD', value: '1.00' }
		}
	};
}

var request = null;
if (window.PaymentRequest) {
	console.log("YEEES")
	request = new PaymentRequest(methods(), details());
	document.querySelector('#applePay').addEventListener('click', e => {
		console.log('click')
	})
}

console.log('request', request)


request.show().then(function (paymentResponse) {
	// Here we would process the payment. For this demo, simulate immediate success:
	paymentResponse.complete('success')
		.then(function () {
			// For demo purposes:
			introPanel.style.display = 'none';
			successPanel.style.display = 'block';
		});
})

// async function onApplePayButtonClicked() {

// 	// Consider falling back to Apple Pay JS if Payment Request is not available.
// 	if (!PaymentRequest) {
// 		return;
// 	}

// 	try {

// 		// Define PaymentMethodData
// 		const paymentMethodData = [{
// 			"supportedMethods": "https://apple.com/apple-pay",
// 			"data": {
// 				"version": 3,
// 				"merchantIdentifier": "merchant.com.example",
// 				"merchantCapabilities": [
// 					"supports3DS"
// 				],
// 				"supportedNetworks": [
// 					"amex",
// 					"discover",
// 					"masterCard",
// 					"visa"
// 				],
// 				"countryCode": "US"
// 			}
// 		}];
// 		// Define PaymentDetails
// 		const paymentDetails = {
// 			"total": {
// 				"label": "My Merchant",
// 				"amount": {
// 					"value": "27.50",
// 					"currency": "USD"
// 				}
// 			}
// 		};
// 		// Define PaymentOptions
// 		const paymentOptions = {
// 			"requestPayerName": false,
// 			"requestBillingAddress": false,
// 			"requestPayerEmail": false,
// 			"requestPayerPhone": false,
// 			"requestShipping": true,
// 			"shippingType": "shipping"
// 		};

// 		// Create PaymentRequest
// 		const request = new PaymentRequest(paymentMethodData, paymentDetails, paymentOptions);

// 		request.onmerchantvalidation = event => {
// 			// Call your own server to request a new merchant session.
// 			const merchantSessionPromise = validateMerchant();
// 			event.complete(merchantSessionPromise);
// 		};

// 		request.onpaymentmethodchange = event => {
// 			// Define PaymentDetailsUpdate based on the selected payment method.
// 			// No updates or errors needed, pass an object with the same total.
// 			const paymentDetailsUpdate = {
// 				'total': paymentDetails.total
// 			};
// 			event.updateWith(paymentDetailsUpdate);
// 		};

// 		request.onshippingoptionchange = event => {
// 			// Define PaymentDetailsUpdate based on the selected shipping option.
// 			// No updates or errors needed, pass an object with the same total.
// 			const paymentDetailsUpdate = {
// 				'total': paymentDetails.total
// 			};
// 			event.updateWith(paymentDetailsUpdate);
// 		};

// 		request.onshippingaddresschange = event => {
// 			// Define PaymentDetailsUpdate based on a shipping address change.
// 			const paymentDetailsUpdate = {
// 				"total": {
// 					"label": "My Merchant",
// 					"amount": {
// 						"value": "27.50",
// 						"currency": "USD"
// 					}
// 				}
// 			};
// 			event.updateWith(paymentDetailsUpdate);
// 		};

// 		const response = await request.show();
// 		const status = "success";
// 		await response.complete(status);
// 	} catch (e) {
// 		// Handle errors
// 	}
// }