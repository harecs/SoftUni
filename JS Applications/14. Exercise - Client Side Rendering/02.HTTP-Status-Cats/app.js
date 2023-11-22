import { render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { listTemplate } from "./templates/unorderedList.js";

const sectionElement = document.querySelector('section');

render(listTemplate(cats), sectionElement);