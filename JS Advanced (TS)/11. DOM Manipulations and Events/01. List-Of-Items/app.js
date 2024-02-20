function addItem() {
    const newItemText = document.querySelector('#newItemText').value;
    const newLi = document.createElement('li');
    newLi.textContent = newItemText;
    document.querySelector('#items').appendChild(newLi);
}