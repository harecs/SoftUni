export async function get(url, isAuthorized = false) {
    return httpFetch(url, 'GET', undefined, isAuthorized).then(res => responseHandler(res));
}

export async function post(url, body, isAuthorized = false) {
    return httpFetch(url, 'POST', body, isAuthorized).then(res => responseHandler(res));
}

export async function del(url) {
    return httpFetch(url, 'DELETE', undefined, true).then(res => responseHandler(res));
}

async function httpFetch(url, method, body, isAuthorizedFetch = false) {
    const options = {
        method: method.toUpperCase(),
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    if (isAuthorizedFetch) {
        options.headers['X-Authorization'] = localStorage.getItem('token');
    }

    return fetch(url, options);
}

function responseHandler(res) {
    if (res.ok) {
        if (res.status == 200) {
            return res.json();
        }
    } else {
        throw new Error(res.statusText);
    }
}