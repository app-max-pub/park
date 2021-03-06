function initPayPalButton() {
	paypal.Buttons({
		style: {
			shape: 'rect',
			color: 'black',
			layout: 'vertical',
			label: 'paypal',

		},

		createOrder: function (data, actions) {
			return actions.order.create({
				purchase_units: [{ "amount": { "currency_code": "EUR", "value": 1 } }],
				application_context: { shipping_preference: 'NO_SHIPPING', locale:'de-DE' },
			});
		},

		onApprove: function (data, actions) {
			return actions.order.capture().then(function (details) {
				alert('Transaction completed by ' + details.payer.name.given_name + '!');
			});
		},

		onError: function (err) {
			console.log(err);
		}
	}).render('#payPal');
}
initPayPalButton();