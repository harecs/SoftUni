function filterEmployees(inputJSON, criteria) {
    const employeesArray = JSON.parse(inputJSON);
    const [criteriaKey, criteriaValue] = criteria.split('-');

    const filteredArray = employeesArray.filter(obj => obj[criteriaKey] == criteriaValue);

    filteredArray.forEach((obj, i) => {
        console.log(`${i}. ${obj['first_name']} ${obj['last_name']} - ${obj['email']}`);
    });
}