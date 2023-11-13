import { responseHandler } from "./responseHandler.js";
import { loadTopicView } from "./topicView.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const topicsPreviewEle = document.querySelector('.topic-title');

export function loadTopicsPreview() {
    fetch(url)
        .then(res => responseHandler(res))
        .then(data => {
            const fragment = document.createDocumentFragment();

            Object.values(data).forEach(topic => {
                const ele = document.createElement('div')
                ele.className = 'topic-container';
                ele.innerHTML =
                    `<div class="topic-name-wrapper">
                        <div class="topic-name">
                            <a href="#" class="normal">
                                <h2>${topic.title}</h2>
                            </a>
                            <div class="columns">
                                <div>
                                    <p>Date: <time>${topic.date}</time></p>
                                    <div class="nick-name">
                                        <p>Username: <span>${topic.username}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

                const anchorEle = ele.querySelector('a');
                anchorEle.id = topic._id;
                anchorEle.addEventListener('click', e => {
                    e.preventDefault();
                    loadTopicView(e.currentTarget.id);
                })

                fragment.appendChild(ele);
            });

            return fragment;
        })
        .then(fragment => {
            Array.from(topicsPreviewEle.children).forEach(child => child.remove());
            topicsPreviewEle.appendChild(fragment);
        })
        .catch(err => console.error(err));
}