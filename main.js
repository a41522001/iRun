import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'loaders.css/loaders.min.css';

export const currentBase = '/iRun/';

const currentRoot = window.location.pathname.replace(currentBase, '').split('/')[0];

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
  if (navLink.getAttribute('href') === currentRoot) {
    navLink.classList.add('text-warning-100');
    navLink.classList.remove('text-secondary-300');
    navLink.firstElementChild.classList.add('bg-warning-100');
    navLink.firstElementChild.classList.remove('bg-secondary-300');
  } else {
    navLink.classList.remove('text-warning-100');
    navLink.classList.add('text-secondary-300');
    navLink.firstElementChild.classList.remove('bg-warning-100');
    navLink.firstElementChild.classList.add('bg-secondary-300');
  }

  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    const to = navLink.getAttribute('href');
    if (to === currentRoot) return;
    window.location.href = `${currentBase}${to}/`;
  });
});
