attachEventListenerForRegister();

function attachEventListenerForRegister() {
    const loginFormElement = document.querySelector('form');
    loginFormElement.addEventListener('submit', onRegister);
}

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.password != data.rePass) {
        return;
    }

    fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(data => {
            localStorage.setItem('token', data.accessToken);
            window.location.href = 'index.html';
        })
        .catch(err => console.error(err));
}