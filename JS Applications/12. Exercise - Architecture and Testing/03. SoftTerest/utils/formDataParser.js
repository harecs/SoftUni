export function parseFormDataEvent(event) {
    const formData = new FormData(event.currentTarget);
    return Object.fromEntries(formData.entries());
}