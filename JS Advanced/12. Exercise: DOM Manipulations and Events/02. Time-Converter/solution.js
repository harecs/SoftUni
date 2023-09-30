function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type=button]');
    const inputElements = document.querySelectorAll('input[type=text]');

    for (const button of buttonElements) {
        button.addEventListener('click', onConvert);
    }

    function onConvert(e) {
        const inputElement = e.target.previousElementSibling;
        const time = Number(inputElement.value);

        switch (inputElement.id) {
            case 'days': setTime(time); break;
            case 'hours': setTime(time / 24); break;
            case 'minutes': setTime(time / 24 / 60); break;
            case 'seconds': setTime(time / 24 / 60 / 60); break;
        }

        function setTime(days) {
            const timeCount = {
                days,
                hours: days * 24,
                minutes: days * 24 * 60,
                seconds: days * 24 * 60 * 60
            }


            Object.values(timeCount).forEach((timeCount, i) => {
                inputElements[i].value = timeCount;
            });
        }
    }
}