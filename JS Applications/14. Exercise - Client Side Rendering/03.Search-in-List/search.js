import { render } from "./node_modules/lit-html/lit-html.js";
import { listTemplate } from "./templates/list.js";
import { towns } from "./towns.js";

const townsDiv = document.querySelector('#towns');
const button = document.querySelector('button');
const resultDiv = document.querySelector('#result');

const townsObj = {};
towns.forEach(town => townsObj[town] = false);

render(listTemplate(townsObj), townsDiv);
button.addEventListener('click', search);

function search(e) {
    let resultsFound = 0;
    const inputField = e.currentTarget.previousElementSibling;
    const searchedString = inputField.value;
    if (!searchedString) {
        resultDiv.textContent = ``;
        return;
    }

    towns.forEach(town => {
        if (town.includes(searchedString)) {
            townsObj[town] = true;
            resultsFound++;
        } else {
            townsObj[town] = false;
        }
    });

    render(listTemplate(townsObj), townsDiv);
    resultDiv.textContent = `${resultsFound} matches found`;
}