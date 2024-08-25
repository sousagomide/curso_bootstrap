(function() {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((forms) => {
        forms.addEventListener('submit', (event) => {
            if(!forms.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            forms.classList.add('was-validated');
        }, false);
    });
})()