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
import { movieCardCreate, movieCardClean } from "./movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

async function idMovieLoad() {
    toggleModal();
    movieCardClean();

    try {
        const dataObj = await moviesApiService.fetchMovieId();
        // console.log(dataObj);
        // console.log(moviesApiService.dataStorageObj)

        movieCardCreate(dataObj);

        
    } catch (error) {
        errorCatch(error);
    };
}

export { idMovieLoad };