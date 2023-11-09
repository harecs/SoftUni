function lockedProfile() {
    const url = 'http://localhost:3030';
    const mainElement = document.querySelector('#main');

    fetch(url + '/jsonstore/advanced/profiles', { method: 'GET' })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(data => {
            Array.from(mainElement.children).forEach(child => child.remove());

            Object.values(data).forEach(obj => {
                const profileElement = createProfileElement(obj);
                mainElement.appendChild(profileElement);
            });
        })
        .catch(err => console.error(err));

    function createProfileElement(profile) {
        const profileDivElement = document.createElement('div');
        profileDivElement.className = 'profile';

        profileDivElement.innerHTML =
            `<img src="./iconProfile2.png" class="userIcon" />
			<label>Lock</label>
			<input type="radio" name="user1Locked" value="lock" checked>
			<label>Unlock</label>
			<input type="radio" name="user1Locked" value="unlock"><br>
			<hr>
			<label>Username</label>
			<input type="text" name="user1Username" value="${profile.username}" disabled readonly />
			<div class="user1Username">
				<hr>
				<label>Email:</label>
				<input type="email" name="user1Email" value="${profile.email}" disabled readonly />
				<label>Age:</label>
				<input type="email" name="user1Age" value="${profile.age}" disabled readonly />
			</div>
			<button>Show more</button>`;

        const buttonElement = profileDivElement.querySelector('button');
        const moreInfoElement = profileDivElement.querySelector('div');
        moreInfoElement.style.display = 'none';

        buttonElement.addEventListener('click', e => {
            const unlockRadioButton = e.target.parentElement.querySelectorAll('input')[1];

            if (unlockRadioButton.checked) {
                if (moreInfoElement.style.display == 'none') {
                    buttonElement.textContent = 'Hide it';
                    moreInfoElement.style.display = 'block';
                } else {
                    buttonElement.textContent = 'Show more';
                    moreInfoElement.style.display = 'none';
                }
            }
        });

        return profileDivElement;
    }
}