/* ============================================
   Happy Ending Authors — main.js
   ============================================ */

// ── Fade-up scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Subtle hero parallax (desktop only) ──
window.addEventListener('scroll', () => {
  if (window.innerWidth > 1024) {
    const scrollY = window.scrollY;
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft && scrollY < window.innerHeight) {
      heroLeft.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  }
});

// ── Nav shadow on scroll ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 60
    ? '0 4px 30px rgba(44,62,80,0.08)'
    : 'none';
});

// ── Marquee: duplicate for seamless loop ──
const track = document.querySelector('.marquee-track');
if (track) track.innerHTML += track.innerHTML;

// ── Mobile hamburger menu ──
function injectMobileNav() {
  // Add hamburger button to nav
  const navEl = document.querySelector('nav');
  if (!navEl || document.querySelector('.nav-hamburger')) return;

  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  navEl.appendChild(hamburger);

  // Create full-screen drawer
  const drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.innerHTML = `
    <button class="nav-drawer-close" aria-label="Close menu">✕</button>
    <a href="#books" class="drawer-link">Books</a>
    <a href="#authors" class="drawer-link">Authors</a>
    <a href="#community" class="drawer-link">Community</a>
    <a href="#journal" class="drawer-link">Journal</a>
    <a href="#events" class="drawer-link">Events</a>
    <a href="#join" class="drawer-cta">Join the Club</a>
  `;
  document.body.appendChild(drawer);

  // Toggle open
  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Close on X
  drawer.querySelector('.nav-drawer-close').addEventListener('click', closeDrawer);

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on outside tap
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

injectMobileNav();
