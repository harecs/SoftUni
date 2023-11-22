import { parseFormDataEvent } from "../utils/formDataParser.js";
import { loadHomeView } from "./homeView.js";
import * as api from "../services/api.js";
import { switchView } from "./viewSwitcher.js";

export function createLoginView() {
    const loginView = document.createElement('div');
    loginView.classList.add('container');
    loginView.classList.add('home');
    loginView.classList.add('wrapper');
    loginView.classList.add('my-md-5');
    loginView.classList.add('pl-md-5');
    loginView.innerHTML =
        `<div class="row-form d-md-flex flex-mb-equal ">
            <div class="col-md-4">
                <img class="responsive" src="./images/idea.png" alt="">
            </div>
            <form class="form-user col-md-7" action="" method="">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                </div>
                <div class="form-label-group">
                    <label for="inputEmail">Email</label>
                    <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required=""
                        autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" name="password" class="form-control"
                        placeholder="Password" required="">
                </div>
                <div class="text-center mb-4 text-center">
                    <button class="btn btn-lg btn-dark btn-block" type="submit">Sign In</button>
                    <p class="alreadyUser"> Don't have account? Then just
                        <a href="">Sign-Up</a>!
                    </p>
                </div>
                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
            </form>
        </div>`;

    const formElement = loginView.querySelector('form');

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        const loginData = parseFormDataEvent(e);

        api.login(loginData)
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('userId', data._id);
                loadHomeView();
            })
            .catch(err => console.error(err));
    });

    formElement.querySelector('.alreadyUser a').addEventListener('click', function (e) {
        e.preventDefault();
        switchView('register');
    });

    return loginView;
}