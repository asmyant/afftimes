import {validation} from "../modules/validation.js";

const $form = document.querySelector('.js-comments-form');

export const commentsForm = () => validation($form, () => {
   console.log('Success author edit form');
})
