import { createCommentsElement } from "./createComment.js";
import { responseHandler } from "./responseHandler.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const newTopicEle = document.querySelector('.new-topic-border');
const topicsPreviewEle = document.querySelector('.topic-title');
const openedPostEle = document.getElementsByClassName('theme-content')[0];
const newCommentEle = document.querySelector('.answer-comment');

export function loadTopicView(id) {
    openedPostEle.style.display = 'block';
    newCommentEle.style.display = 'block';

    newTopicEle.style.display = 'none';
    topicsPreviewEle.style.display = 'none';

    const fragment = document.createDocumentFragment();

    fetch(`${url}/${id}`)
        .then(res => responseHandler(res))
        .then(data => {

            const themeNameEle = document.createElement('div');
            themeNameEle.className = 'theme-title';
            themeNameEle.innerHTML =
                `<div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>${data.title}</h2>
                    </div>
                </div>`;

            const headerEle = document.createElement('div');
            headerEle.innerHTML =
                `<img src="./static/profile.png" alt="avatar">
                    <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
                    <p class="post-content"></p>`;
            headerEle.querySelector('.post-content').textContent = data.content;

            fragment.appendChild(themeNameEle);
        })
        .then(() => {
            const ele = createCommentsElement(id);
            fragment.appendChild(ele);
        })
        .then(() => {
            openedPostEle.appendChild(fragment);
        })
}