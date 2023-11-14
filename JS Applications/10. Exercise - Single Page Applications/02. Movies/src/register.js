import { changeView } from "./viewChanger.js";
import { responseHandler } from "./responseHandler.js";
import { loadHome } from "./app.js";

const url = 'http://localhost:3030/users/register';
const inputFields = Array.from(document.querySelectorAll('#form-sign-up input'));

export function loadRegisterView(e) {
    changeView('register');
}

export function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());

    if (!validateFormData(registerData)) {
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: registerData.email,
            password: registerData.password
        })
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

function validateFormData(obj) {
    if (!obj.email) {
        console.error('The email input must be filled');
        return false;
    }

    if (obj.password.length < 6) {
        console.error('The password should be at least 6 characters long');
        return false;
    }

    if (obj.password !== obj.repeatPassword) {
        console.error('The repeat password should be equal to the password');
        return false;
    }

    return true;
}