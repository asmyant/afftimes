import Swiper, {Navigation, Pagination} from "swiper";
Swiper.use([Navigation, Pagination]);

const $active = document.querySelector('.js-gut-one-slider__active');
const $count = document.querySelector('.js-gut-one-slider__count');

export const gutenbergSingeSlider = () => {
   if($active) {
      const slider = new Swiper('.js-gut-one-slider', {
         spaceBetween: 30,
         pagination: {
            el: ".js-gut-one-slider__pagination",
         },
         navigation: {
            nextEl: ".js-gut-one-slider__next",
            prevEl: ".js-gut-one-slider__prev",
         },
      });

      $count.innerHTML = slider.slides.length - 1;

      slider.on('slideChange', () => {
         $active.innerHTML = slider.activeIndex;
      })
   }

}
