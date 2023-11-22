import { html } from "../node_modules/lit-html/lit-html.js";
import { listItemTemplate } from "./listItemTemplate.js";

export const listTemplate = (towns) => {
    return html`
    <ul>
        ${towns.map(town => listItemTemplate(town))}
    </ul>`;
}