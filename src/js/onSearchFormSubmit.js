import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from "./elems.js";
import { moviesApiService } from "./index.js";
import MoviesApiService from "./moviesApiService.js";
import { errorCatch } from "./errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "./galleryCreate.js";
import { searchMoviesLoad } from "./searchMoviesLoad.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

async function onSearchFormSubmit(evt) {
    evt.preventDefault();
    const name = elems.inputEl.value.trim(); // текущее значение inputEl (текст введенный в inputEl), с игнорированием пробелов (trim())
    if (name === "") {
        return Notiflix.Report.warning('WORNING!', 'Please enter request.', 'Ok');
    };
    evt.target.reset();
    moviesApiService.resetPage();
    elems.currentPageEl.textContent = moviesApiService.page;
    moviesApiService.searchQuery = name;
    try {
        await searchMoviesLoad();
        
    } catch (error) {
        errorCatch(error);
    };
};

export { onSearchFormSubmit };