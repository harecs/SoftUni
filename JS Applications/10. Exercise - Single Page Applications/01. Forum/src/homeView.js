import { responseHandler } from "./responseHandler.js";
import { loadTopicsPreview } from "./topicsPreview.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const newTopicEle = document.querySelector('.new-topic-border');

const topicFormEle = newTopicEle.querySelector('form');
const titleInputEle = topicFormEle.querySelector('#topicName');
const usernameInputEle = topicFormEle.querySelector('#username');
const postTextInputEle = topicFormEle.querySelector('#postText');
const cancelButton = topicFormEle.querySelector('.cancel');
const postButton = topicFormEle.querySelector('.public');

const topicsPreviewEle = document.querySelector('.topic-title');
const openedPostEle = document.querySelector('.theme-content');
const newCommentEle = document.querySelector('.answer-comment');

topicFormEle.addEventListener('submit', (e) => e.preventDefault());
cancelButton.addEventListener('click', onTopicCancel);
postButton.addEventListener('click', onTopicPost);

function onTopicPost() {
    const topicDate = new Date();

    const topicData = {
        // topicName: titleInputEle.value,
        title: titleInputEle.value,
        username: usernameInputEle.value,
        // postText: postTextInputEle.value,
        content: postTextInputEle.value,
        date: topicDate
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topicData)
    })
        .then(res => responseHandler(res))
        .then(() => loadTopicsPreview())
        .catch(err => console.error(err));

    clearNewTopicForm();
}

function onTopicCancel() {
    clearNewTopicForm();
}

function clearNewTopicForm() {
    titleInputEle.value = '';
    usernameInputEle.value = '';
    postTextInputEle.value = '';
}

export function loadHomeView() {
    newTopicEle.style.display = 'block';
    topicsPreviewEle.style.display = 'block';
    loadTopicsPreview();
    openedPostEle.style.display = 'none';
    newCommentEle.style.display = 'none';
}