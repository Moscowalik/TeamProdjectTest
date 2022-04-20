import { elems } from "./elems.js";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

function movieCardCreate(data) {
    const { genres, id, original_title, overview, popularity, poster_path, title, vote_average, vote_count } = data;
    // let ganresArrey = [];
    // genre_ids.map((genre_id) => {
    //     ganresArrey.push(dataGen.find(genere => genere.id === genre_id).name);
    //     return ganresArrey;
    // });
    const genresString = genres.map((genre) => {
        return genre.name;
    }).join(', ');
    const cardString = `
                
                    <div class="movieId" data-id="${id}">
                        <a href="" class="posterId">
                            <img class="cardId" src="${BASE_POSTER_URL}${poster_path}" alt="${title}" loading="lazy" />
                        </a>
                        <div class="movieCardId">
                            <h3 class="movieIdTitle">
                                ${title}
                            </h3>
                            <div class="infoId">
                                <div class="infoId-String">
                                    <p class="infoId-item"> Vote/votes </p>
                                    <span class="infoId-span"> ${vote_average}/${vote_count} </span>
                                </div>
                                
                                <div class="infoId-String">
                                    <p class="infoId-item"> Popularity </p>
                                    <span class="infoId-span"> ${popularity} </span>
                                </div>

                                <div class="infoId-String">
                                    <p class="infoId-item"> Original Title </p>
                                    <span class="infoId-span"> ${original_title} </span>
                                </div>
                                
                                <div class="infoId-String">
                                    <p class="infoId-item"> Genre </p>
                                    <span class="infoId-span"> ${genresString} </span>
                                </div>
                                
                                <h4 class="infoId-title">ABOUT</h4>
                                    
                                <p class="infoId-text">
                                    ${overview}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                `;
    elems.modalMovieCard.insertAdjacentHTML('afterbegin', cardString)
};

function movieCardClean() {
    elems.modalMovieCard.innerHTML = '';
};

export { movieCardCreate, movieCardClean };