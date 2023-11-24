import { render } from "../node_modules/lit-html/lit-html.js";
import { repeat } from "../node_modules/lit-html/directives/repeat.js";
import * as api from "../services/api.js";
import { tableRowTemplate } from "../templates/tableRow.js";

const tbody = document.querySelector('tbody');

export function loadTable() {
    api.getAllBooks()
        .then(data => {
            render(repeat(Object.entries(data), i => i[0], i => tableRowTemplate(i)), tbody);
        });
}