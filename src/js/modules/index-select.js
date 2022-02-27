const $container = document.querySelector('.js-index-select');
const $hide = document.querySelector('.js-index-select__hide');

export const indexSelect = () => {
   if ($hide) {
      $hide.addEventListener('click', (e) => {
         e.preventDefault();
         $container.classList.add('is-hide');
      });
   }
}
