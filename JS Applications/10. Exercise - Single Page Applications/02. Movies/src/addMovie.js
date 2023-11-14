import { loadHome } from "./app.js";
import { responseHandler } from "./responseHandler.js";

const url = 'http://localhost:3030/data/movies';
const inputFields = Array.from(document.querySelectorAll('#add-movie-form input'));
const textarea = document.querySelector('textarea');

export function onAddMovieSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const movieData = Object.fromEntries(formData.entries());

    if (!movieData.title || !movieData.description || !movieData.img) {
        console.error("The title, description and image shouldn't be empty.")
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieData)
    })
        .then(res => responseHandler(res))
        .then(() => {
            inputFields.forEach(input => input.value = '');
            textarea.value = '';
            loadHome();
        })
        .catch(err => console.error(err));
}