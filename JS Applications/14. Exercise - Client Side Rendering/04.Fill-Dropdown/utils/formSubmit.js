import { addOption } from "../services/api.js";

export function onFormSubmit(e) {
    e.preventDefault();
    
    const inputField = e.target.previousElementSibling;
    const text = inputField.value;
    inputField.value = '';

    addOption({ text });
}