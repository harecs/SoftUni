import * as http from "./http.js";

const baseUrl = 'http://localhost:3030';

const paths = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    ideas: '/data/ideas'
};

export function register(data) {
    return http.post(`${baseUrl}${paths.register}`, data);
}

export function login(data) {
    return http.post(`${baseUrl}${paths.login}`, data);
}

export function logout() {
    return http.get(`${baseUrl}${paths.logout}`, true);
}

export function dashboard() {
    return http.get(`${baseUrl}${paths.ideas}?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);
}

export function createIdea(data) {
    return http.post(`${baseUrl}${paths.ideas}`, data, true);
}

export function ideaDetails(id) {
    return http.get(`${baseUrl}${paths.ideas}/${id}`);
}

export function deleteIdea(id) {
    return http.del(`${baseUrl}${paths.ideas}/${id}`);
}