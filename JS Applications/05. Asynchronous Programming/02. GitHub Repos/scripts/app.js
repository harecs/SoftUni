function loadRepos() {
	const url = 'https://api.github.com';
	const reposListElement = document.querySelector('#repos');
	const username = document.querySelector('#username').value;

	fetch(url + `/users/${username}/repos`)
		.then(res => {
			if (res.ok) {
				return res.json()
			}

			throw new Error(res.statusText);
		})
		.then(data => {
			resetReposList();

			Array.from(data).forEach(repo => {
				const aElement = document.createElement('a');
				aElement.textContent = repo['full_name'];
				aElement.setAttribute('href', repo['html_url']);

				const liElement = document.createElement('li');
				liElement.appendChild(aElement);

				reposListElement.appendChild(liElement);
			});
		})
		.catch(err => {
			resetReposList();
			const aElement = document.createElement('a');
			aElement.textContent = username;

			const liElement = document.createElement('li');
			liElement.appendChild(aElement);

			reposListElement.appendChild(liElement)
		});

	function resetReposList() {
		Array.from(reposListElement.children).forEach(child => child.remove());
	}
}