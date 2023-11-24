import { render, html } from "../node_modules/lit-html/lit-html.js";
import { createFormTemplate } from "../templates/createForm.js";

const formContainer = document.querySelector('#form-container');

export function loadCreateView() {
    render(createFormTemplate(), formContainer);
}