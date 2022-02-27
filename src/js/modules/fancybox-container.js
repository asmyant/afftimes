import {Fancybox} from "@fancyapps/ui";

const $content = document.querySelector('.text-content');

export const fancyboxContainer = () => {
   if ($content) {
      Array.from($content.querySelectorAll('figure')).forEach(figure => {
         console.log(figure)
         const wrap = document.createElement('a');
         const $img = figure.querySelector('img');
         wrap.setAttribute('data-fancybox', 'gallery');
         wrap.setAttribute('data-caption', $img.getAttribute('alt'));
         wrap.setAttribute('data-src', $img.getAttribute('data-src'));
         wrap.setAttribute('data-responsive', 'true');
         wrap.append($img);
         figure.prepend(wrap);
      });
   }
}

