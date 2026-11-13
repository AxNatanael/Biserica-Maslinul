/** MODEL — punto di accesso unico ai dati. */
import ro from './ro.js';
import it from './it.js';
import { site, pageUrl, telHref } from './site.js';

const texts = { ro, it };

/** Restituisce testi + dati comuni per una lingua (se la lingua non esiste usa il romeno). */
export function getModel(lang) {
  const l = texts[lang] ? lang : 'ro';
  return { lang: l, t: texts[l], site };
}

export { site, pageUrl, telHref };
