function deleteByEmail() {
    const emailToDelete = document.querySelector('label input').value;
    const emailElements = document.querySelectorAll('td:nth-child(even)');
    const resultElement = document.querySelector('#result');

    for (const element of emailElements) {
        if (element.textContent == emailToDelete) {
            element.parentNode.remove();
            resultElement.textContent = 'Deleted.';
            return;
        }
    }

    resultElement.textContent = 'Not found.';
}