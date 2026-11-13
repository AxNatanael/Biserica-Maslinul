# Biserica-Maslinul

Sito web della chiesa Maslinul di Oderzo, creato da Natanael Alexi e Razvan Cristian Dan.
Grafica a tema **albero d'ulivo**, codice organizzato secondo il modello **MVC** (Model – View – Controller).

Il sito è fatto solo di file statici (HTML, CSS, JavaScript): GitHub Pages lo pubblica così com'è,
senza installare nulla e senza fasi di build.

## Come funziona

Ogni pagina HTML è un guscio di poche righe che dice soltanto **quale pagina** e **in quale lingua**:

```html
<body data-page="fede" data-lang="it">
```

Il resto (menu, footer, contenuti) viene costruito dal JavaScript, scritto **una sola volta**:

```
sito-maslinul/
├── index.html, index_it.html, fede.html, …   ← gusci delle pagine (stessi indirizzi del vecchio sito)
├── 404.html                                  ← pagina "non trovata" di GitHub Pages
├── css/style.css                             ← tutta la grafica (colori in cima al file)
├── immagini/                                 ← logo, foto, rami d'ulivo
└── js/
    ├── main.js                    ← punto di ingresso (l'unico script caricato dalle pagine)
    ├── model/                     ← M: i DATI
    │   ├── site.js                   contatti, indirizzo, mappa, orari, foto, voci del menu
    │   ├── ro.js                     tutti i testi in romeno
    │   ├── it.js                     tutti i testi in italiano
    │   └── index.js                  accesso unico ai dati
    ├── view/                      ← V: l'ASPETTO (modelli HTML)
    │   ├── layout.js                 header + menu + footer, comuni a tutte le pagine
    │   ├── components.js             pezzi riutilizzabili (intestazioni, sezioni…)
    │   ├── helpers.js                icone e funzioni di supporto
    │   └── pages/                    un file per pagina: home, fede, foto, contatti, …
    └── controller/                ← C: la LOGICA
        ├── app.js                    sceglie pagina e lingua, unisce Model e View
        └── behaviors.js              menu mobile, animazioni, filtri galleria, lightbox
```

## Modifiche frequenti

| Cosa vuoi cambiare | Dove |
|---|---|
| Un testo (in una lingua) | `js/model/ro.js` o `js/model/it.js` |
| Email, telefono, indirizzo, mappa | `js/model/site.js` → `contacts`, `address`, `mapEmbed` |
| Un orario degli incontri | `js/model/site.js` → `schedule` (nomi dei giorni nei file lingua) |
| Una voce del menu | `js/model/site.js` → `menu` (etichette nei file lingua → `menu`) |
| Menu o footer di tutto il sito | `js/view/layout.js` |
| Colori e grafica | `css/style.css` |

### Aggiungere foto alla galleria

1. Metti le foto in `immagini/foto/` (nomi senza spazi, es. `craciun-2024.jpg`).
2. In `js/model/site.js` aggiungi una riga in `photos`:

```js
photos: [
  { src: 'immagini/foto/craciun-2024.jpg', alt: 'Crăciun 2024', categories: ['craciun', '2024'] },
],
```

Il messaggio "nessuna foto" sparisce da solo. Categorie: `2024`, `2023`, `craciun`, `paste`.

### Aggiungere una pagina nuova

1. Crea `js/view/pages/nomepagina.js` (copia `storicoChiesa.js` come esempio).
2. Registrala in `js/view/pages/index.js`.
3. Aggiungi i testi in `ro.js` e `it.js`.
4. Crea i gusci `nomepagina.html` e `nomepagina_it.html` (copia `fede.html` e cambia `data-page`).
5. Se deve comparire nel menu, aggiungila a `menu` in `site.js` e nei file lingua.

### Attivare la pagina "Storico della chiesa"

Scrivi il testo in `storicoChiesa.text` dentro `ro.js` / `it.js` e aggiungi `'storicoChiesa'`
a `menu` in `site.js` (con l'etichetta in `menu` dei file lingua).

## Pubblicare su GitHub Pages

1. Copia **tutto il contenuto** di questa cartella (compreso il file nascosto `.nojekyll`)
   nella radice del repository, sostituendo i vecchi file.
2. Fai commit e push sul branch pubblicato (di solito `main`).
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, cartella `/ (root)`.

Note su GitHub Pages:
- I nomi dei file sono **sensibili a maiuscole/minuscole** (`Foto.jpg` ≠ `foto.jpg`) ed è meglio evitare gli spazi.
- Tutti i percorsi sono relativi: funziona sia su `utente.github.io/repo/` sia con un dominio personalizzato.
- `.nojekyll` fa pubblicare i file così come sono, senza l'elaborazione Jekyll.
- Gli indirizzi delle pagine sono gli stessi di prima (`index.html`, `fede_it.html`, …): i link già condivisi funzionano.

## Provare il sito in locale

I moduli JavaScript **non funzionano aprendo il file con doppio clic** (`file://`): il browser li blocca.
Serve un piccolo server locale, per esempio:

```bash
npx serve .
```

oppure, in Visual Studio Code, l'estensione **Live Server**. Online su GitHub Pages funziona sempre.
