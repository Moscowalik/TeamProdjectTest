const elems = {
    bodyEl: document.querySelector('.body'),
    pageTitle: document.querySelector('.page-title'),
    formEl: document.querySelector('form#search-form'),
    inputEl: document.querySelector('.form__input'),
    btnSearchEl: document.querySelector('.form__btn'),
    divGalleryEl: document.querySelector('.gallery'),
    btnLoadNextEl: document.querySelector('.load-more'),
    btnLoadPrevEl: document.querySelector('.load-prev'),
    currentPageEl: document.querySelector('.page'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalMovieCard: document.querySelector('.movieModal'),
    addToWatchedBtn: document.querySelector('.movieWatchedBtn'),
    addToHellBtn: document.querySelector('.movieHellBtn'),
    homeBtnEl: document.querySelector('.homeBtn'),
    watchedBtnEl: document.querySelector('.watchedbtn'),
    hellBtnEl: document.querySelector('.hellbtn'),
};

export { elems }