import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from './elems.js';
import { moviesApiService } from './index.js';
import MoviesApiService from './moviesApiService.js';
import { notiflixOptions, notiflixReportOptions } from './notiflixOptions.js';
import { setOnDatabase } from './firebase.js';
import { getOnDatabase } from './firebase.js';

function onAddToWatchClick(evt) {
  const savedData = getOnDatabase();
  if (!savedData) {
    const idStorage = {
      watched: [],
      hell: [],
    };

    idStorage.watched.push(moviesApiService.dataStorageObj);
    setOnDatabase(JSON.stringify(idStorage));
    elems.addToWatchedBtn.textContent = 'WATCHED';
    elems.addToWatchedBtn.style.backgroundColor = '#c72121';
    elems.addToWatchedBtn.disabled = true;
  } else {
    const newDataId = moviesApiService.dataStorageObj;
    const data = JSON.parse(savedData);
    if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
      elems.addToWatchedBtn.textContent = ' WATCHED';
      elems.addToWatchedBtn.style.backgroundColor = '#c72121';
      elems.addToWatchedBtn.disabled = true;
      return;
    }
    data.watched.push(newDataId);
    setOnDatabase('saved-data', JSON.stringify(data));
    elems.addToWatchedBtn.textContent = 'WATCHED';
    elems.addToWatchedBtn.style.backgroundColor = '#c72121';
    elems.addToWatchedBtn.disabled = true;
  }
}

export { onAddToWatchClick };
