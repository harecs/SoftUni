function solve() {
    const formElement = document.querySelector('form');
    const taskNameElement = formElement.querySelector('#task');
    const descriptionElement = formElement.querySelector('#description');
    const dateElement = formElement.querySelector('#date');

    const divForTasksElements = document.querySelectorAll('section div:nth-child(2)');
    const openTasksElement = divForTasksElements[1];
    const inProgressTasksElement = divForTasksElements[2];
    const completeTasksElement = divForTasksElements[3];

    formElement.addEventListener('submit', onAdd);

    function onAdd(e) {
        e.preventDefault();

        if (taskNameElement.value && descriptionElement.value && dateElement.value) {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `<h3>${taskNameElement.value}</h3>
<p>Description: ${descriptionElement.value}</p>
<p>Due Date: ${dateElement.value}</p>
<div class="flex">
    <button class="green">Start</button>
    <button class="red">Delete</button>
</div>`;

            taskNameElement.value = '';
            descriptionElement.value = '';
            dateElement.value = '';

            addButtonEvents(articleElement, onStart, onDelete);

            openTasksElement.appendChild(articleElement);
        }
    }

    function onStart(e) {
        const buttonElement = e.target;
        const articleElement = buttonElement.parentElement.parentElement;

        buttonElement.remove();
        articleElement.querySelector('div').innerHTML += `<button class="orange">Finish</button>`;

        addButtonEvents(articleElement, onDelete, onFinish);

        inProgressTasksElement.appendChild(articleElement);
    }

    function onDelete(e) {
        e.target.parentElement.parentElement.remove();
    }

    function onFinish(e) {
        const buttonElement = e.target;
        const articleElement = buttonElement.parentElement.parentElement;

        buttonElement.parentElement.remove();

        completeTasksElement.appendChild(articleElement);
    }

    function addButtonEvents(articleEle, firstFunc, secondFunc) {
        const buttonElements = articleEle.querySelectorAll('button');
        buttonElements[0].addEventListener('click', firstFunc);
        buttonElements[1].addEventListener('click', secondFunc);
    }
}