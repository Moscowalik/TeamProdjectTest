import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from "./elems.js";
import { moviesApiService } from "./index.js";
import MoviesApiService from "./moviesApiService.js";
import { errorCatch } from "./errorCatch.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

async function onBtnLoadNextClick(evt) {
    moviesApiService.nextPage();
    // console.log(moviesApiService.page);
    moviesApiService.fetchMovies();
    elems.currentPageEl.textContent = moviesApiService.page;
}

export { onBtnLoadNextClick };