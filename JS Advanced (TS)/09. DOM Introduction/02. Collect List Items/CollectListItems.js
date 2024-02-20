function extractText() {
    const itemsElements = document.querySelectorAll('#items li');
    const textareaElement = document.querySelector('#result');
    
    for (const element of itemsElements) {
        textareaElement.value += `${element.innerText}\n`;
    }
}