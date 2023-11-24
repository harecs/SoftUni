import { deleteBook } from "../services/api.js";
import { loadTable } from "../views/tableView.js";

export function onDelete(e) {
    const bookId = e.target.parentElement.id;

    deleteBook(bookId)
        .then(() => loadTable());
}