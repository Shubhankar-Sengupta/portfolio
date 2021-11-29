// selecting the elements

const hamburger_button = document.querySelector('.navbar-toggler');
const icon_toggler = document.querySelector('.navbar-toggler-icon');
const navbar_anchors =  document.querySelectorAll('#navhelp .nav-link');



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


