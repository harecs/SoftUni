export async function get(url) {
    return fetcher(url, 'GET')
        .then(res => responseHandler(res))
        .catch(err => errorHandler(err));
}

export async function post(url, data) {
    return fetcher(url, 'POST', data)
        .then(res => responseHandler(res))
        .catch(err => errorHandler(err));
}

export async function put(url, data) {
    return fetcher(url, 'PUT', data)
        .then(res => responseHandler(res))
        .catch(err => errorHandler(err));
}

export async function del(url) {
    fetcher(url, 'DELETE')
        .then(res => responseHandler(res))
        .catch(err => errorHandler(err));
}

function fetcher(url, method, data) {
    const options = { method };

    if (data) {
        options.headers = { 'Content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    return fetch(url, options);
}

function responseHandler(res) {
    if (res.status == 200) {
        return res.json();
    }

    throw new Error(res.statusText);
}

function errorHandler(err) {
    console.error(err);
}