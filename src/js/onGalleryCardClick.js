import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from "./elems.js";
import { moviesApiService } from "./index.js";
import MoviesApiService from "./moviesApiService.js";
import { errorCatch } from "./errorCatch.js";
import { toggleModal } from "./modal.js"
import { idMovieLoad } from "./idMovieLoad";
import { movieCardCreate, movieCardClean } from "./movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

async function onGalleryCardClick(evt) {
    if (!evt.target.classList.contains('photo-card')) {
        return;
    }

    moviesApiService.movie_id = evt.target.dataset.id;
    await idMovieLoad();

    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
            return;
        };
    const newDataId = moviesApiService.dataStorageObj;
    const data = JSON.parse(savedData);
    if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
        elems.addToWatchedBtn.textContent = "WATCHED";
        elems.addToWatchedBtn.style.backgroundColor = "#c72121";
        elems.addToWatchedBtn.disabled = true;
        // return elems.addToWatchedBtn;
    } else {
        elems.addToWatchedBtn.disabled = false;
        elems.addToWatchedBtn.style.backgroundColor = "#4f4fbd";
        elems.addToWatchedBtn.textContent = "ADD TO WATCHED";
        // return elems.addToWatchedBtn;
    };

    if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
        elems.addToHellBtn.textContent = "IN HELL";
        elems.addToHellBtn.style.backgroundColor = "#c72121";
        elems.addToHellBtn.disabled = true;
        // return elems.addToHellBtn;
    } else {
        elems.addToHellBtn.textContent = "ADD TO HELL";
        elems.addToHellBtn.style.backgroundColor = "#4f4fbd";
        elems.addToHellBtn.disabled = false;
        // return elems.addToHellBtn;
    };

    // console.log("ID=", moviesApiService.movie_id);
}

export { onGalleryCardClick };