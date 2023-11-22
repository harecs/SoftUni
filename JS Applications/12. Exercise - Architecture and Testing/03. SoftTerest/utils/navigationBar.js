export const userNavElements = Array.from(document.querySelectorAll('li:nth-child(n+2):nth-child(-n+3)'));
export const guestNavElements = Array.from(document.querySelectorAll('li:nth-child(n+4):nth-child(-n+5)'));

export function loadNavigationBar() {
    if (localStorage.getItem('token')) {
        userNavElements.forEach(ele => ele.style.display = 'inline');
        guestNavElements.forEach(ele => ele.style.display = 'none');
    } else {
        guestNavElements.forEach(ele => ele.style.display = 'inline');
        userNavElements.forEach(ele => ele.style.display = 'none');
    }
}