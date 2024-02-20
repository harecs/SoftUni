function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const pBestRestaurant = document.querySelector('#bestRestaurant p');
        const pWorkers = document.querySelector('#workers p');

        const input = JSON.parse(document.querySelector('#inputs textarea').value);
        const restaurantsObj = {};

        for (const line of input) {
            const splitInput = line.match(/[\w]+/gm);
            const restaurantName = splitInput.shift();
            let restaurant = {};

            if (Object.keys(restaurantsObj).includes(restaurantName)) {
                restaurant = restaurantsObj[restaurantName];
                restaurant.averageSalary *= restaurant.workers.length;
            } else {
                restaurant = {
                    restaurant: restaurantName,
                    bestSalary: Number.MIN_SAFE_INTEGER,
                    averageSalary: 0,
                    workers: []
                }
            }

            for (let i = 0; i < splitInput.length; i += 2) {
                const name = splitInput[i];
                const salary = Number(splitInput[i + 1]);

                restaurant.bestSalary = salary > restaurant.bestSalary ? salary : restaurant.bestSalary;
                restaurant.averageSalary += salary;
                restaurant.workers.push({ name, salary });
            }

            restaurant.averageSalary /= restaurant.workers.length;

            restaurantsObj[restaurantName] = restaurant;
        }

        const bestRestaurantName = Object.keys(restaurantsObj)
            .sort((a, b) => restaurantsObj[b].bestSalary - restaurantsObj[a].bestSalary)[0];
        const sortedWorkers = restaurantsObj[bestRestaurantName].workers
            .sort((a, b) => b.salary - a.salary);
        const workersOutput = sortedWorkers
            .reduce((acc, worker) => {
                return acc += `Name: ${worker.name} With Salary: ${worker.salary} `;
            }, '')
            .trim();

        pBestRestaurant.textContent = `Name: ${bestRestaurantName} Average Salary: ${restaurantsObj[bestRestaurantName].averageSalary.toFixed(2)} Best Salary: ${restaurantsObj[bestRestaurantName].bestSalary.toFixed(2)}`;
        pWorkers.textContent = workersOutput;
    }
}