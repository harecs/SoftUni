import { html } from "../node_modules/lit-html/lit-html.js"

export const listItemTemplate = (town, isSearched) => {
    return html`<li class="${isSearched ? 'active' : ''}">${town}</li>`;
}