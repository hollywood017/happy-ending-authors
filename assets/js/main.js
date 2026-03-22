/* ============================================
   Happy Ending Authors — main.js
   ============================================ */

// Fade-up scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Subtle hero parallax
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroLeft = document.querySelector('.hero-left');
  if (heroLeft && scrollY < window.innerHeight) {
    heroLeft.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});

// Nav shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 30px rgba(44,62,80,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Duplicate marquee for seamless loop
const track = document.querySelector('.marquee-track');
if (track) {
  track.innerHTML += track.innerHTML;
}
