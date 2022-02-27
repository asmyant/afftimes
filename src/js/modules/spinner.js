export class Spinner {
   constructor($form) {
      this.$container = $form.querySelector('.js-spinner');
      this.$spinner = $form.querySelector('.js-spinner__item');
      this.$text = $form.querySelector('.js-spinner__text');
   }

   show() {
      this.$spinner.style.display = 'block';
      this.$text.style.display = 'none';
      this.$container.setAttribute('disabled', 'disabled');
   }

   hide() {
      this.$spinner.style.display = 'none';
      this.$text.style.display = 'block';
      this.$container.removeAttribute('disabled');
   }
}
