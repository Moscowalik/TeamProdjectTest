import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from "./elems.js";
import { moviesApiService } from "./index.js";
import { btnLoadNextAdd, btnLoadNextRemove, btnLoadPrevAdd, btnLoadPrevRemove } from "./btnLoadMore.js";
import MoviesApiService from "./moviesApiService.js";
import { errorCatch } from "./errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "./galleryCreate.js";
import { popularMoviesLoad } from "./popularMoviesLoad.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

function onHomeBtnClick(evt) {
    moviesApiService.resetPage();
    elems.currentPageEl.textContent = moviesApiService.page;
    popularMoviesLoad();
}

export { onHomeBtnClick };