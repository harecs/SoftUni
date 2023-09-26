function extract(content) {
    const initialText = document.getElementById(content).textContent;
    const parenthesis = Array.from(initialText.matchAll(/\(([\w ]+)\)/gm)).map(x => x[1]);

    return parenthesis.join('; ');
}