import { onAddMovieSubmit } from "./addMovie.js";
import { onEditMovieSubmit } from "./editMovie.js";
import { loadMovies } from "./loadMovies.js";
import { onLogin } from "./login.js";
import { onDetailsButtonsClick } from "./movieDetails.js";
import { loadNavigationBar } from "./navigationBar.js";
import { onRegister } from "./register.js";
import { changeView } from "./viewChanger.js";

// maybe inside the function
document.querySelector('#form-sign-up form').addEventListener('submit', onRegister);
document.querySelector('#form-login form').addEventListener('submit', onLogin);
document.querySelector('#add-movie-form').addEventListener('submit', onAddMovieSubmit);
document.querySelector('#edit-movie form').addEventListener('submit', onEditMovieSubmit);
const addMovieButton = document.querySelector('#add-movie-button');
addMovieButton.addEventListener('click', (e) => {
    e.preventDefault();
    changeView('add');
});
document.querySelector('div.col-md-4').addEventListener('click', onDetailsButtonsClick);


loadHome();

export function loadHome() {
    loadNavigationBar();

    changeView('home');
    displayAddMovieButton();
    loadMovies();
}

function displayAddMovieButton() {
    addMovieButton.style.display =
        localStorage.getItem('token')
            ? 'block'
            : 'none';
}