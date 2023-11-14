export function responseHandler(res) {
    if (res.status == 200) {
        return res.json();
    }

    throw new Error(res.statusText);
}