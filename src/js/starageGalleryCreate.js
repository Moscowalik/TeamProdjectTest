import { elems } from "./elems.js";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function storageGalleryCreate(data) {
    elems.divGalleryEl.insertAdjacentHTML('beforeend',
        (data.map((dataObj) => {
            
            return `
                
                    <li class="photo-card" data-id="${dataObj.movieId_card}">
                        <a href="">
                            <img class="card" src="${BASE_POSTER_URL}${dataObj.moviePoster}" alt="${dataObj.movieTitle}" loading="lazy" />
                        </a>
                        <div class="card-title">
                            <h3 class="movieTitle">
                                ${dataObj.movieTitle}
                            </h3>
                            <div class="info">
                                <p class="info-item">
                                    ${dataObj.movieGenres}
                                </p>
                                <span class="info-item"> | </span>
                                <p class="info-item">
                                    ${dataObj.movieRelease_date}
                                </p>
                            </div>
                        </div>
                    </li>
                `;
        }).join('')));
};

export { storageGalleryCreate };