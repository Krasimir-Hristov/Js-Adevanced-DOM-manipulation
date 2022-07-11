function subtract() {
 const inputs = document.querySelectorAll('#wrapper input')
 const result = document.querySelector('#result')
 result.textContent = inputs[0].value - inputs[1].value
}