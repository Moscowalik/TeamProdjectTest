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
import { storageGalleryCreate } from "./starageGalleryCreate.js"
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

function onHellBtnClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    } else if (JSON.parse(savedData).hell.length === 0) {
        Notiflix.Notify.success('Sorry, there are no added movies.');
        return;
    }; 

    const dataArray = JSON.parse(savedData).hell;
    // console.log(dataArray);

    galleryClean();
    storageGalleryCreate(dataArray);
    btnLoadNextRemove();
    btnLoadPrevRemove();
}

export { onHellBtnClick };