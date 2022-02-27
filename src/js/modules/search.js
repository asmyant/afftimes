import {blockerShow, blockerHide, blockerClick} from "./blocker.js";

const $el = document.querySelector('.js-search');
const $open = Array.from(document.querySelectorAll('.js-search__open'));
const active = 'is-show';
const $results = document.querySelector('.js-search__results');
const $input = document.querySelector('.js-search__input');
const $icon = document.querySelector('.js-search__icon');

const open = () => {
   $el.classList.add(active);
   blockerShow();
}

const close = () => {
   hideList();
   $el.classList.remove(active);
   blockerHide();
}

const showList = () => {
   $results.style.display = 'block';
   $icon.classList.add('active')

}

const hideList = () => {
   $results.style.display = 'none';
   $icon.classList.remove('active')
}

export const search = () => {

   $open.forEach($item => {
      $item.addEventListener('click', (e) => {
         e.preventDefault();
         open()
      })
   })

   $input.addEventListener('keyup', () =>
      $input.value.length >= 1 ? showList() : hideList()
   )

   blockerClick(close)
}

