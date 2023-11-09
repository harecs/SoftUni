function attachEvents() {
    const url = 'http://localhost:3030';

    const selectElement = document.querySelector('select');
    const postTitleElement = document.querySelector('#post-title');
    const postDetailsElement = document.querySelector('#post-body');
    const postCommentsList = document.querySelector('#post-comments');

    document.querySelector('#btnLoadPosts').addEventListener('click', onLoadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', onView);

    function onLoadPosts(e) {
        fetch(`${url}/jsonstore/blog/posts`, { method: 'GET' })
            .then(res => responseHandler(res))
            .then(data => {
                Object.values(data).forEach(postObj => {
                    const optionElement = document.createElement('option');
                    optionElement.value = postObj.id;
                    optionElement.textContent = postObj.title;

                    selectElement.appendChild(optionElement);
                });
            })
            .catch(err => console.error(err));
    }

    function onView(e) {
        const postId = e.target.previousElementSibling.selectedOptions[0].value;

        fetch(`${url}/jsonstore/blog/posts`, { method: 'GET' })
            .then(res => responseHandler(res))
            .then(data => Object.values(data).find(obj => obj.id == postId))
            .then(postData => {
                postTitleElement.textContent = postData.title;
                postDetailsElement.textContent = postData.body;
            })
            .catch(err => console.error(err));

        fetch(`${url}/jsonstore/blog/comments`, { method: 'GET' })
            .then(res => responseHandler(res))
            .then(data => {
                return Object.values(data).filter(comment => comment.postId == postId);
            })
            .then(comments => {
                Array.from(postCommentsList.children).forEach(child => child.remove());

                comments.forEach(comment => {
                    postCommentsList.appendChild(createCommentElement(comment));
                });
            });
    }

    function responseHandler(res) {
        if (res.status == 200) {
            return res.json();
        }

        throw new Error(res.statusText);
    }

    function createCommentElement(commentObj) {
        const commentElement = document.createElement('li');
        commentElement.id = commentObj.id;
        commentElement.textContent = commentObj.text;

        return commentElement;
    }
}
attachEvents();