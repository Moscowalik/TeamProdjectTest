import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from './elems.js';
import { moviesApiService } from './index.js';
import {
  btnLoadNextAdd,
  btnLoadNextRemove,
  btnLoadPrevAdd,
  btnLoadPrevRemove,
} from './btnLoadMore.js';
import MoviesApiService from './moviesApiService.js';
import { errorCatch } from './errorCatch.js';
import { galleryCollectionCreate, galleryClean } from './galleryCreate.js';
import { storageGalleryCreate } from './starageGalleryCreate.js';
import { notiflixOptions, notiflixReportOptions } from './notiflixOptions.js';
import { getOnDatabase } from './firebase.js';

async function onWatchedBtnClick(evt) {
  const savedData = await getOnDatabase();
  console.log(savedData);

  if (!savedData) {
    Notiflix.Notify.success('Sorry, there are no added movies.');
    return;
  } else if (JSON.parse(savedData).watched.length === 0) {
    Notiflix.Notify.success('Sorry, there are no added movies .');
    return;
  }

  const dataArray = JSON.parse(savedData).watched;
  console.log(dataArray);
  galleryClean();
  storageGalleryCreate(dataArray);
  btnLoadNextRemove();
  btnLoadPrevRemove();
}

export { onWatchedBtnClick };
