function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const messagesTextareaElement = document.querySelector('#messages');
    const inputElements = document.querySelectorAll('input');
    const authorInputElement = inputElements[0];
    const messageInputElement = inputElements[1];
    const submitButtonElement = inputElements[2];
    const refreshButtonElement = inputElements[3];

    submitButtonElement.addEventListener('click', onSubmit);
    refreshButtonElement.addEventListener('click', onRefresh);

    function onSubmit() {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: authorInputElement.value,
                content: messageInputElement.value
            })
        })
            .then(res => {
                if (res.status != 200) {
                    throw new Error(res.statusText);
                }
            })
            .then(() => {
                authorInputElement.value = '';
                messageInputElement.value = '';
            })
            .catch(err => console.error(err));
    }

    async function onRefresh() {
        try {
            const res = await fetch(url, { method: 'GET' });

            if (res.status != 200) {
                throw new Error(res.statusText);
            }

            const data = await res.json();
            let output = '';

            Object.values(data).forEach(message => {
                output += `${message.author}: ${message.content}\n`;
            });

            messagesTextareaElement.value = output.trim();
        } catch (err) {
            console.error(err);
        }
    }
}

attachEvents();