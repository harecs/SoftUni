import { render } from "./node_modules/lit-html/lit-html.js";
import { listTemplate } from "./templates/listTemplate.js";

const rootElement = document.querySelector('#root');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    render(listTemplate(formData.get('towns').split(', ')), rootElement);
});