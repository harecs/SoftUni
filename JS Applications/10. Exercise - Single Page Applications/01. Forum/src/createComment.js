import { responseHandler } from "./responseHandler.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';

export function createCommentsElement(id) {
    // fetch(`${url}/${id}`)
    //     .then(res => responseHandler(res))
    //     .then(data => {
    //         // todo
    //     })
    return document.createElement('div');
}