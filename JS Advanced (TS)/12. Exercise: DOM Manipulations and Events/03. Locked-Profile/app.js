function lockedProfile() {
    const buttonElements = Array.from(document.querySelectorAll('button'));
    buttonElements.forEach(button => button.addEventListener('click', onClick));

    function onClick(e) {
        const profileElement = e.target.parentElement;
        const isLocked = profileElement.querySelector('input').checked;

        if (!isLocked) {
            const privateInfoElement = profileElement.querySelector('div');

            if (e.target.textContent == 'Show more') {
                privateInfoElement.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (e.target.textContent == 'Hide it') {
                privateInfoElement.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}