import * as http from "./http.js";

const url = 'http://localhost:3030/jsonstore/collections/books';

export function getAllBooks() {
    return http.get(url);
}

export function getBook(id) {
    return http.get(`${url}/${id}`);
}

export function createBook(data) {
    return http.post(url, data);
}

export function updateBook(id, data) {
    return http.put(`${url}/${id}`, data);
}

export function deleteBook(id) {
    return http.del(`${url}/${id}`);
}