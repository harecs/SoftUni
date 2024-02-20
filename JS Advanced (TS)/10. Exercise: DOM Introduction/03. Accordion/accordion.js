function toggle() {
    const buttonElement = document.querySelector('#accordion span');
    const extraElement = document.querySelector('#extra');

    if (extraElement.style.display == 'none') {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}