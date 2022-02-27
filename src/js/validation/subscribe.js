import {validation} from "../modules/validation.js";
import {Spinner} from "../modules/spinner.js";

const $form = document.querySelector('.js-subscribe-form');

export const subscribeForm = () => validation($form, (event) => {
   event.preventDefault();
   const loading = new Spinner($form);
   loading.show();

   setTimeout(() => {
      loading.hide();
      $form.innerHTML = '<div class="h4">Спасибо за подписку!</div>';
   }, 2000);
})
