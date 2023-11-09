function solve() {
    let nextStopId = 'depot';
    let currentStopName = '';
    const departButtonEle = document.querySelector('#depart');
    const arriveButtonEle = document.querySelector('#arrive');
    const infoEle = document.querySelector('.info');

    const disableDepartButton = () => departButtonEle.disabled = true;
    const disableArriveButton = () => arriveButtonEle.disabled = true;
    const enableDepartButton = () => departButtonEle.disabled = false;
    const enableArriveButton = () => arriveButtonEle.disabled = false;

    function depart() {
        const url = 'http://localhost:3030';
        fetch(url + `/jsonstore/bus/schedule/${nextStopId}`, { method: 'GET' })
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                }

                throw new Error(res.statusText);
            })
            .then(data => {
                currentStopName = data.name;
                nextStopId = data.next;

                infoEle.textContent = `Next stop ${currentStopName}`;
                disableDepartButton();
                enableArriveButton();
            })
            .catch(err => {
                disableDepartButton();
                disableArriveButton();
                infoEle.textContent = 'Error'
            })
    }

    function arrive() {
        infoEle.textContent = `Arriving at ${currentStopName}`;
        disableArriveButton();
        enableDepartButton();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();