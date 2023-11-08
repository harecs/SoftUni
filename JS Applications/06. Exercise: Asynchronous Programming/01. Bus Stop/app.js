getInfo();

function getInfo() {
    const url = 'http://localhost:3030';
    const stopIdInputEle = document.querySelector('#stopId');
    const checkButtonEle = document.querySelector('#submit');
    const stopNameEle = document.querySelector('#stopName');
    const busesListEle = document.querySelector('#buses');

    checkButtonEle.addEventListener('click', onCheck);

    function onCheck(e) {
        fetch(url + `/jsonstore/bus/businfo/${stopIdInputEle.value}`, { method: 'GET' })
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                }

                throw new Error(res.statusText);
            })
            .then(data => {
                clearBUsesList();
                stopNameEle.textContent = data.name;

                Object.entries(data.buses).forEach(busEntry => {
                    const [busId, time] = busEntry;
                    const liEle = document.createElement('li');
                    liEle.textContent = `Bus ${busId} arrives in ${time} minutes`;

                    busesListEle.appendChild(liEle);
                });
            })
            .catch(err => {
                clearBUsesList();
                stopNameEle.textContent = 'Error'
            });
    }

    function clearBUsesList() {
        Array.from(busesListEle.children).forEach(child => child.remove());
    }
}