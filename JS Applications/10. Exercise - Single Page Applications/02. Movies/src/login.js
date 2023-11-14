import { loadHome } from "./app.js";
import { responseHandler } from "./responseHandler.js";
import { changeView } from "./viewChanger.js";

const url = 'http://localhost:3030/users/login';
const inputFields = Array.from(document.querySelectorAll('#form-login input'));

export function loadLoginView(e) {
    changeView('login');
}

export function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    })
        .then(res => responseHandler(res))
        .then(data => {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('email', data.email);
            localStorage.setItem('userId', data._id);
            inputFields.forEach(input => input.value = '');
            loadHome();
        })
        .catch(err => console.error(err));
}