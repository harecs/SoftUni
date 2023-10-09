function notify(message) {
    const notificationElement = document.querySelector('#notification');

    notificationElement.textContent = message;

    notificationElement.addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none';
    })

    notificationElement.style.display = 'block';
}