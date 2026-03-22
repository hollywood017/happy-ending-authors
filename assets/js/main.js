/* ============================================
   Happy Ending Authors — main.js
   Scroll Animations + Parallax + Mobile Nav
   ============================================ */

// ── Announcement bar + nav offset ──
const announcementBar = document.querySelector('.announcement-bar');
const nav = document.querySelector('nav');

function updateNavOffset() {
  if (!nav || !announcementBar) return;
  const barH = announcementBar.offsetHeight;
  const scrolled = window.scrollY > barH;
  nav.style.top = scrolled ? '0px' : (barH - Math.min(window.scrollY, barH)) + 'px';
  nav.classList.toggle('scrolled', scrolled);
}

window.addEventListener('scroll', updateNavOffset, { passive: true });
updateNavOffset();

// ── Scroll reveal ──
// Step 1: mark anything already in view as visible immediately
// Step 2: mark everything else as below-fold (hidden)
// Step 3: IntersectionObserver reveals below-fold as they scroll into view

function initReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const vh = window.innerHeight;

  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.98) {
      // Already in viewport on load — show immediately, no animation
      el.classList.add('visible');
    } else {
      // Below fold — hide it, reveal on scroll
      el.classList.add('below-fold');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  els.forEach(el => observer.observe(el));
}

// Run after a tiny delay so layout is complete
setTimeout(initReveal, 50);

// ── Hero Ken Burns (slow zoom out on load) ──
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
  const markLoaded = () => heroBgImg.classList.add('loaded');
  if (heroBgImg.complete) markLoaded();
  else heroBgImg.addEventListener('load', markLoaded);
}

// ── Hero parallax on scroll (desktop only) ──
let ticking = false;
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 1024 || ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const sy = window.scrollY;
    if (heroBgImg && sy < window.innerHeight * 1.5) {
      heroBgImg.style.transform = `scale(1) translateY(${sy * 0.22}px)`;
    }
    ticking = false;
  });
}, { passive: true });

// ── Marquee duplicate for seamless loop ──
document.querySelectorAll('.marquee-track, .announcement-track').forEach(track => {
  if (track) track.innerHTML += track.innerHTML;
});

// ── Dark / Evening mode toggle ──
const darkToggle = document.getElementById('darkToggle');
const DARK_KEY = 'hea-dark-mode';

function applyDark(on) {
  document.body.classList.toggle('dark-mode', on);
  if (darkToggle) darkToggle.textContent = on ? '☀️' : '🌙';
  try { localStorage.setItem(DARK_KEY, on ? '1' : '0'); } catch(e) {}
}

// Restore preference
try {
  const saved = localStorage.getItem(DARK_KEY);
  if (saved === '1') applyDark(true);
} catch(e) {}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    applyDark(!document.body.classList.contains('dark-mode'));
  });
}

// ── Mobile hamburger nav ──
function injectMobileNav() {
  if (!nav || document.querySelector('.nav-hamburger')) return;

  const hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(hamburger);

  const drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.innerHTML = `
    <button class="nav-drawer-close" aria-label="Close menu">✕</button>
    <a href="#books">Books</a>
    <a href="#authors">Authors</a>
    <a href="#community">Community</a>
    <a href="#journal">Journal</a>
    <a href="#events">Events</a>
    <a href="#join" class="drawer-cta">Join the Club</a>
  `;
  document.body.appendChild(drawer);

  const close = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  drawer.querySelector('.nav-drawer-close').addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  drawer.addEventListener('click', e => { if (e.target === drawer) close(); });
}

injectMobileNav();
