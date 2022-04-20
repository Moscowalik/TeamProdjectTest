import { elems } from "./elems.js";

function btnLoadNextAdd() {
    if (elems.btnLoadNextEl.classList.contains('displayNone')) {
        elems.btnLoadNextEl.classList.remove('displayNone');
    }
    return;
};

function btnLoadNextRemove() {
    if (!elems.btnLoadNextEl.classList.contains('displayNone')) {
        elems.btnLoadNextEl.classList.add('displayNone');
    }
    return;
};

function btnLoadPrevAdd() {
    if (elems.btnLoadPrevEl.classList.contains('displayNone')) {
        elems.btnLoadPrevEl.classList.remove('displayNone');
    }
    return;
};

function btnLoadPrevRemove() {
    if (!elems.btnLoadPrevEl.classList.contains('displayNone')) {
        elems.btnLoadPrevEl.classList.add('displayNone');
    }
    return;
};

export { btnLoadNextAdd, btnLoadNextRemove, btnLoadPrevAdd, btnLoadPrevRemove };