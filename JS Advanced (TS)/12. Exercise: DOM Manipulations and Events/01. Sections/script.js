function create(words) {
    const contentElement = document.querySelector('#content');

    for (const word of words) {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = word;
        paragraphElement.style.display = 'none';

        const divElement = document.createElement('div');
        divElement.addEventListener('click', (e) => {
            e.currentTarget.firstChild.style.display = 'block';
        });
        divElement.appendChild(paragraphElement);

        contentElement.appendChild(divElement);
    }
}