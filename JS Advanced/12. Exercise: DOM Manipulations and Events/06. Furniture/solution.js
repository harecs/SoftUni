function solve() {
    const buttonElements = document.querySelectorAll('button');

    buttonElements[0].addEventListener('click', onGenerate);
    buttonElements[1].addEventListener('click', onBuy);

    function onGenerate(e) {
        const furnitureArray = JSON.parse(e.target.previousElementSibling.value);

        furnitureArray.forEach(product => {
            document.querySelector('tbody').appendChild(createFurnitureRow(product));
        })

        function createFurnitureRow(obj) {
            const rowElement = document.createElement('tr');

            const imageElement = document.createElement('img');
            imageElement.src = obj.img;
            rowElement.appendChild(createTableData(imageElement));

            const nameElement = document.createElement('p');
            nameElement.textContent = obj.name;
            rowElement.appendChild(createTableData(nameElement));

            const priceElement = document.createElement('p');
            priceElement.textContent = obj.price;
            rowElement.appendChild(createTableData(priceElement));

            const decFactorElement = document.createElement('p');
            decFactorElement.textContent = obj.decFactor;
            rowElement.appendChild(createTableData(decFactorElement));

            const markElement = document.createElement('input');
            markElement.type = 'checkbox';
            rowElement.appendChild(createTableData(markElement));

            return rowElement;

            function createTableData(element) {
                const td = document.createElement('td');
                td.appendChild(element);
                return td;
            }
        }
    }

    function onBuy(e) {
        const resultElement = document.querySelectorAll('textarea')[1];

        const boughtFurniture = [];
        let totalPrice = 0;
        let avgDecFactor = 0;

        const checkedInputs = document.querySelectorAll('input:checked');

        for (const element of checkedInputs) {
            const decFactorElement = element.parentElement.previousElementSibling;
            const priceElement = decFactorElement.previousElementSibling;
            const nameElement = priceElement.previousElementSibling;


            boughtFurniture.push(nameElement.textContent);
            totalPrice += Number(priceElement.textContent);
            avgDecFactor += Number(decFactorElement.textContent);
        }

        avgDecFactor /= boughtFurniture.length;

        resultElement.value = '';
        resultElement.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
        resultElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        resultElement.value += `Average decoration factor: ${avgDecFactor}`;
    }
}