import Swiper, {Lazy, Autoplay, EffectFade} from "swiper";

Swiper.use([Autoplay, EffectFade]);

const $slider = document.querySelectorAll('.js-banner');

export const banner = () => {
   Array.from($slider).forEach($item => {
      new Swiper($item, {
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
         autoplay: {
            delay: 5000,
         },
      })
   })
}
