import { loadHome } from "./app.js";
import { loadLoginView } from "./login.js";
import { onLogout } from "./logout.js";
import { loadRegisterView } from "./register.js";

const navBar = document.querySelector('nav');
const userElements = Array.from(navBar.getElementsByClassName('nav-item user'));
const guestElements = Array.from(navBar.getElementsByClassName('nav-item guest'));

navBar.addEventListener('click', e => {
    e.preventDefault();
    const ele = e.target;
    const eleText = ele.textContent;

    if (ele.tagName == 'A') {
        if (eleText == 'Login') {
            loadLoginView(e);
        } else if (eleText == 'Register') {
            loadRegisterView(e);
        } else if (eleText == 'Logout') {
            onLogout(e);
        } else if (eleText == 'Movies') {
            loadHome();
        }
    }
});

export function loadNavigationBar() {
    if (localStorage.getItem('token')) {
        userElements.forEach(ele => ele.style.display = 'block');
        userElements[0].children[0].textContent = `Welcome, ${localStorage.getItem('email')}`;
        guestElements.forEach(ele => ele.style.display = 'none');
    } else {
        userElements.forEach(ele => ele.style.display = 'none');
        guestElements.forEach(ele => ele.style.display = 'block');
    }
}