/** VIEW — Contatti. */
import { esc, icon, join } from '../helpers.js';
import { pageHero, section, delay } from '../components.js';
import { telHref } from '../../model/index.js';

export default function contatti(ctx) {
  const c = ctx.t.contatti;
  const data = ctx.site.contacts;

  const cards = [
    { icon: 'mail', label: c.churchEmail, value: data.churchEmail, href: `mailto:${data.churchEmail}` },
    { icon: 'user', label: c.pastorEmail, value: data.pastorEmail, href: `mailto:${data.pastorEmail}` },
    { icon: 'phone', label: c.phone, value: data.phone, href: telHref(data.phone) },
  ];

  const list = `<ul class="contact-grid">${join(cards, (card, i) => `
    <li class="reveal" ${delay(i)}>
      <a class="contact-card" href="${card.href}">
        <span class="schedule-icon">${icon(card.icon)}</span>
        <h3>${esc(card.label)}</h3>
        <span class="value">${esc(card.value)}</span>
      </a>
    </li>`)}</ul>`;

  return { title: c.title, content: pageHero(ctx, c.title) + section(list) };
}
