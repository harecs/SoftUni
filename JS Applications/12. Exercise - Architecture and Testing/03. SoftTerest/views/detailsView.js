import * as api from "../services/api.js";
import { switchView } from "./viewSwitcher.js";

export function createDetailsView(e) {
    const detailsView = document.createElement('div');
    detailsView.classList.add('container');
    detailsView.classList.add('home');
    detailsView.classList.add('some');

    const result = api.ideaDetails(e.target.id)
        .then(data => {
            console.log(data);
            detailsView.innerHTML =
                `<img class="det-img" src="${data.img}" />
                <div class="desc">
                    <h2 class="display-5">${data.title}</h2>
                    <p class="infoType">Description:</p>
                    <p class="idea-description">${data.description}</p>
                </div>`;

            if (data._ownerId == localStorage.getItem('userId')) {
                detailsView.innerHTML += `
                <div class="text-center">
                    <a id="${data._id}" class="btn detb" href="">Delete</a>
                </div>`;

                detailsView.querySelector('a').addEventListener('click', e => {
                    e.preventDefault();

                    api.deleteIdea(data._id);
                    switchView('dashboard');
                });
            }
        })
        .then(() => detailsView)
        .catch(err => console.error(err));

    return result;
}