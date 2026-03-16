const revealElements = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const header = document.querySelector('.site-header');

// Reveal sections on scroll for a smoother storytelling flow.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -30px 0px'
  }
);

revealElements.forEach((element) => observer.observe(element));

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mainNav.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!header) {
    return;
  }

  header.style.boxShadow = window.scrollY > 20
    ? '0 8px 22px rgba(17, 22, 21, 0.08)'
    : 'none';
});
