



let duration = 60;
let minDuration = 30;
let durationStep = 15;
let pricePerMinute = 2;

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
	document.querySelector('#hours').textContent = hours ? (hours + " " + ((hours == 1) ? "Stunde" : "Stunden")) : ''
	document.querySelector('#minutes').textContent = minutes ? (minutes + " Minuten") : ""
	let now = new Date()
	now.setMinutes(now.getMinutes() + duration)
	document.querySelector('#parkEnd').textContent = (now.getHours()) + ':' + String(now.getMinutes()).padStart(2, '0')
	document.querySelector('#parkPrice').textContent = Number((duration * pricePerMinute) / 100).toFixed(2)
}

document.querySelector('#more').addEventListener('click', moreTime)
document.querySelector('#less').addEventListener('click', lessTime)

updateDuration()