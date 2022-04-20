import { elems } from "./elems.js";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function galleryCollectionCreate(data,dataGen) {
    elems.divGalleryEl.insertAdjacentHTML('beforeend',
        (data.map(({ genre_ids, id, poster_path, release_date, title }) => {
            let ganresArrey = [];
            genre_ids.map((genre_id) => {
                ganresArrey.push(dataGen.find(genere => genere.id === genre_id).name);
                return ganresArrey;
            });
            const genres = ganresArrey.join(', ');
            return `
                
                    <li class="photo-card" data-id="${id}">
                        <a href="">
                            <img class="card" src="${BASE_POSTER_URL}${poster_path}" alt="${title}" loading="lazy" />
                        </a>
                        <div class="card-title">
                            <h3 class="movieTitle">
                                ${title}
                            </h3>
                            <div class="info">
                                <p class="info-item">
                                    ${genres}
                                </p>
                                <span class="info-item"> | </span>
                                <p class="info-item">
                                    ${release_date.slice(0, 4)}
                                </p>
                            </div>
                        </div>
                    </li>
                `;
        }).join('')));
};

function galleryClean() {
    elems.divGalleryEl.innerHTML = '';
};

export { galleryCollectionCreate, galleryClean };