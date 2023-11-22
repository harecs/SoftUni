import { parseFormDataEvent } from "../utils/formDataParser.js";
import * as api from "../services/api.js";
import { switchView } from "./viewSwitcher.js";

export function createCreateView() {
    const createView = document.createElement('div');
    createView.classList.add('container');
    createView.classList.add('home');
    createView.classList.add('wrapper');
    createView.classList.add('my-md-5');
    createView.classList.add('pl-md-5');
    createView.innerHTML =
        `<div class=" d-md-flex flex-mb-equal ">
            <div class="col-md-6">
                <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="">
            </div>
            <form class="form-idea col-md-5" action="#/create" method="post">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                </div>
                <div class="form-label-group">
                    <label for="ideaTitle">Title</label>
                    <input type="text" id="ideaTitle" name="title" class="form-control" placeholder="What is your idea?"
                        required="" autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="ideaDescription">Description</label>
                    <textarea type="text" name="description" class="form-control" placeholder="Description"
                        required=""></textarea>
                </div>
                <div class="form-label-group">
                    <label for="inputURL">Add Image</label>
                    <input type="text" id="inputURL" name="imageURL" class="form-control" placeholder="Image URL"
                        required="">

                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
            </form>
        </div>`;

    const formElement = createView.querySelector('form');

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        const parsedData = parseFormDataEvent(e);
        const ideaData = {
            title: parsedData.title,
            description: parsedData.description,
            img: parsedData.imageURL
        }

        api.createIdea(ideaData)
            .then(data => {
                console.log(data);
                switchView('dashboard');
            })
            .catch(err => console.error(err));
    });

    return createView;
}