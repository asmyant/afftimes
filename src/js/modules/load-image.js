const $input = document.querySelector('.js-load-image__input');
const $container = document.querySelector('.js-load-image__container');
const $add = document.querySelector('.js-load-image__add-button');
const $remove = document.querySelector('.js-load-image__delete-button');
let emptyImage = '';

const showAddButton = () => {
   $add.style.display = 'block';
   $remove.style.display = 'none';
}

const showRemoveButton = () => {
   $add.style.display = 'none';
   $remove.style.display = 'block';
}

const changeInput = (evt) => {
   let
      tgt = evt.target || window.event.srcElement,
      files = tgt.files;

   if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = function () {
         emptyImage = $container.getAttribute('src');
         $container.setAttribute('src', fr.result);
         showRemoveButton();
      }
      fr.readAsDataURL(files[0]);
   }
}

const unChangeInput = () => {
   showAddButton();
   $container.setAttribute('src', emptyImage);
   $input.value = '';
}

export const loadImage = () => {
   if ($container) {
      $input.addEventListener('change', (evt) => {
         changeInput(evt);
      });

      $remove.addEventListener('click', (e) => {
         e.preventDefault();
         unChangeInput();
      });
   }
}
