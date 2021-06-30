// remember licence
document.addEventListener('input', e => {
	// console.log(e.target.id,e.target.value)
	localStorage[e.target.id] = e.target.value
});
// restore licence
window.addEventListener('load', e => {
	// console.log('page is fully loaded');
	for (var i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i)
		let val = localStorage[key]
		// console.log(key, val)
		try {
			document.querySelector(`input#${key}`).value = val
		} catch { }
	}
});


