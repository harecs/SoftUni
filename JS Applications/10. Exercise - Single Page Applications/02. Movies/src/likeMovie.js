import { onMovieDetails } from "./movieDetails.js";
import { responseHandler } from "./responseHandler.js";

const url = 'http://localhost:3030/data/likes';

export function onLike(movieId) {
    fetch(`${url}?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${localStorage.getItem('userId')}%22`)
        .then(res => responseHandler(res)) // may have problem with res.json()
        .then(data => {
            // maybe not the correct validation
            if (data == 0) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'X-Authorization': localStorage.getItem('token')
                    },
                    body: JSON.stringify({movieId})
                })
                    .then(res => responseHandler(res))
                    .then(() => onMovieDetails(undefined, movieId));
            } else {
                fetch(`${url}/${data[0]._id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-Authorization': localStorage.getItem('token')
                    }
                })
                    .then(res => responseHandler(res))
                    .then(() => onMovieDetails(undefined, movieId));
            }
        })
        .catch(err => console.error(err));
}