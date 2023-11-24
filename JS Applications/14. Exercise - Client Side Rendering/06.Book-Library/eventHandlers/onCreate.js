import { createBook } from "../services/api.js";
import { loadTable } from "../views/tableView.js";

export function onCreate(e) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    if (!data.author || !data.title) {
        return;
    }

    createBook(data)
        .then(() => loadTable());
}