import { loadHome } from "./app.js";
import { responseHandler } from "./responseHandler.js";
import { changeView } from "./viewChanger.js";

const url = 'http://localhost:3030/data/movies';

// maybe inside onEdit function
const formEle = document.querySelector('#edit-movie form');
const titleEle = document.querySelector('#edit-movie #title');
const descriptionEle = document.querySelector('#edit-movie textarea');
const imgEle = document.querySelector('#edit-movie #imageUrl');

export function onDelete(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': localStorage.getItem('token') }
    })
        .then(res => responseHandler(res))
        .then(() => loadHome())
        .catch(err => console.error(err));
}

export function onEdit(id) {
    fetch(`${url}/${id}`)
        .then(res => responseHandler(res))
        .then(data => {
            formEle.id = id;
            changeView('edit');
            titleEle.value = data.title;
            descriptionEle.value = data.description;
            imgEle.value = data.img;
        })
        .catch(err => console.error(err));
}