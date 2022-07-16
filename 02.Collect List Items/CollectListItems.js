function extractText() {
  const listElements = Array.from(document.querySelectorAll('#items'));
  const resultText = document.querySelector('#result');
  listElements.forEach(e => {
      resultText.textContent = e.textContent
  })

}