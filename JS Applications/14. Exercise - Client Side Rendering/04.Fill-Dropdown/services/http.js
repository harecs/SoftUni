export function get(url) {
    return fetcher('GET', url);
}

export function post(url, data) {
    return fetcher('POST', url, data);
}


async function fetcher(method, url, data) {
    const options = { method };

    if (method == 'POST') {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(res => resHandler(res));
}

function resHandler(res) {
    if (res.status == 200) {
        return res.json();
    }

    throw new Error(res.statusText);
}