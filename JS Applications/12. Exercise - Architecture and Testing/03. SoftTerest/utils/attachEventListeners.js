import * as api from "../services/api.js";
import { loadHomeView } from "../views/homeView.js";
import { switchView } from "../views/viewSwitcher.js";

export function attachEventListeners() {
    attachNavBarEvent();
}

function attachNavBarEvent() {
    document.querySelector('nav > div').addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            switch (e.target.textContent) {
                case 'Dashboard': switchView('dashboard'); break;
                case 'Create': switchView('create'); break;
                case 'Logout':
                    api.logout()
                        .then(() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('userId');
                        })
                        .then(() => loadHomeView())
                        .catch(err => console.error(err));
                    break;
                case 'Login': switchView('login'); break;
                case 'Register': switchView('register'); break;

                default:
                    break;
            }
        } else if (e.target.tagName == 'IMG') {
            loadHomeView();
        }
    });
}