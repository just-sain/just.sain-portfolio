const styleToggler = document.querySelector('.style__toggler')

styleToggler.addEventListener('click', () => {
	document.querySelector('.style').classList.toggle('_open')
})

// hide style panel on scroll
window.addEventListener('scroll', () => {
	if (document.querySelector('.style').classList.contains('_open')) {
		document.querySelector('.style').classList.remove('_open')
	}
})

// working with theme colors
const alternateStyles = document.querySelectorAll('.alternate-style')

function setActiveStyle(color) {
	localStorage.setItem('themeColor', color)
	changeColor()
}

function changeColor() {
	alternateStyles.forEach(style => {
		if (localStorage.getItem('themeColor') === style.getAttribute('title')) {
			style.removeAttribute('disabled')
		} else {
			style.setAttribute('disabled', 'true')
		}
	})
}

// checking if color exist
if (localStorage.getItem('themeColor') !== null) {
	changeColor()
}

// dark and light mode
const dayNight = document.querySelector('.style__day-night')

dayNight.addEventListener('click', () => {
	document.body.classList.toggle('_dark')
	if (document.body.classList.contains('_dark')) {
		localStorage.setItem('themeMode', 'dark')
	} else {
		localStorage.setItem('themeMode', 'light')
	}
	updateIcon()
})

function themeMode() {
	if (localStorage.getItem('themeMode') !== null) {
		if (localStorage.getItem('themeMode') === 'light') {
			document.body.classList.remove('_dark')
		} else {
			document.body.classList.add('_dark')
		}
	}
	updateIcon()
}

themeMode()

function updateIcon() {
	if (document.body.classList.contains('_dark')) {
		dayNight.querySelector('i').classList.remove('fa-moon')
		dayNight.querySelector('i').classList.add('fa-sun')
	} else {
		dayNight.querySelector('i').classList.remove('fa-sun')
		dayNight.querySelector('i').classList.add('fa-moon')
	}
}
