/**
 * VIEW — struttura comune a tutte le pagine: header con menu, footer, lightbox.
 * È scritta una sola volta qui: ogni modifica al menu o al footer vale per tutto il sito.
 */
import { esc, icon, join } from './helpers.js';
import { brandText } from './components.js';
import { pageUrl, telHref } from '../model/index.js';

export function header(ctx) {
  const { t, site, page, lang } = ctx;

  const menu = join(site.menu, (key) =>
    `<li><a href="${pageUrl(key, lang)}"${key === page ? ' aria-current="page"' : ''}>${esc(t.menu[key])}</a></li>`);

  const langs = join(Object.keys(site.languages), (l) =>
    `<a href="${pageUrl(ctx.langTarget, l)}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${site.languages[l].label}</a>`);

  return `
  <a class="skip-link" href="#continut">${esc(t.ui.skip)}</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${pageUrl('index', lang)}">
        <span class="brand-logo"><img src="${site.images.logo}" alt="Logo ${esc(t.name)}" width="54" height="54"></span>
        ${brandText(ctx)}
      </a>
      <button class="nav-toggle" type="button" aria-label="${esc(t.ui.openMenu)}" aria-expanded="false" aria-controls="main-nav">
        ${icon('menu', 'i-open')}${icon('close', 'i-close')}
      </button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <ul class="nav-list">${menu}</ul>
        <div class="lang-switch" aria-label="Limba / Lingua">${langs}</div>
      </nav>
    </div>
  </header>`;
}

export function footer(ctx) {
  const { t, site } = ctx;
  const c = site.contacts;
  return `
  <footer class="site-footer">
    <img class="footer-branch" src="${site.images.branchLight}" alt="" aria-hidden="true">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="brand-logo"><img src="${site.images.logo}" alt="" width="54" height="54"></span>
          ${brandText(ctx)}
        </div>
        <ul class="footer-links">
          <li><a href="mailto:${c.churchEmail}">${icon('mail')}${esc(c.churchEmail)}</a></li>
          <li><a href="${telHref(c.phone)}">${icon('phone')}${esc(c.phone)}</a></li>
          <li><a href="${site.mapLink}" target="_blank" rel="noopener">${icon('pin')}${esc(site.address)}</a></li>
        </ul>
      </div>
      <div class="footer-bottom">${esc(t.copyright)}</div>
    </div>
  </footer>`;
}

export const lightbox = (ctx) => `
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-hidden="true">
    <button class="close" id="lbClose" type="button" aria-label="${esc(ctx.t.ui.close)}">✕</button>
    <img id="lbImg" alt="">
  </div>`;

/** Pagina completa: layout comune + contenuto specifico. */
export const layout = (ctx, content) =>
  `${header(ctx)}<main id="continut">${content}</main>${footer(ctx)}${lightbox(ctx)}`;
