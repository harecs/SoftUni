import { html } from "../node_modules/lit-html/lit-html.js";
import { listItemTemplate } from "./listItem.js";

export const listTemplate = (cats) => {
    return html`
    <ul>
        ${cats.map(cat => listItemTemplate(cat))}
    </ul>`;
}