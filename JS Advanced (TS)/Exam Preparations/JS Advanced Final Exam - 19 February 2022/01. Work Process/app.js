function attachNeededEvents() {
    // Add the biggest needed things.
    const inputFieldElements = document.querySelectorAll('input');
    const hireWorkerButtonEle = document.querySelector('#add-worker');
    const tableBodyEle = document.querySelector('#tbody');
    const salarySumEle = document.querySelector('#sum');
    // the needed input fields
    const firstNameEle = inputFieldElements[0];
    const lastNameEle = inputFieldElements[1];
    const emailEle = inputFieldElements[2];
    const birthDateEle = inputFieldElements[3];
    const positionEle = inputFieldElements[4];
    const salaryEle = inputFieldElements[5];
    //Attaching events
    hireWorkerButtonEle.addEventListener('click', onHireWorker);

    function onHireWorker(e) {
        // preventing the refresh
        e.preventDefault();
        // geth the values of the inputs
        const firstName = firstNameEle.value;
        const lastName = lastNameEle.value;
        const email = emailEle.value;
        const birthDate = birthDateEle.value;
        const position = positionEle.value;
        const salary = salaryEle.value;
        // validation
        const isValidFirstName = firstName != '';
        const isValidLastName = lastName != '';
        const isValidEmail = email != '';
        const isValidBirthDate = birthDate != '';
        const isValidPosition = position != '';
        const isValidSalary = salary != '';
        const isValidInput = isValidFirstName && isValidLastName && isValidEmail && isValidBirthDate && isValidPosition && isValidSalary;
        // chaeck
        if (!isValidInput) {
            return;
        }

        const trEle = document.createElement('tr');
        trEle.innerHTML =
            `<td>${firstName}</td>
<td>${lastName}</td>
<td>${email}</td>
<td>${birthDate}</td>
<td>${position}</td>
<td>${salary}</td>
<td>
    <button class="fired">Fired</button>
    <button class="edit">Edit</button>
</td>`;

        //attach event s to the inner buttons for actions
        const firedButtonEle = trEle.querySelector('.fired');
        const editButtonEle = trEle.querySelector('.edit');

        firedButtonEle.addEventListener('click', onFired);
        editButtonEle.addEventListener('click', onEdit);

        // append the tr to the tbody
        tableBodyEle.appendChild(trEle);
        // add the salary to d span
        const sum = Number(salarySumEle.textContent) + Number(salary);
        salarySumEle.textContent = sum.toFixed(2);

        clearInputFields();
    }

    function clearInputFields() {
        for (const inputFieldEle of inputFieldElements) {
            inputFieldEle.value = '';
        }
    }

    function onFired(e) {
        // maybe bug because previousElementSibling!!!
        const sum = Number(salarySumEle.textContent) - Number(e.target.parentElement.previousElementSibling.textContent);
        salarySumEle.textContent = sum.toFixed(2);
        e.target.parentElement.parentElement.remove();
    }

    function onEdit(e) {
        const trEle = e.target.parentElement.parentElement;
        const tdEles = trEle.querySelectorAll('td');
        const firstName = tdEles[0].textContent;
        const lastName = tdEles[1].textContent;
        const email = tdEles[2].textContent;
        const birthDate = tdEles[3].textContent;
        const position = tdEles[4].textContent;
        const salary = Number(tdEles[5].textContent);

        firstNameEle.value = firstName;
        lastNameEle.value = lastName;
        emailEle.value = email;
        birthDateEle.value = birthDate;
        positionEle.value = position;
        salaryEle.value = salary;

        onFired(e);
    }
}

attachNeededEvents()