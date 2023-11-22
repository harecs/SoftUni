export function onButtonClick(e) {
    const button = e.target;

    if (button.textContent == 'Show status code') {
        button.parentElement.querySelector('.status').style.display = '';
        button.textContent = 'Hide status code';
    } else {
        button.parentElement.querySelector('.status').style.display = 'none';
        button.textContent = 'Show status code';
    }
}