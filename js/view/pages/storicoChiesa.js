/** VIEW — Storico della chiesa (pagina non presente nel menu, come nel sito originale). */
import { esc } from '../helpers.js';
import { pageHero, section } from '../components.js';

export default function storicoChiesa(ctx) {
  const s = ctx.t.storicoChiesa;
  return { title: s.title, content: pageHero(ctx, s.title) + section(`<div class="card"><p>${esc(s.text)}</p></div>`) };
}
