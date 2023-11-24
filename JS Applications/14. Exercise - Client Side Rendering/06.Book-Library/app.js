import { loadCreateView } from "./views/createView.js";
import { loadTable } from "./views/tableView.js";

loadCreateView();

const loadAllBooksButton = document.querySelector('#loadBooks');
loadAllBooksButton.addEventListener('click', loadTable);