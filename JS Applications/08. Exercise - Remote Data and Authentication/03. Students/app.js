loadStudents();
attachSubmitEventListener();


function loadStudents() {
    const tbodyElement = document.querySelector('tbody');
    Array.from(tbodyElement.children).forEach(child => child.remove());

    fetch('http://localhost:3030/jsonstore/collections/students', { method: 'GET' })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(data => {
            Object.values(data).forEach(student => {
                const trElement = createTrElement(student);
                tbodyElement.appendChild(trElement);
            });
        })
        .catch(err => console.error(err));
}

function createTrElement(studentObj) {
    const trEle = document.createElement('tr');
    trEle.innerHTML =
        `<td>${studentObj.firstName}</td>
            <td>${studentObj.lastName}</td>
            <td>${studentObj.facultyNumber}</td>
            <td>${studentObj.grade}</td>`;

    return trEle;
}

function attachSubmitEventListener() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', onSubmit);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.status != 200) {
            throw new Error(res.statusText);
        }

        loadStudents();
    } catch (err) {
        console.error(err);
    }
}