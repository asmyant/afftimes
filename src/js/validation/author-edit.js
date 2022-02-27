import {validation} from "../modules/validation.js";
import {Spinner} from "../modules/spinner.js";

const $form = document.querySelector('.js-author-edit-form');

export const authorPageEdit = () => validation($form, (event) => {
   event.preventDefault();
   const loading = new Spinner($form);
   loading.show();

   setTimeout(() => {
      loading.hide();
   }, 2000);
})
