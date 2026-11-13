/** VIEW — Mărturisirea de credință / Testimonianza di fede. */
import { esc, join } from '../helpers.js';
import { pageHero, section } from '../components.js';

export default function fede(ctx) {
  const f = ctx.t.fede;
  const list = `<ol class="faith-list">${join(f.items, (item) => `<li class="reveal">${esc(item)}</li>`)}</ol>`;
  return { title: f.title, content: pageHero(ctx, f.title) + section(list) };
}
