export const validation = ($form, successCallback) => {
   if ($form) {
      $form.addEventListener('submit', (event) => {
         if (!$form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
         } else {
            successCallback(event);
         }

         $form.classList.add('was-validated');
      }, false);
   }
}
