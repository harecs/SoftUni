function validate() {
    const inputFieldElement = document.querySelector('#email');
    const regExp = /[a-z]+@[a-z]+.[a-z]+/g;

    inputFieldElement.addEventListener('change', (e) => {
        if (!regExp.test(inputFieldElement.value)) {
            inputFieldElement.className = 'error';
        } else {
            inputFieldElement.className = '';
        }
    });
}