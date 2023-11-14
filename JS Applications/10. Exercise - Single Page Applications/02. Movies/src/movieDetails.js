import { onLike } from "./likeMovie.js";
import { onDelete, onEdit } from "./movieManipulation.js";
import { responseHandler } from "./responseHandler.js";
import { changeView } from "./viewChanger.js";

const url = 'http://localhost:3030/data/movies';
const likesUrl = 'http://localhost:3030/data/likes';

const movieDetailsEle = document.querySelector('#movie-example');
const titleEle = movieDetailsEle.querySelector('h1');
const imageEle = movieDetailsEle.querySelector('img');
const descriptionEle = movieDetailsEle.querySelector('p');
const detailsButtons = Array.from(movieDetailsEle.querySelectorAll('a'));
const userDetailsButtons = detailsButtons.slice(0, 2);
const likeButton = detailsButtons[2];
const likesCountEle = document.querySelector('span.enrolled-span');
const manipulationDivEle = document.querySelector('.col-md-4');

export function onMovieDetails(e, movieIdInput) {
    const movieId = movieIdInput ? movieIdInput : e.target.id;
    manipulationDivEle.id = movieId;

    fetch(`${url}/${movieId}`)
        .then(res => responseHandler(res))
        .then(data => {
            changeView('movie');
            displayDetailsButtons(data._ownerId);
            titleEle.textContent = `Movie title: ${data.title}`;
            imageEle.src = data.img;
            descriptionEle.textContent = data.description;
        })
        .catch(err => console.error(err));

    // Get the likes
    fetch(`${likesUrl}?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
        .then(res => responseHandler(res))
        .then(data => {
            likesCountEle.textContent = `Liked ${data}`;
        })
}

export function onDetailsButtonsClick(e) {
    e.preventDefault();
    const ele = e.target;
    const eleText = ele.textContent;

    if (ele.tagName == 'A') {
        const movieId = e.currentTarget.id;

        if (eleText == 'Delete') {
            onDelete(movieId);
        } else if (eleText == 'Edit') {
            onEdit(movieId);
        } else if (eleText == 'Like') {
            onLike(movieId);
        }
    }
}

function displayDetailsButtons(ownerId) {
    const userId = localStorage.getItem('userId');

    if (userId) {
        if (userId == ownerId) {
            userDetailsButtons.forEach(button => button.style.display = 'inline');
            likeButton.style.display = 'none';
        } else {
            userDetailsButtons.forEach(button => button.style.display = 'none');
            likeButton.style.display = 'inline'
        }
    } else {
        userDetailsButtons.forEach(button => button.style.display = 'none');
        likeButton.style.display = 'none';
    }
}