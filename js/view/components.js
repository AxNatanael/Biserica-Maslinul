/** VIEW — componenti riutilizzati da più pagine. */
import { esc, icon } from './helpers.js';

/** Curva crema in fondo alle intestazioni scure. */
export const curve = () =>
  '<svg class="hero-curve" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 60V30C240 0 480 0 720 22s480 38 720 8v30Z"/></svg>';

/** Ramo d'ulivo decorativo. */
export const branch = (ctx, cls = 'hero-branch') =>
  `<img class="${cls}" src="${ctx.site.images.branchLight}" alt="" aria-hidden="true">`;

/** Intestazione delle pagine interne (titolo su fondo verde oliva). */
export const pageHero = (ctx, title) => `
  <section class="page-hero">
    ${branch(ctx)}
    <div class="container"><h1>${esc(title)}</h1></div>
    ${curve()}
  </section>`;

/** Sezione standard con contenitore. */
export const section = (inner, cls = 'section', id = '') =>
  `<section class="${cls}"${id ? ` id="${id}"` : ''}><div class="container">${inner}</div></section>`;

/** Titoletto con fogliolina + titolo di sezione. */
export const sectionHead = (kicker, title) => `
  <div class="section-head reveal">
    <span class="kicker">${icon('leaf')}${esc(kicker)}</span>
    <h2>${esc(title)}</h2>
  </div>`;

/** Logo + nome della chiesa (usato in header e footer). */
export const brandText = (ctx) => `
  <span class="brand-text">
    <span class="brand-name">${esc(ctx.t.name)}</span>
    <span class="brand-place">${esc(ctx.site.address)}</span>
  </span>`;

/** Ritardo progressivo per le animazioni di comparsa. */
export const delay = (i) => `style="transition-delay:${i * 90}ms"`;
