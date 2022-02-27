let $container = document.querySelector('.js-container');
let $left = document.querySelectorAll('.js-container__left');

function setLeftMargin() {
   let indent = (window.innerWidth - $container.clientWidth) / 2 + 15;

   for (let i = 0; i < $left.length; i++) {
      $left[i].style.paddingLeft = indent + 'px';
   }
}

export let container = () => {
   window.addEventListener('resize', setLeftMargin);
   setLeftMargin();
}
