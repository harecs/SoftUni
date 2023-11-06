loadRecipes();

function loadRecipes() {
    const url = 'http://localhost:3030';

    fetch(url + '/jsonstore/cookbook/recipes/', { method: 'GET' })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(data => {
            const mainElement = document.querySelector('main');
            removeMainElementChildren();

            Object.values(data).forEach(recipe => {
                const recipePreviewElement = createRecipePreviewElement(recipe);
                mainElement.appendChild(recipePreviewElement);
            });
        })
        .catch(err => console.error(err));
}

function removeMainElementChildren() {
    Array.from(document.querySelector('main').children)
        .forEach(element => element.remove());
}

function createRecipePreviewElement(recipeObj) {
    const previewElement = document.createElement('article');
    previewElement.id = recipeObj._id;
    previewElement.className = 'preview';

    previewElement.innerHTML = `
        <div class="title">
            <h2>${recipeObj.name}</h2>
        </div>
        <div class="small">
            <img src="${recipeObj.img}">
        </div>`;

    previewElement.addEventListener('click', onRecipeClick)

    return previewElement;
}

function onRecipeClick(e) {
    const url = 'http://localhost:3030';
    const recipeId = e.currentTarget.id;

    fetch(url + `/jsonstore/cookbook/details/${recipeId}`)
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(data => {
            const recipeDetailsElement = createRecipeDetailsElement(data);

            removeMainElementChildren();
            document.querySelector('main').appendChild(recipeDetailsElement);
        })
        .catch(err => console.error(err));
}

function createRecipeDetailsElement(detailsObj) {
    const recipeDetailsElement = document.createElement('article');

    recipeDetailsElement.innerHTML = `
            <h2>${detailsObj.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${detailsObj.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul></ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
            </div>`;

    const ingredientsListElement = recipeDetailsElement.querySelector('ul');
    const preparationDivElement = recipeDetailsElement.querySelector('.description');

    detailsObj.ingredients.forEach(ingredient => {
        ingredientsListElement.appendChild(createSingleDetailElement('li', ingredient));
    });

    detailsObj.steps.forEach(step => {
        preparationDivElement.appendChild(createSingleDetailElement('p', step));
    });

    return recipeDetailsElement;
}
function createSingleDetailElement(tagName, textContent) {
    const element = document.createElement(tagName);
    element.textContent = textContent;

    return element;
}