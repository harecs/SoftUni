window.addEventListener('load', solution);

function solution() {
    const inputFieldsElements = document.querySelectorAll('input');
    const selectFieldsElements = document.querySelectorAll('select');
    const addButtonEle = document.querySelector('#add-btn');
    const previewListEle = document.querySelector('.preview-list');
    const pendingListEle = document.querySelector('.pending-list');
    const resolvedListEle = document.querySelector('.resolved-list');

    const employeeInputEle = inputFieldsElements[0];
    const categorySelectEle = selectFieldsElements[0];
    const urgencySelectEle = selectFieldsElements[1];
    const teamSelectEle = selectFieldsElements[2];
    const descriptionInputEle = inputFieldsElements[1];

    addButtonEle.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();
        const employee = employeeInputEle.value;
        const category = categorySelectEle.value;
        const urgency = urgencySelectEle.value;
        const team = teamSelectEle.value;
        const description = descriptionInputEle.value;

        const isValidInput = employee && category && urgency && team && description;

        if (!isValidInput) {
            return;
        }

        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'problem-content';

        const pEmpl = document.createElement('p');
        pEmpl.textContent = 'From: ' + employee;
        article.appendChild(pEmpl);


        const pCat = document.createElement('p');
        pCat.textContent = 'Category: ' + category;
        article.appendChild(pCat);

        const pUrgency = document.createElement('p');
        pUrgency.textContent = 'Urgency: ' + urgency;
        article.appendChild(pUrgency);

        const pTeam = document.createElement('p');
        pTeam.textContent = 'Assigned to: ' + team;
        article.appendChild(pTeam);

        const pDesc = document.createElement('p');
        pDesc.textContent = 'Description: ' + description;
        article.appendChild(pDesc);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', onEdit);

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', onContinue);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        document.getElementsByClassName('preview-list')[0].appendChild(li);

        addButtonEle.disabled = true;
        clearInputFields();
        previewListEle.appendChild(li);
    }

    function onEdit(e) {
        const liEle = e.target.parentElement;
        const pEles = liEle.querySelectorAll('p');
        const employee = pEles[0].textContent.substring(6);
        const category = pEles[1].textContent.substring(10);
        const urgency = pEles[2].textContent.substring(9);
        const team = pEles[3].textContent.substring(13);
        const description = pEles[4].textContent.substring(13);

        employeeInputEle.value = employee;
        categorySelectEle.value = category;
        urgencySelectEle.value = urgency;
        teamSelectEle.value = team;
        descriptionInputEle.value = description;

        liEle.remove();
        addButtonEle.disabled = false;
    }

    function onContinue(e) {
        const liEle = e.target.parentElement;
        
        liEle.querySelector('.edit-btn').remove();
        liEle.querySelector('.continue-btn').remove();

        const resolveButtonEle = document.createElement('button');
        resolveButtonEle.className = 'resolve-btn';
        resolveButtonEle.textContent = 'Resolved';
        resolveButtonEle.addEventListener('click', onResolve);

        liEle.appendChild(resolveButtonEle);
        pendingListEle.appendChild(liEle);
    }

    function onResolve(e) {
        const liEle = e.target.parentElement;

        liEle.querySelector('button').remove();
        const clearButtonEle = document.createElement('button');
        clearButtonEle.className = 'clear-btn';
        clearButtonEle.textContent = 'Clear';
        clearButtonEle.addEventListener('click', onClear);

        liEle.appendChild(clearButtonEle);
        resolvedListEle.appendChild(liEle);
    }

    function onClear(e) {
        e.target.parentElement.remove();
        addButtonEle.disabled = false;
    }

    function clearInputFields() {
        employeeInputEle.value = '';
        categorySelectEle.value = '';
        urgencySelectEle.value = '';
        teamSelectEle.value = '';
        descriptionInputEle.value = '';
    }
}