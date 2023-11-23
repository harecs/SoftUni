import * as api from "./http.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function getOptions() {
    return api.get(url).catch(err => console.error(err));
}

export async function addOption(data) {
    return api.post(url, data).catch(err => console.error(err));
}