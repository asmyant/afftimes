import {Toast} from "bootstrap";

const $copyButton = document.querySelectorAll('.js-copy');
let toast = new Toast(document.querySelector('.js-toast-success-copy'), {
   autohide: true,
   delay: 1000
});

export const copy = () => Array.from($copyButton).forEach($button => {
   $button.addEventListener('click', function (event) {
      const $input = $button.querySelector('.js-copy__input');
      $input.focus();
      $input.select();

      document.execCommand('copy');
      toast.show();
   });
})

