/** VIEW — pagina Home. */
import { esc, icon, join } from '../helpers.js';
import { branch, curve, sectionHead, delay } from '../components.js';

export default function home(ctx) {
  const { t, site } = ctx;
  const h = t.home;

  const hero = `
  <section class="hero">
    ${branch(ctx)}
    <div class="container hero-inner">
      <div class="rise">
        <p class="eyebrow" id="home">${esc(h.verseRef)}</p>
        <blockquote class="hero-verse">${esc(h.verse)}</blockquote>
        <div class="hero-actions">
          <a class="btn btn-gold" href="#eventi">${icon('clock')}${esc(h.schedule.title.replace(/\.$/, ''))}</a>
          <a class="btn btn-ghost" href="#mappa">${icon('pin')}${esc(h.map.title)}</a>
        </div>
      </div>
      <div class="hero-photo rise rise-2">
        <div class="arch"><img src="${site.images.church}" alt="${esc(h.photoAlt)}" width="1600" height="1200"></div>
        <a class="badge" href="#mappa"><span class="dot">${icon('pin')}</span>${esc(site.address)}</a>
      </div>
    </div>
    ${curve()}
  </section>`;

  const about = `
  <section class="section" id="chi-siamo">
    <div class="container about-grid">
      <article class="card reveal">
        <span class="card-icon">${icon('heart')}</span>
        <h2>${esc(h.about.title)}</h2>
        <p>${esc(h.about.text)}</p>
      </article>
      <article class="card card-purpose reveal" id="Scopul">
        ${branch(ctx, 'leaf-deco')}
        <span class="card-icon">${icon('target')}</span>
        <h2>${esc(h.purpose.title)}</h2>
        <p>${esc(h.purpose.text)}</p>
        <blockquote>“ ${esc(h.purpose.quote)} ”<cite>${esc(h.purpose.quoteRef)}</cite></blockquote>
      </article>
    </div>
  </section>`;

  const schedule = `
  <section class="section section-alt" id="eventi">
    <div class="container">
      ${sectionHead(h.schedule.kicker, h.schedule.title)}
      <ul class="schedule">
        ${join(site.schedule, (s, i) => {
          const item = h.schedule.items[s.id];
          return `
          <li class="schedule-item reveal" ${delay(i)}>
            <div class="schedule-top"><span class="schedule-icon">${icon(s.icon)}</span></div>
            <h3>${esc(item.day)}</h3>
            <div class="schedule-time">${icon('clock')}${esc(s.time)}</div>
            <p>${esc(item.text)}</p>
          </li>`;
        })}
      </ul>
    </div>
  </section>`;

  const map = `
  <section class="section" id="mappa">
    <div class="container">
      <div class="card map-card reveal">
        <div class="map-info">
          <span class="kicker">${icon('leaf')}${esc(h.map.kicker)}</span>
          <h2>${esc(h.map.title)}</h2>
          <p class="address">${icon('pin')}<span>${esc(site.address)}</span></p>
          <a class="btn btn-olive" href="${site.mapLink}" target="_blank" rel="noopener" style="align-self:flex-start">Google Maps ${icon('arrow')}</a>
        </div>
        <div class="map-frame">
          <iframe src="${site.mapEmbed}" title="Google Maps — ${esc(site.address)}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>`;

  return { title: '', content: hero + about + schedule + map };
}
