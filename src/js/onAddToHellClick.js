import '../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { elems } from "./elems.js";
import { moviesApiService } from "./index.js";
import MoviesApiService from "./moviesApiService.js";
import { notiflixOptions, notiflixReportOptions } from "./notiflixOptions.js";

function onAddToHellClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.hell.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        elems.addToHellBtn.textContent = "IN HELL";
        elems.addToHellBtn.style.backgroundColor = "#c72121";
        elems.addToHellBtn.disabled = true;
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
            elems.addToHellBtn.textContent = "IN HELL";
            elems.addToHellBtn.style.backgroundColor = "#c72121";
            elems.addToHellBtn.disabled = true;
            return;
        };
        data.hell.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        elems.addToHellBtn.textContent = "IN HELL";
        elems.addToHellBtn.style.backgroundColor = "#c72121";
        elems.addToHellBtn.disabled = true;
    }
}

export { onAddToHellClick };