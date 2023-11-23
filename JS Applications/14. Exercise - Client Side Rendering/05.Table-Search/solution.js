import { render } from "./node_modules/lit-html/lit-html.js";
import { repeat } from "./node_modules/lit-html/directives/repeat.js";
import { trTemplate } from "./templates/tr.js";
import { getData } from "./data/data.js";

const tbody = document.querySelector('tbody');
const inputField = document.querySelector('input');
const button = document.querySelector('#searchBtn');


let data = Object.values(await getData());

data.forEach((obj) => {
    obj.info = [];
    obj.info.push(`${obj.firstName} ${obj.lastName}`);
    obj.info.push(obj.email);
    obj.info.push(obj.course);
});

data = Object.values(data);

render(repeat(data, item => item._id, item => trTemplate(item.info)), tbody);

button.addEventListener('click', () => {
    const searchedText = inputField.value.toLowerCase();

    render(repeat(data, item => item._id, item => {
        if (item.info.map(x => x.toLowerCase()).join('  ').indexOf(searchedText) != -1) {
            return trTemplate(item.info, true);
        }

        return trTemplate(item.info);
    }), tbody);

    inputField.value = '';
});