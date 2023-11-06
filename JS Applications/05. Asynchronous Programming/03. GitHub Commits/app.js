function loadCommits() {
    const url = 'https://api.github.com';
    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const commitsListElement = document.querySelector('#commits');

    fetch(url + `/repos/${username}/${repo}/commits`, { method: 'GET' })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(res.status);
        })
        .then(data => {
            data.forEach(commitInfo => {
                const liElement = createLiItem(`${commitInfo.commit.author.name}: ${commitInfo.commit.message}`);
                commitsListElement.appendChild(liElement);
            });
        })
        .catch((err) => {
            removeCommitsListChildren();
            commitsListElement.appendChild(createLiItem(`${err} (Not Found)`));
        })

    function removeCommitsListChildren() {
        Array.from(commitsListElement.children).forEach(ele => ele.remove());
    }

    function createLiItem(textContent) {
        const liElement = document.createElement('li');
        liElement.textContent = textContent;

        return liElement;
    }
}