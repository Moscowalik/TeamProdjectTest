import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from './elems.js';
import {
  btnLoadNextAdd,
  btnLoadNextRemove,
  btnLoadPrevAdd,
  btnLoadPrevRemove,
} from './btnLoadMore.js';
import MoviesApiService from './moviesApiService.js';
import { errorCatch } from './errorCatch.js';
import { galleryCollectionCreate, galleryClean } from './galleryCreate.js';
import { toggleModal } from './modal.js';
import { onSearchFormSubmit } from './onSearchFormSubmit.js';
import { onGalleryCardClick } from './onGalleryCardClick.js';
import { onBtnLoadNextClick } from './onBtnLoadNextClick.js';
import { onBtnLoadPrevClick } from './onBtnLoadPrevClick.js';
import { onAddToWatchClick } from './onAddToWatchedClick.js';
import { onAddToHellClick } from './onAddToHellClick.js';
import { onHomeBtnClick } from './onHomeBtnClick.js';
import { onWatchedBtnClick } from './onWatchedBtnClick.js';
import { onHellBtnClick } from './onHellBtnClick.js';
import { popularMoviesLoad } from './popularMoviesLoad.js';
import { searchMoviesLoad } from './searchMoviesLoad.js';
import { idMovieLoad } from './idMovieLoad';
import { storageGalleryCreate } from './starageGalleryCreate.js';
import { movieCardCreate, movieCardClean } from './movieCardCreate.js';
import { notiflixOptions, notiflixReportOptions } from './notiflixOptions.js';

const moviesApiService = new MoviesApiService();
popularMoviesLoad();

elems.formEl.addEventListener('submit', onSearchFormSubmit);
elems.btnLoadNextEl.addEventListener('click', onBtnLoadNextClick);
elems.btnLoadPrevEl.addEventListener('click', onBtnLoadPrevClick);
elems.divGalleryEl.addEventListener('click', onGalleryCardClick);
elems.closeModalBtn.addEventListener('click', toggleModal);
elems.addToWatchedBtn.addEventListener('click', onAddToWatchClick);
elems.addToHellBtn.addEventListener('click', onAddToHellClick);
elems.homeBtnEl.addEventListener('click', onHomeBtnClick);
elems.watchedBtnEl.addEventListener('click', onWatchedBtnClick);
elems.hellBtnEl.addEventListener('click', onHellBtnClick);

export { moviesApiService };
