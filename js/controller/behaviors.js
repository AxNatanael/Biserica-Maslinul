/** CONTROLLER — comportamenti interattivi, attivati dopo che la View ha disegnato la pagina. */

export function initBehaviors() {
  const header = document.querySelector('.site-header');
  initMenu(header);
  initHeaderShadow(header);
  initReveal();
  initGalleryFilters();
  initLightbox();
}

/* ---------- Menu mobile ---------- */
let setMenu = () => {};

function initMenu(header) {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!header || !toggle || !nav) return;

  setMenu = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
}

/* ---------- Ombra dell'header quando si scorre ---------- */
function initHeaderShadow(header) {
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- Animazioni di comparsa ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
}

/* ---------- Filtri della galleria ---------- */
function initGalleryFilters() {
  const buttons = document.querySelectorAll('.filters button[data-filter]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      document.querySelectorAll('.galleria .filterDiv').forEach((img) => {
        img.style.display = f === 'all' || img.classList.contains(f) ? '' : 'none';
      });
    });
  });
}

/* ---------- Lightbox (foto a schermo intero) ---------- */
function initLightbox() {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const closeBtn = document.getElementById('lbClose');
  if (!box || !img) return;

  const close = () => {
    box.classList.remove('active');
    box.setAttribute('aria-hidden', 'true');
    img.removeAttribute('src');
  };

  document.querySelectorAll('.galleria img.filterDiv').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      img.src = thumb.dataset.full || thumb.src;
      img.alt = thumb.alt;
      box.classList.add('active');
      box.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    });
  });

  closeBtn?.addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && box.classList.contains('active')) close(); });
}
