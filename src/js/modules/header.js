const $header = document.querySelector('.js-header');
const $fixedHeader = $header.querySelector('.js-header-fixed');
const startAnimation = '400';
const transition = '.3s';
const fixedClass = 'is--fixed';

const fixed = (whenCalled = 'scroll') => {
   let scrollTop = window.scrollY;

   // Когда мы пролистали шапку то поднять вверх
   if (scrollTop > $fixedHeader.clientHeight && scrollTop < startAnimation) {
      $fixedHeader.style.transform = `translateY(-200%)`;
   }

   // Когда проехали брекпоинт то фиксировать шапку и добавить класс
   else if (scrollTop > startAnimation) {
      $fixedHeader.style.cssText = `transform: translateY(0px); position: fixed`;
      $header.classList.add(fixedClass);

      if (whenCalled === 'scroll'){
         $fixedHeader.style.transition = transition;
      }
   }

   // Сскролили обратно до шапки то обнулить все
   else if (scrollTop <= $fixedHeader.clientHeight) {
      $fixedHeader.style.removeProperty('transition');
      $fixedHeader.style.cssText = `transform: translateY(0);`;
      $header.classList.remove(fixedClass)
   }
}

export const header = () => {
   fixed('load');
   document.addEventListener('scroll', fixed.bind(null, 'scroll'));
}
