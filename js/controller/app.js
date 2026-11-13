/**
 * CONTROLLER — decide cosa mostrare.
 * 1. legge pagina e lingua dal <body data-page="…" data-lang="…">
 * 2. chiede i dati al Model
 * 3. passa i dati alla View e inserisce l'HTML nella pagina
 * 4. attiva i comportamenti interattivi
 */
import { getModel } from '../model/index.js';
import { pages } from '../view/pages/index.js';
import { layout } from '../view/layout.js';
import { initBehaviors } from './behaviors.js';

export function start() {
  const root = document.body;
  const { lang, t, site } = getModel(root.dataset.lang);
  const page = pages[root.dataset.page] ? root.dataset.page : 'notFound';

  const ctx = {
    lang, t, site, page,
    // pagina verso cui punta il selettore di lingua (la 404 rimanda alla home)
    langTarget: page === 'notFound' ? 'index' : page,
  };

  const view = pages[page](ctx);

  document.documentElement.lang = lang;
  document.title = view.title ? `${view.title} · Biserica Maslinul` : 'Biserica Maslinul';
  setMeta('description', t.description);

  root.innerHTML = layout(ctx, view.content);
  initBehaviors();

  // se l'indirizzo contiene un'ancora (es. index.html#mappa) ci si sposta lì dopo il disegno
  // (ripetuto a caricamento completo, quando immagini e caratteri hanno la loro dimensione finale)
  if (location.hash) {
    scrollToHash();
    if (document.readyState !== 'complete') window.addEventListener('load', scrollToHash, { once: true });
  }
}

function scrollToHash() {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) target.scrollIntoView({ behavior: 'instant' });
}

function setMeta(name, content) {
  let m = document.querySelector(`meta[name="${name}"]`);
  if (!m) {
    m = document.createElement('meta');
    m.name = name;
    document.head.appendChild(m);
  }
  m.content = content;
}
