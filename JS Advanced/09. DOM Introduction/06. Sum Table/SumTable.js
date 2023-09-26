function sumTable() {
    const costElements = Array.from(document.querySelectorAll('tbody td:nth-child(even)'));
    costElements.pop();
    
    let sum = 0;

    costElements.forEach(element => {
        sum += Number(element.textContent);
    });

    document.querySelector('#sum').textContent = sum;
}