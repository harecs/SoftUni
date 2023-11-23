import { html } from "../node_modules/lit-html/lit-html.js";

export const optionTemplate = (info) => html`<option value="${info._id}">${info.text}</option>`;