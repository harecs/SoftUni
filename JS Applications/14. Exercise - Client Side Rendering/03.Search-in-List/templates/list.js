import { html } from "../node_modules/lit-html/lit-html.js";
import { repeat } from "../node_modules/lit-html/directives/repeat.js";
import { listItemTemplate } from "./listItem.js";

export const listTemplate = (townsObj) => {
    return html`
    <ul>
        ${repeat(Object.keys(townsObj), i => i.id, i => listItemTemplate(i, townsObj[i]))}
    </ul>`;
}