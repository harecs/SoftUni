import { getOptions } from "./services/api.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import { repeat } from "./node_modules/lit-html/directives/repeat.js";
import { optionTemplate } from "./templates/option.js";
import { onFormSubmit } from "./utils/formSubmit.js";

const menu = document.querySelector('#menu');
const button = document.querySelector('form');

renderMenu();

button.addEventListener('click', e => {
    onFormSubmit(e);
    renderMenu()
});

function renderMenu() {
    getOptions().then(data => {
        render(repeat(Object.values(data), item => item._id, item => optionTemplate(item)), menu);
    });
}