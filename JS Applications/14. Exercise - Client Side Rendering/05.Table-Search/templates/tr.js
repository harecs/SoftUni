import { html } from "../node_modules/lit-html/lit-html.js";
import { repeat } from "../node_modules/lit-html/directives/repeat.js";
import { tdTemplate } from "./td.js";

export const trTemplate = (array, isSearched = false) => {
    return html`
    <tr class="${isSearched ? 'select' : ''}">
        ${repeat(array, item => tdTemplate(item))}
    </tr>`;
}