/**
 * MODEL — dati comuni a tutte le lingue.
 * Per cambiare un contatto, un orario o aggiungere una foto si modifica SOLO questo file
 * (o i file delle lingue ro.js / it.js per i testi).
 */
export const site = {
  contacts: {
    churchEmail: 'bise.maslinul.oderzo@gmail.com',
    pastorEmail: 'Gagea.traian66@gmail.com',
    phone: '+39 349 582 1292',
  },

  address: 'Oderzo - Via Padova 6',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.785378401947!2d12.500172460492111!3d45.799826588008386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477942d28e5741e1%3A0x7ca80308b7269de4!2sVia%20Padova%2C%206%2C%2031046%20Oderzo%20TV!5e0!3m2!1sit!2sit!4v1758553765176!5m2!1sit!2sit',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Via+Padova+6,+31046+Oderzo+TV',

  images: {
    logo: 'immagini/logo-porumbel.png',
    church: 'immagini/biserica.jpeg',
    branchLight: 'immagini/ramo-ulivo-chiaro.svg',
    branch: 'immagini/ramo-ulivo.svg',
  },

  /** Lingue disponibili: il suffisso viene aggiunto al nome del file (index.html / index_it.html). */
  languages: {
    ro: { suffix: '', label: 'RO' },
    it: { suffix: '_it', label: 'IT' },
  },

  /** Voci del menu, nell'ordine in cui compaiono. Le etichette sono nei file delle lingue. */
  menu: ['index', 'fede', 'foto', 'contatti'],

  /** Orari degli incontri: i nomi dei giorni e le descrizioni sono nei file delle lingue. */
  schedule: [
    { id: 'joi', icon: 'moon', time: '19:30 - 21:00' },
    { id: 'duminicaDimineata', icon: 'sun', time: '10:00 - 12:00' },
    { id: 'duminicaSeara', icon: 'moon', time: '18:00 - 20:00' },
  ],

  /**
   * Galleria foto. Per aggiungere una foto: metti il file in immagini/foto/ (nome senza spazi)
   * e aggiungi una riga qui sotto. Categorie: '2024', '2023', 'craciun', 'paste'.
   * Esempio:
   *   { src: 'immagini/foto/craciun-2024.jpg', alt: 'Crăciun 2024', categories: ['craciun', '2024'] },
   */
  photos: [],
};

/** Costruisce il nome del file di una pagina in una lingua: ('fede', 'it') → 'fede_it.html' */
export const pageUrl = (page, lang) => `${page}${site.languages[lang].suffix}.html`;

/** Numero di telefono in formato link: '+39 349 582 1292' → 'tel:+393495821292' */
export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;
