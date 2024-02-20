function generateReport() {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const reportArray = [];

    for (const row of rows) {
        const obj = {};

        Array.from(row.children).forEach((td, i) => {
            const checkbox = document.querySelector(`th:nth-of-type(${i + 1}) input`);
            
            if (checkbox.checked) {
                obj[checkbox.getAttribute('name')] = td.textContent;
            }
        });

        reportArray.push(obj);
    }

    document.querySelector('#output').value = JSON.stringify(reportArray);
}