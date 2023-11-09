accordion();

function accordion() {
    const url = 'http://localhost:3030';
    const mainSectionElement = document.querySelector('#main');

    fetch(url + '/jsonstore/advanced/articles/list', { method: 'GET' })
        .then(res => responseHandler(res))
        .then(data => {
            data.forEach(articleObj => {
                mainSectionElement.appendChild(createArticleElement(articleObj));
            });
        })
        .catch(err => console.error(err));

    function createArticleElement(infoObj) {
        const articleDivElement = document.createElement('div');
        articleDivElement.className = 'accordion';

        articleDivElement.innerHTML =
            `<div class="head">
                <span>${infoObj.title}</span>
                <button class="button" id="${infoObj._id}">More</button>
            </div>
            <div class="extra">
                <p></p>
            </div>`;

        const buttonElement = articleDivElement.querySelector('button');
        const detailsElement = articleDivElement.querySelector('.extra');

        buttonElement.addEventListener('click', e => {
            const id = e.target.id;

            fetch(url + `/jsonstore/advanced/articles/details/${id}`)
                .then(res => responseHandler(res))
                .then(data => detailsElement.children[0].textContent = data.content)
                .then(() => {
                    if (e.target.textContent == 'More') {
                        e.target.textContent = 'Less';
                        detailsElement.style.display = 'block';
                    } else {
                        e.target.textContent = 'More';
                        detailsElement.style.display = 'none';
                    }
                })
                .catch(err => console.error(err));
        });

        return articleDivElement;
    }

    function responseHandler(res) {
        if (res.status == 200) {
            return res.json();
        }

        throw new Error(res.statusText);
    }
}