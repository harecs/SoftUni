window.addEventListener('load', solve);

function solve() {
    const inputFields = document.querySelectorAll('form input');
    const firstNameInputEle = inputFields[0];
    const lastNameInputEle = inputFields[1];
    const numberOfPeopleInputEle = inputFields[2];
    const fromDateInputEle = inputFields[3];
    const daysInputEle = inputFields[4];

    const nextStepButtonEle = document.querySelector('#next-btn');
    const ticketInfoListEle = document.querySelector(".ticket-info-list");

    nextStepButtonEle.addEventListener('click', onNextStep);

    function onNextStep(e) {
        e.preventDefault();
        const firstName = firstNameInputEle.value;
        const lastName = lastNameInputEle.value;
        const numberOfPeople = numberOfPeopleInputEle.value;
        const fromDate = fromDateInputEle.value;
        const days = daysInputEle.value;
        const areNonEmptyFields = firstName != '' && lastName != '' && numberOfPeople != '' && fromDate != '' && days != '';

        if (areNonEmptyFields) {
            disableNextStepButton();
            makeFieldsEmpty();


            ticketInfoListEle.innerHTML = `<li class="ticket">
    <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${days} days</p>
        <p>For ${numberOfPeople} people</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>
</li>`;

            const ticketButtons = ticketInfoListEle.querySelectorAll('button');
            ticketButtons[0].addEventListener('click', onEdit);
            ticketButtons[1].addEventListener('click', onContinue);
        }


        function makeFieldsEmpty() {
            firstNameInputEle.value = '';
            lastNameInputEle.value = '';
            numberOfPeopleInputEle.value = '';
            fromDateInputEle.value = '';
            daysInputEle.value = '';
        }

        function onEdit(e) {
            firstNameInputEle.value = firstName;
            lastNameInputEle.value = lastName;
            numberOfPeopleInputEle.value = numberOfPeople;
            fromDateInputEle.value = fromDate;
            daysInputEle.value = days;

            e.target.parentElement.remove();

            enableNextStepButton();
        }

        function onContinue(e) {
            e.target.parentElement.remove();
            const confirmTicketInfoEle = document.querySelector(".confirm-ticket");

            confirmTicketInfoEle.innerHTML = `<li class="ticket">
    <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${days} days</p>
        <p>For ${numberOfPeople} people</p>
    </article>
    <button class="confirm-btn">Confirm</button>
    <button class="cancel-btn">Cancel</button>
</li>`;
            const buttons = confirmTicketInfoEle.querySelectorAll('button');
            buttons[0].addEventListener('click', onConfirm);
            buttons[1].addEventListener('click', onCancel);

            function onConfirm(e) {
                const bodyEle = document.querySelector('#body');

                const headingEle = document.createElement('h1');
                headingEle.id = 'thank-you';
                headingEle.textContent = 'Thank you, have a nice day!'
                const backButtonEle = document.createElement('button');
                backButtonEle.id = 'back-btn';
                backButtonEle.textContent = 'Back';

                backButtonEle.addEventListener('click', onBack);

                document.querySelector('#main').remove();

                bodyEle.appendChild(headingEle);
                bodyEle.appendChild(backButtonEle);

                function onBack(e) {
                    location = document.location;
                }
            }

            function onCancel(e) {
                e.target.parentElement.remove();
                enableNextStepButton();
            }
        }

        function disableNextStepButton() {
            nextStepButtonEle.disabled = true;
        }

        function enableNextStepButton() {
            nextStepButtonEle.disabled = false;
        }
    }
}