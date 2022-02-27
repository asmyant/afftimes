import Swiper, {Lazy} from "swiper";

Swiper.use([Lazy]);

const $next = document.querySelector('.js-home-videos__next');
const $prev = document.querySelector('.js-home-videos__prev');

export const homeVideos = () => {
   const slider = new Swiper('.js-home-videos', {
      loop: true,
      lazy: true,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
         991: {
            slidesPerView: 3,
            spaceBetween: 45,
         },
         576: {
            slidesPerView: 2,
         }
      },
   });

   if ($next || $prev) {
      $next.addEventListener('click', (e) => {
         e.preventDefault();
         slider.slideNext();
      });
      $prev.addEventListener('click', (e) => {
         e.preventDefault();
         slider.slidePrev()
      });
   }
}
