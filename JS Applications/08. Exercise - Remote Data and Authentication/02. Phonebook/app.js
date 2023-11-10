function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const phonebookListElement = document.querySelector('#phonebook');
    const personInputElement = document.querySelector('#person');
    const phoneInputElement = document.querySelector('#phone');
    const loadButtonElement = document.querySelector('#btnLoad');
    const createButtonElement = document.querySelector('#btnCreate');

    loadButtonElement.addEventListener('click', onLoad);
    createButtonElement.addEventListener('click', onCreate);

    function onLoad() {
        removePhonebookContacts();

        fetch(url, { method: 'GET' })
            .then(res => responseHandler(res))
            .then(data => {
                Object.values(data).forEach(contact => {
                    phonebookListElement.appendChild(createLiElement(contact));
                });
            })
            .catch(err => console.error(err))

        function createLiElement(contactObj) {
            const liEle = document.createElement('li');
            liEle.textContent = `${contactObj.person}: ${contactObj.phone}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.id = contactObj._id;
            deleteButton.addEventListener('click', onDelete);

            liEle.appendChild(deleteButton)
            return liEle;
        }

        async function onDelete(e) {
            try {
                const res = await fetch(`${url}/${e.target.id}`, { method: 'DELETE' });

                if (res.status != 200) {
                    throw new Error(res.statusText);
                }

                onLoad();
            } catch (err) {
                console.error(err);
            }
        }
    }

    function onCreate() {
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                person: personInputElement.value,
                phone: phoneInputElement.value
            })
        })
            .then(res => responseHandler(res))
            .then(() => {
                personInputElement.value = '';
                phoneInputElement.value = '';
                onLoad();
            })
            .catch(err => console.error(err))
    }

    function responseHandler(res) {
        if (res.status == 200) {
            return res.json();
        }

        throw new Error(res.statusText);
    }

    function removePhonebookContacts() {
        Array.from(phonebookListElement.children).forEach(child => child.remove());
    }
}

attachEvents();