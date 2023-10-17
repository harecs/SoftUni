function solve() {
    const recipientInputEle = document.querySelector('#recipientName');
    const titleInputEle = document.querySelector('#title');
    const messageInputEle = document.querySelector('#message');
    const addButtonEle = document.querySelector('#add');
    const resetButtonEle = document.querySelector('#reset');

    const listOfMailsEle = document.querySelector('#list');
    const sentMailsListEle = document.querySelector('.sent-list');
    const deletedMailsListEle = document.querySelector('.delete-list');

    addButtonEle.addEventListener('click', onAdd);
    resetButtonEle.addEventListener('click', resetMailForm);

    function onAdd(e) {
        e.preventDefault();

        const recipient = recipientInputEle.value;
        const title = titleInputEle.value;
        const message = messageInputEle.value;

        if (!recipient || !title || !message) {
            return;
        }

        const mailElement = document.createElement('li');
        mailElement.innerHTML =
            `<h4>Title: ${title}</h4>
            <h4>Recipient Name: ${recipient}</h4>
            <span>${message}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`;

        mailElement.querySelector('#send').addEventListener('click', onSend);
        mailElement.querySelector('#delete').addEventListener('click', onDeleteMail);

        resetMailForm();
        listOfMailsEle.appendChild(mailElement);
    }

    function resetMailForm(e) {
        if (e) {
            e.preventDefault();
        }

        recipientInputEle.value = '';
        titleInputEle.value = '';
        messageInputEle.value = '';
    }

    function onSend(e) {
        e.preventDefault();
        const emailEle = e.target.parentElement.parentElement;
        const title = emailEle.querySelectorAll('h4')[0].textContent.substring(7);
        const recipient = emailEle.querySelectorAll('h4')[1].textContent.substring(16);

        const sentMailEle = document.createElement('li');
        sentMailEle.innerHTML =
            `<span>To: ${recipient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

        sentMailEle.querySelector('.delete').addEventListener('click', onDeleteMail);
        emailEle.remove();
        sentMailsListEle.appendChild(sentMailEle);
    }

    function onDeleteMail(e) {
        e.preventDefault();
        const emailEle = e.target.parentElement.parentElement;

        if (e.target.id === 'delete') {
            const title = emailEle.querySelectorAll('h4')[0].textContent.substring(7);
            const recipient = emailEle.querySelectorAll('h4')[1].textContent.substring(16);

            const deletedMailEle = document.createElement('li');
            deletedMailEle.innerHTML =
                `<span>To: ${recipient}</span>
                <span>Title: ${title}</span>`;

            emailEle.remove();
            deletedMailsListEle.appendChild(deletedMailEle);
        } else if (e.target.className === 'delete') {
            emailEle.querySelector('.btn').remove();

            const deletedMailEle = document.createElement('li');
            deletedMailEle.innerHTML = emailEle.innerHTML;

            deletedMailsListEle.appendChild(deletedMailEle);
            emailEle.remove();
        }
    }
}

solve()