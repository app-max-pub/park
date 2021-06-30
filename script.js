// console.log('fetch agent')
// fetch('https://api.max.pub/user-agent/index.php').then(x => x.json()).then(x => {
// 	console.log('agent', x)
// 	// document.querySelector('#browser').innerText = x.browser
// 	document.querySelector('#userAgent').innerText = Object.values(x).join('\n') + '\n' + navigator.userAgent
// 	// if (x.browser == 'Safari' || x.os == 'iOS') {
// 	// if (window.ApplePaySession) {
// 	// 	import('https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js')
// 	// 	import('./pay.apple.js')
// 	// }
// 	// if (x.browser == 'Chrome') {
// 	// 	console.log("CHROME")
// 	// 	document.querySelector('#googlePay').style.display = 'block'
// 	// 	// import('./pay.google.js').then(x => onGooglePayLoaded())
// 	// 	// import('https://pay.google.com/gp/p/js/pay.js').then(x => onGooglePayLoaded())
// 	// }
// })
{/* <script src="https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js"></script> */ }
// {/* <script src='pay.apple.js'></script> */}
//<script src="pay.google.js"></script>
//<script src="https://pay.google.com/gp/p/js/pay.js" onload="onGooglePayLoaded()"></script>


if (window.ApplePaySession) {
	import('https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js')
	import('./pay.apple.js')
}



let duration = 60;
let minDuration = 30;
let durationStep = 15;
let pricePerMinute = 0.02;

function bill() {
	return Number(duration * pricePerMinute).toFixed(2)
}

function lessTime() {
	duration -= durationStep;
	if (duration < minDuration) duration = minDuration
	updateDuration()
}
function moreTime() {
	duration += durationStep;
	updateDuration()
}
function updateDuration() {
	let hours = Math.floor(duration / 60)
	let minutes = duration % 60
	let text = [
		hours ? (hours + " " + ((hours == 1) ? "Stunde" : "Stunden")) : '',
		minutes ? (minutes + " Minuten") : ""
	].filter(x => x)
	document.querySelector('#duration>div').innerHTML = text.join('<br/>')
	// document.querySelector('#hours').textContent = hours ? (hours + " " + ((hours == 1) ? "Stunde" : "Stunden")) : ''
	// document.querySelector('#minutes').textContent = minutes ? (minutes + " Minuten") : ""
	let now = new Date()
	now.setMinutes(now.getMinutes() + duration)
	document.querySelector('#parkEnd').textContent = (now.getHours()) + ':' + String(now.getMinutes()).padStart(2, '0')
	document.querySelector('#parkPrice').textContent = bill()
}

document.querySelector('#more').addEventListener('click', moreTime)
document.querySelector('#less').addEventListener('click', lessTime)

updateDuration()