function solve() {
    const textAreaElement = document.querySelector('textarea');
    const addButtonElements = Array.from(document.querySelectorAll('.add-product'));

    const productsArray = [];
    let totalPrice = 0;

    addButtonElements.forEach(btn => btn.addEventListener('click', onAdd));
    document.querySelector('.checkout').addEventListener('click', onCheckout);

    function onAdd(e) {
        const productElements = e.target.parentElement.parentElement.children;
        const productName = productElements[1].firstElementChild.textContent;
        const productPrice = Number(productElements[3].textContent);

        totalPrice += productPrice;

        if (!productsArray.includes(productName)) {
            productsArray.push(productName);
        }

        textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    function onCheckout(e) {
        addButtonElements.forEach(btn => btn.disabled = true);
        e.target.disabled = true;

        textAreaElement.textContent += `You bought ${productsArray.join(', ')} for ${totalPrice.toFixed(2)}.`;
    }
}