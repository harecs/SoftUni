loadAllBooks();
attachEventListeners();

async function loadAllBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';

    const booksTbodyElement = document.querySelector('tbody');
    Array.from(booksTbodyElement.children).forEach(child => child.remove());

    try {
        const res = await fetch(url, { method: 'GET' });

        if (res.status != 200) {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        Object.entries(data).forEach(bookEntry => {
            const trElement = createTrElement(bookEntry);
            booksTbodyElement.appendChild(trElement);
        });
    } catch (err) {
        console.error(err);
    }

    function createTrElement(bookEntry) {
        const [bookId, bookObj] = bookEntry;

        const trEle = document.createElement('tr');
        trEle.innerHTML =
            `<td>${bookObj.title}</td>
        <td>${bookObj.author}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>`;

        const formH3Element = document.querySelector('h3');
        const [titleInputElement, authorInputElement] = document.querySelectorAll('form input');
        const formButton = document.querySelector('form button');
        const [editButton, deleteButton] = trEle.querySelectorAll('button');

        editButton.addEventListener('click', onEdit);
        deleteButton.addEventListener('click', onDelete);

        function onEdit() {
            titleInputElement.value = bookObj.title;
            authorInputElement.value = bookObj.author;

            formH3Element.textContent = 'Edit FORM';
            formButton.textContent = 'Save';
            formButton.id = bookId;
        }

        function onDelete() {
            fetch(`${url}/${bookId}`, { method: 'DELETE' })
                .then(res => {
                    if (res.status == 200) {
                        return res.json();
                    }

                    throw new Error(res.statusText);
                })
                .then(() => loadAllBooks())
                .catch(err => console.error(err));
        }

        return trEle;
    }
}

function attachEventListeners() {
    const loadBooksButtonElement = document.querySelector('#loadBooks');
    const formElement = document.querySelector('form');

    loadBooksButtonElement.addEventListener('click', loadAllBooks);
    formElement.addEventListener('submit', onFormButtonClick);
}

async function onFormButtonClick(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/books';

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const buttonEle = e.target.querySelector('button');
    const formH3Ele = e.target.querySelector('h3');

    if (!data.title || !data.author) {
        return;
    }

    try {
        if (buttonEle.textContent == 'Submit') {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.status != 200) {
                throw new Error(res.statusText);
            }
        } else if (buttonEle.textContent == 'Save') {
            const res = await fetch(`${url}/${buttonEle.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (res.status != 200) {
                throw new Error(res.statusText);
            }

            Array.from(e.target.querySelectorAll('input')).forEach(ele => ele.value = '');
            buttonEle.textContent = 'Submit';
            buttonEle.id = '';
            formH3Ele.textContent = 'FORM';
        }

        loadAllBooks();
    } catch (err) {
        console.error(err);
    }
}