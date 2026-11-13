/** VIEW — Pagina 404 (mostrata da GitHub Pages per gli indirizzi inesistenti). */
import { esc } from '../helpers.js';
import { pageHero, section } from '../components.js';
import { getModel, pageUrl } from '../../model/index.js';

export default function notFound(ctx) {
  const other = getModel(ctx.lang === 'ro' ? 'it' : 'ro');
  const box = `
  <div class="card" style="text-align:center">
    <p>${esc(ctx.t.notFound.text)}</p>
    <p lang="${other.lang}">${esc(other.t.notFound.text)}</p>
    <p style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px">
      <a class="btn btn-olive" href="${pageUrl('index', 'ro')}" lang="ro">Home (RO)</a>
      <a class="btn btn-olive" href="${pageUrl('index', 'it')}" lang="it">Home (IT)</a>
    </p>
  </div>`;
  return { title: '404', content: pageHero(ctx, ctx.t.notFound.title) + section(box) };
}
