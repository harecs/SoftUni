attachFormEventListener();

function attachFormEventListener() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', onCreateRecipe);
}

async function onCreateRecipe(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let { name, img, ingredients, steps } = Object.fromEntries(formData.entries());
    ingredients = ingredients.split('\n');
    steps = steps.split('\n');

    const url = 'http://localhost:3030/data/recipes';

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ name, img, ingredients, steps })
        });
        
        if (res.status != 200) {
            throw new Error(res.statusText);
        }

        window.location.href = 'index.html';
    } catch (err) {
        console.error(err);
    }
}