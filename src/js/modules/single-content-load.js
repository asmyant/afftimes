const $content = document.querySelector('.js-post-load');
const $textContent = document.querySelector('.js-post-load__container');
const $bar = document.querySelector('.js-post-load__bar');

function getHeight() {
   let scrollTop = document.scrollingElement.scrollTop,
      headerHeight = 100;


   if (scrollTop > ($textContent.offsetTop - headerHeight)) {
      $content.style.height = window.innerHeight - 120 + 'px';
      $content.style.position = 'sticky';
      $content.style.top = '90px';
      let percent = ((scrollTop - $textContent.offsetTop) / ($textContent.clientHeight - window.innerHeight)) * 100;
      percent = percent < 0 ? '35px' : percent + '%';
      $bar.style.height = percent;
   }
}

export const loadContentSingle = () => {
   if ($content) {
      if ($textContent.clientHeight > 2000) {
         document.addEventListener('scroll', getHeight)
         getHeight();
      } else {
         $content.style.display = 'none';
      }
   }
}
