function toggle() {
let button = document.getElementsByClassName(`button`)[0];
let moreText = document.querySelector(`#extra`);

    if(button.textContent === `More`) {
        button.textContent = `Less`
        moreText.style.display = "block"
    } else {
        button.textContent = `More`
        moreText.style.display = "none"
    }
}