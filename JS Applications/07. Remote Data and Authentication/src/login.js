attachEventListenerForLogin();

function attachEventListenerForLogin() {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', onLogin);
}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    const url = 'http://localhost:3030/users/login';

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.status != 200) {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        localStorage.setItem('token', data.accessToken);
        window.location.href = 'index.html';
    } catch (err) {
        console.error(err);
    }
}