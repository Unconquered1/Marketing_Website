'use strict';

/*-----------------------------------------------
|   Bootstrap validation
-----------------------------------------------*/
(() => {
  window.addEventListener('load', () => {
    // Fetch all the forms we want to apply reign Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
