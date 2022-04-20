import '../sass/main.scss';
import { elems } from "./elems.js";

    function toggleModal() {
        elems.modal.classList.toggle('is-hidden');
    }


export { toggleModal };