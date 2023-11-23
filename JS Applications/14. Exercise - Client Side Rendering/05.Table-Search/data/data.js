export function getData() {
    return fetch('http://localhost:3030/jsonstore/advanced/table')
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .catch(err => console.error(err));
}