const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navbar.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  alert(`Thanks ${name || 'there'}! Our consultants will reach out shortly.`);
  contactForm.reset();
});
