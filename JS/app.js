const navToggle = document.querySelector('.nav-toggle');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');




navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
    });
});