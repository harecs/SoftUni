function solve() {
    const outputElement = document.querySelector('#output');
    outputElement.innerHTML = '';

    const sentences = document.querySelector('#input').value
        .split('.')
        .filter(x => x);

    let formattedText = '';

    sentences.forEach((sentence, i) => {
        formattedText += sentence + '.';

        if (i !== 0 && (i + 1) % 3 === 0) {
            appendFormattedParagraph(formattedText);
            formattedText = '';
        }
    });

    if (formattedText) {
        appendFormattedParagraph(formattedText);
    }

    function appendFormattedParagraph(text) {
        const pElement = document.createElement('p');
        pElement.textContent = text;
        outputElement.appendChild(pElement);
    }
}