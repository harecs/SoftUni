import { parseFormDataEvent } from "../utils/formDataParser.js";
import { loadHomeView } from "./homeView.js";
import * as api from "../services/api.js";
import { switchView } from "./viewSwitcher.js";

export function createRegisterView() {
    const registerView = document.createElement('div');
    registerView.classList.add('container');
    registerView.classList.add('home');
    registerView.classList.add('wrapper');
    registerView.classList.add('my-md-5');
    registerView.classList.add('pl-md-5');
    registerView.innerHTML =
        `<div class="row-form d-md-flex flex-mb-equal ">
            <div class="col-md-4">
                <img class="responsive" src="./images/idea.png" alt="">
            </div>
            <form class="form-user col-md-7" action="" method="">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                </div>
                <div class="form-label-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" class="form-control" placeholder="Email" required=""
                        autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="form-control"
                        placeholder="Password" required="">
                </div>
                <div class="form-label-group">
                    <label for="inputRepeatPassword">Repeat Password</label>
                    <input type="password" id="inputRepeatPassword" name="repeatPassword" class="form-control"
                        placeholder="Repeat Password" required="">
                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
                <div class="text-center mb-4">
                    <p class="alreadyUser"> Don't have account? Then just
                        <a href="">Sign-In</a>!
                    </p>
                </div>
                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
            </form>
        </div>`;

    const formElement = registerView.querySelector('form');

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const registerData = parseFormDataEvent(e);

        if (registerData.email.length < 3) {
            console.error('email at least 3 chars');
            return;
        }

        if (registerData.password.length < 3) {
            console.error('password at least 3 chars');
            return;
        }

        if (registerData.password !== registerData.repeatPassword) {
            console.error('passwords should match');
            return;
        }

        api.register({
            email: registerData.email,
            password: registerData.password
        })
            .then(data => {
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('userId', data._id);
                loadHomeView();
            })
            .catch(err => console.error(err));
    });

    formElement.querySelector('.alreadyUser a').addEventListener('click', function (e) {
        e.preventDefault();
        switchView('login');
    });

    return registerView;
}