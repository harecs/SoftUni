import { onDelete } from "../eventHandlers/onDelete.js";
import { onRowEdit } from "../eventHandlers/onRowEdit.js";
import { html } from "../node_modules/lit-html/lit-html.js";

export const tableRowTemplate = (bookEntry) => {
    return html`
    <tr>
        <td>${bookEntry[1].title}</td>
        <td>${bookEntry[1].author}</td>
        <td id="${bookEntry[0]}">
            <button @click="${onRowEdit}">Edit</button>
            <button @click="${onDelete}">Delete</button>
        </td>
    </tr>`;
}