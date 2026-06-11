const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const handleActiveLink = () => {
  const sections = document.querySelectorAll('main section');
  const offset = window.innerHeight * 0.35;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const anchor = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!anchor) return;

    if (top <= offset && top > -section.offsetHeight + 120) {
      anchor.classList.add('active');
    } else {
      anchor.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', handleActiveLink);
window.addEventListener('load', handleActiveLink);
