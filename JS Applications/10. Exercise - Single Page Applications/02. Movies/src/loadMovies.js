import { onMovieDetails } from "./movieDetails.js";
import { responseHandler } from "./responseHandler.js";

const url = 'http://localhost:3030/data/movies';

const moviesListEle = document.querySelector('#movies-list');

export function loadMovies() {
    const fragment = document.createDocumentFragment();

    fetch(url)
        .then(res => responseHandler(res))
        .then(data => {
            Object.values(data).forEach(movie => {
                const ele = createMovieLiEle(movie);
                fragment.appendChild(ele);
            });
        })
        .then(() => {
            Array.from(moviesListEle.children).forEach(child => child.remove());
            moviesListEle.appendChild(fragment)
        })
        .catch(err => console.error(err));
}

function createMovieLiEle(movieObj) {
    const ele = document.createElement('li');
    ele.innerHTML =
        `<div class="card">
            <img src="${movieObj.img}" class="card-img-top">
            <p>${movieObj.title}</p>
            <div class="btn-group">
                <button id="${movieObj._id}" class="btn btn-primary">Details</button>
            </div>
        </div>`;

    ele.querySelector('button').addEventListener('click', onMovieDetails);

    return ele;
}