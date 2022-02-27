let $buttons = document.querySelectorAll('.js-show-password');

export const togglePassword = () => Array.from($buttons).forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      const $input = button.nextElementSibling;
      let type = $input.getAttribute('type') === 'password' ? 'text' : 'password';
      $input.setAttribute('type', type)
   })
})
