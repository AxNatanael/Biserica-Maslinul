/** VIEW — Galleria foto con filtri. Le foto si aggiungono in js/model/site.js → photos. */
import { esc, join } from '../helpers.js';
import { pageHero, section } from '../components.js';

export default function foto(ctx) {
  const { t, site } = ctx;
  const f = t.foto;

  const filters = `
  <div class="filters" role="group" aria-label="${esc(f.title)}">
    ${join(Object.entries(f.filters), ([key, label], i) =>
      `<button type="button" data-filter="${key}" aria-pressed="${i === 0}"${i === 0 ? ' class="active"' : ''}>${esc(label)}</button>`)}
  </div>`;

  const gallery = site.photos.length
    ? join(site.photos, (p) =>
        `<img src="${p.src}" alt="${esc(p.alt)}" class="filterDiv ${p.categories.join(' ')}" loading="lazy"${p.full ? ` data-full="${p.full}"` : ''}>`)
    : `<div class="empty-state">
         <img src="${site.images.branch}" alt="" aria-hidden="true">
         <p>${esc(f.empty)}</p>
       </div>`;

  return {
    title: f.title,
    content: pageHero(ctx, f.title) + section(`${filters}<div class="galleria">${gallery}</div>`),
  };
}
