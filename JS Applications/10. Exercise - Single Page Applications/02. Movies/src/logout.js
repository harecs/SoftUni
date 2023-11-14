import { loadHome } from "./app.js";

const url = 'http://localhost:3030/users/logout';

export function onLogout(e) {
    fetch(url, {
        method: 'GET',
        headers: { 'X-Authorization': localStorage.getItem('token') }
    })
        .then(res => {
            if (res.status != 204) {
                throw new Error(res.statusText);
            }
        })
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('userId');
            loadHome();
        })
        .catch(err => console.error(err));
}