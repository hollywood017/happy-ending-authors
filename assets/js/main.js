/* ============================================
   Happy Ending Authors — main.js
   Scroll Animations + Parallax + Mobile Nav
   ============================================ */

// ── Announcement bar top offset tracking ──
const announcementBar = document.querySelector('.announcement-bar');
const nav = document.querySelector('nav');

function updateNavOffset() {
  const barH = announcementBar ? announcementBar.offsetHeight : 0;
  if (nav) nav.style.top = window.scrollY > barH ? '0px' : `${barH - window.scrollY}px`;
}

window.addEventListener('scroll', updateNavOffset, { passive: true });
updateNavOffset();

// ── Nav scrolled class (shadow) ──
window.addEventListener('scroll', () => {
  const barH = announcementBar ? announcementBar.offsetHeight : 0;
  if (nav) nav.classList.toggle('scrolled', window.scrollY > barH + 10);
}, { passive: true });

// ── Scroll reveal animations ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Don't unobserve — keep visible once triggered
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ── Hero image Ken Burns effect on load ──
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
  heroBgImg.addEventListener('load', () => {
    heroBgImg.classList.add('loaded');
  });
  if (heroBgImg.complete) heroBgImg.classList.add('loaded');
}

// ── Hero parallax (desktop only) ──
let heroParallaxTicking = false;
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 1024) return;
  if (!heroParallaxTicking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      if (heroBgImg && scrollY < window.innerHeight * 1.5) {
        heroBgImg.style.transform = `scale(1) translateY(${scrollY * 0.25}px)`;
      }
      heroParallaxTicking = false;
    });
    heroParallaxTicking = true;
  }
}, { passive: true });

// ── Marquee: duplicate for seamless loop ──
document.querySelectorAll('.marquee-track, .announcement-track').forEach(track => {
  if (track) track.innerHTML += track.innerHTML;
});

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

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  drawer.querySelector('.nav-drawer-close').addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));
  drawer.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });
}

injectMobileNav();

// ── Blog image hover zoom (already handled via CSS) ──
// ── Smooth stat counter animation ──
function animateCounter(el) {
  const text = el.textContent.trim();
  const numMatch = text.match(/[\d,]+/);
  if (!numMatch) return;
  const target = parseInt(numMatch[0].replace(/,/g, ''), 10);
  const suffix = text.replace(numMatch[0], '');
  let start = 0;
  const duration = 1400;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Trigger counters when stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
