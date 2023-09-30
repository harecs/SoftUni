function addItem() {
    const newItemText = document.querySelector('#newItemText').value;
    
    const newLiElement = document.createElement('li');
    newLiElement.textContent = newItemText;
    const linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.textContent = '[Delete]';
    linkElement.addEventListener('click', (e) => e.target.parentNode.remove());
    newLiElement.appendChild(linkElement);

    document.querySelector('#items').appendChild(newLiElement);
}