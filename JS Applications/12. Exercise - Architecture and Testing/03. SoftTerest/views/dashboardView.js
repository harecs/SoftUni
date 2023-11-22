import * as api from "../services/api.js";
import { switchView } from "./viewSwitcher.js";

const h1Ele = document.createElement('h1');
h1Ele.textContent = 'No ideas yet! Be the first one :)';

export function createDashboardView() {
    const dashboardView = document.createElement('div');
    dashboardView.id = 'dashboard-holder';

    api.dashboard()
        .then(data => {
            if (data.length == 0) {
                dashboardView.appendChild(h1Ele);
            } else {
                const fragment = document.createDocumentFragment();
                data.forEach(info => fragment.appendChild(createIdeaEle(info)));
                dashboardView.appendChild(fragment);
            }
        })
        .catch(err => console.error(err));

    return dashboardView;
}

function createIdeaEle(obj) {
    const ele = document.createElement('div');
    ele.className = 'card overflow-hidden current-card details';
    ele.style.width = '20rem';
    ele.style.height = '18rem';
    ele.innerHTML =
        `<div class="card-body">
            <p class="card-text">${obj.title}</p>
        </div>
        <img class="card-image" src="${obj.img}" alt="Card image cap">
        <a class="btn" href="">Details</a>`;

    const btn = ele.querySelector('a');
    btn.id = obj._id;

    btn.addEventListener('click', e => {
        e.preventDefault();
        switchView('details', e);
    });

    return ele;
}