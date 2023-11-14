const viewElements = {
    home: document.querySelector('#home-page'),
    add: document.querySelector('#add-movie'),
    movie: document.querySelector('#movie-example'),
    edit: document.querySelector('#edit-movie'),
    login: document.querySelector('#form-login'),
    register: document.querySelector('#form-sign-up')
};

const viewNames = Object.keys(viewElements);

export function changeView(desiredViewName) {
    viewNames
        .filter(viewName => viewName != desiredViewName)
        .forEach(viewName => viewElements[viewName].style.display = 'none');

    viewElements[desiredViewName].style.display = 'block'
}