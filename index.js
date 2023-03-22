
const form = document.querySelector('form')
const textField = document.querySelector('input')


const newsletter = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
	form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}


const textCheck = (event) => {
    event.preventDefault()
    if (textField.value === '' || !textField.value.includes('@')) {
		textField.classList.add('alert')
	} else {
		textField.classList.remove('alert')
	}
}

form.addEventListener('submit', newsletter)

textField.addEventListener('input', textCheck)


