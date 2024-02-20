function addItem() {
    const textInputElement = document.querySelector('#newItemText');
    const valueInputElement = document.querySelector('#newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value;
    optionElement.value = valueInputElement.value;

    document.querySelector('#menu').appendChild(optionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}