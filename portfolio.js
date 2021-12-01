// selecting the elements

const hamburger_button = document.querySelector('.navbar-toggler');
const icon_toggler = document.querySelector('.navbar-toggler-icon');
const navbar_anchors = document.querySelectorAll('#navhelp .nav-link');
const inp_element = document.querySelectorAll('input');
const text_area = document.querySelector('textarea');
const btn = document.querySelector('.contact-pg-btn-form');


// function declaration

function iconToggle(element, classkeep, classremove) {
    element.classList.remove(classremove);
    element.classList.add(classkeep);
}


hamburger_button.addEventListener('click', function toggle(evt) {

    const check = this.getAttribute('aria-expanded');

    if (check === "true") {
        iconToggle(icon_toggler, 'close-btn', 'navbar-toggler-icon');
    }

    else {
        iconToggle(icon_toggler, 'navbar-toggler-icon', 'close-btn');
    }

})


//Example starter JavaScript for disabling form submissions if there are invalid fields


function main() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
}

// executing the function to disable if fields not filled and that too with validity as provided.
main(); 


// resists the form from the default behaviour of submission when inside a form.


// try {
//     btn.addEventListener('click', (evt) => {
//         evt.preventDefault(); // method on the event object.
//     })
// }

// catch (err) {
// }
