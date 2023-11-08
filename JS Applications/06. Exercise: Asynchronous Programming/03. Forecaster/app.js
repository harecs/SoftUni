function attachEvents() {
    const url = 'http://localhost:3030';
    const inputEle = document.querySelector('#location');
    const forecastElement = document.querySelector('#forecast');

    const symbols = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
        degrees: String.fromCharCode(176)
    }

    const getWeatherButtonEle = document.querySelector('#submit');
    getWeatherButtonEle.addEventListener('click', onGetWeather);

    function onGetWeather(e) {
        const searchedLocation = inputEle.value;

        fetch(url + `/jsonstore/forecaster/locations`, { method: 'GET' })
            .then(res => responseHandler(res))
            .then(data => {
                const locationObj = data.find(obj => obj.name == searchedLocation);

                if (locationObj) {
                    return locationObj;
                }

                throw new Error(`The city is not present`);
            })
            .then(locationObj => {
                const todaysWeatherPromise =
                    fetch(url + `/jsonstore/forecaster/today/${locationObj.code}`)
                        .then(res => responseHandler(res))
                        .then(data => createTodaysWeatherEle(data));

                const threeDayWeatherPromise =
                    fetch(url + `/jsonstore/forecaster/upcoming/${locationObj.code}`)
                        .then(res => responseHandler(res))
                        .then(data => createThreeDayWeatherEle(data));

                Promise.all([todaysWeatherPromise, threeDayWeatherPromise])
                    .then(elements => {
                        forecastElement.textContent = '';

                        Array.from(forecastElement.children).forEach(child => child.remove());
                        elements.forEach(ele => forecastElement.appendChild(ele));

                        forecastElement.style.display = 'block';
                    });
            })
            .catch(err => {
                forecastElement.textContent = 'Error';
                forecastElement.style.display = 'block';
            });
    }

    function responseHandler(res) {
        if (res.status == 200) {
            return res.json();
        }

        throw new Error(res.statusText);
    }

    function createTodaysWeatherEle(obj) {
        const ele = document.createElement('div');
        ele.id = 'current';

        const condition = obj.forecast.condition;
        const info = `${obj.forecast.low}${symbols.degrees}/${obj.forecast.high}${symbols.degrees}`;

        ele.innerHTML = `
            <div class="label">Current conditions</div>
            <div class="forecasts">
                <span class="condition symbol">${symbols[condition]}</span>
                <span class="condition">
                    <span class="forecast-data">${obj.name}</span>
                    <span class="forecast-data">${info}</span>
                    <span class="forecast-data">${condition}</span>
                </span>
            </div>`;

        return ele;
    }

    function createThreeDayWeatherEle(obj) {
        const ele = document.createElement('div');
        ele.id = 'upcoming';

        ele.innerHTML = `
            <div class="label">Three-day forecast</div>
            <div class="forecast-info">
                <span class="upcoming">
                    <span class="symbol">${symbols[obj.forecast[0].condition]}</span>
                    <span class="forecast-data">${`${obj.forecast[0].low}${symbols.degrees}/${obj.forecast[0].high}${symbols.degrees}`}</span>
                    <span class="forecast-data">${obj.forecast[0].condition}</span>
                </span>
                <span class="upcoming">
                    <span class="symbol">${symbols[obj.forecast[1].condition]}</span>
                    <span class="forecast-data">${`${obj.forecast[1].low}${symbols.degrees}/${obj.forecast[1].high}${symbols.degrees}`}</span>
                    <span class="forecast-data">${obj.forecast[1].condition}</span>
                </span>
                <span class="upcoming">
                    <span class="symbol">${symbols[obj.forecast[2].condition]}</span>
                    <span class="forecast-data">${`${obj.forecast[2].low}${symbols.degrees}/${obj.forecast[2].high}${symbols.degrees}`}</span>
                    <span class="forecast-data">${obj.forecast[2].condition}</span>
                </span>
            </div>`;

        return ele;
    }
}

attachEvents();