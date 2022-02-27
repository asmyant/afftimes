import Cookies from 'js-cookie';

const $container = document.querySelector('.js-float-popup');
const active = 'show';
const $close = document.querySelector('.js-float-popup__close');
const showTime = 1000;

const show = () => {
   if(Cookies.get('float-popup') === undefined) {
      $container.classList.add(active)
   }
}

const hide = () => {
   $container.classList.remove(active)
   Cookies.set('float-popup', 'hide-float-popup', { expires: 240 / 1440 });
}

export const floatPopup = () => {
   setTimeout(show, showTime);

   $close.addEventListener('click', () =>  hide());
}
