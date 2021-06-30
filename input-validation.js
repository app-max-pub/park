for (let input of document.querySelectorAll('[pattern]'))
	input.addEventListener('keydown', e => {
		// console.log('key down2', e)
		let pattern = e.target.getAttribute('pattern')
		// console.log('pattern', pattern)
		// console.log(e.key.match(pattern) ? 'yes' : 'no')
		if (!e.key.match(pattern))
			e.preventDefault()
	})


for (let input of document.querySelectorAll('[pattern]'))
	input.addEventListener('focusout', e => {
		console.log(e, 'lost focus')
		console.log(e.target)
		// var element = $(this);        
		if (e.target.innerText.trim() == '') {
			e.target.innerHTML = ''
		}
	});
