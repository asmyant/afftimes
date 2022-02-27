import {validation} from "../modules/validation.js";
import {Modal} from 'bootstrap';
import {Spinner} from "../modules/spinner.js";

const regModal = new Modal(document.querySelector('.js-login-modal'))
const successModal = new Modal(document.querySelector('.js-success-reg-modal'))

let $loginForm = document.querySelector('.js-login-form');
let $regForm = document.querySelector('.js-reg-form');
let $replayForm = document.querySelector('.js-rpass-form');

// Войти
export const loginForm = () => validation($loginForm, () => {
   console.log('Success login form');
})

// Регистрация
export const regForm = () => validation($regForm, (event) => {
   event.preventDefault();
   const loading = new Spinner($regForm);
   loading.show();

   setTimeout(() => {
      loading.hide();
      regModal.hide();
      successModal.show();
   }, 2000);
})

// Забыли пароль?
export const replayForm = () => validation($replayForm, () => {
   console.log('Success replay form');
})
