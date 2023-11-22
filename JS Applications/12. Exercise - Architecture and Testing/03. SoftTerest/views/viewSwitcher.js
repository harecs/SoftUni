import { createHomeView } from "./homeView.js";
import { createRegisterView } from "./registerView.js";
import { createLoginView } from "./loginView.js";
import { createDashboardView } from "./dashboardView.js";
import { createDetailsView } from "./detailsView.js";
import { createCreateView } from "./createView.js";

const bodyElement = document.querySelector('body');

export const views = {
    home: createHomeView,
    register: createRegisterView,
    login: createLoginView,
    dashboard: createDashboardView,
    details: createDetailsView,
    create: createCreateView
}

export async function switchView(viewName, event = undefined) {
    Array.from(document.querySelectorAll('body > div')).forEach(ele => ele.remove());
    bodyElement.appendChild(await views[viewName](event));
}