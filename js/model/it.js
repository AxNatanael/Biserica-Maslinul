/** MODEL — testi in lingua italiana. */
export default {
  name: 'Chiesa Maslinul',
  description: 'Chiesa Pentecostale Maslinul di Oderzo — Via Padova 6. Orari degli incontri, testimonianza di fede e contatti.',
  copyright: '© 2025 Chiesa Pendecostale Maslinul. Tutti i diritti riservati',

  ui: {
    skip: 'Vai al contenuto',
    openMenu: 'Apri menu',
    close: 'Chiudi',
    noscript: 'Per vedere il sito attiva JavaScript nel browser.',
  },

  menu: {
    index: 'Home',
    fede: 'La nostra testimonianza',
    foto: 'Foto',
    contatti: 'Contatti',
  },

  home: {
    verseRef: '1 Corinzi 15 : 57 - 58',
    verse: 'Ma ringraziato sia Dio, che ci dà la vittoria per mezzo del nostro Signore Gesù Cristo. Perciò, fratelli miei carissimi, state saldi, incrollabili, sempre abbondanti nell\'opera del Signore, sapendo che la vostra fatica non è vana nel Signore.',
    photoAlt: 'La sala della Chiesa Maslinul a Oderzo',
    about: {
      title: 'Chi siamo ?',
      text: 'Siamo una comunità di credenti impegnati ogni giorno ad amare, seguire e onorare il Signore Gesù Cristo. La nostra testimonianza è che Egli è il Figlio di Dio, venuto a liberare l\'umanità dalla schiavitù del peccato e a offrire a tutti coloro che credono in Lui una vita nuova.',
    },
    purpose: {
      title: 'Lo scopo.',
      text: 'Adempiere il primo e più importante comandamento.',
      quote: 'Andate dunque e fate miei discepoli tutti i popoli',
      quoteRef: 'Matteo 28:19',
    },
    schedule: {
      kicker: 'Culto',
      title: 'Incontri durante la settimana',
      items: {
        joi: { day: 'Giovedì sera', text: 'Preghiera e messaggio biblico' },
        duminicaDimineata: { day: 'Domenica mattina', text: 'Culto' },
        duminicaSeara: { day: 'Domenica sera', text: 'Culto' },
      },
    },
    map: { kicker: 'Oderzo', title: 'Dove ci troviamo' },
  },

  fede: {
    title: 'Testimonianza di fede',
    items: [
      'Crediamo che la Bibbia o Sacra Scrittura sia la Parola infallibile di Dio e la nostra unica regola nella vita di fede.',
      'Crediamo in un solo Dio in tre persone: Padre, Figlio e Spirito Santo.',
      'Crediamo che in principio Dio creò i cieli e la terra.',
      'Crediamo che Dio abbia creato gli angeli.',
      'Crediamo che Dio abbia creato l\'uomo dalla polvere.',
      'Crediamo che il peccato sia entrato nel mondo a causa della disobbedienza dell\'uomo al comando di Dio.',
      'Crediamo che la grazia di Dio ha reso e rende possibile la salvezza dell\'uomo attraverso il sacrificio del Signore Gesù Cristo.',
      'Crediamo che la salvezza sia condizionata dalla fede, dal pentimento e dalla nuova nascita.',
      'Crediamo di avere il perdono di Dio come conseguenza dell\'aver ricevuto il Signore Gesù Cristo come Salvatore.',
      'Crediamo che la giustificazione del credente risieda nel sacrificio del Signore Gesù Cristo e che venga ricevuta mediante la fede, da Dio, insieme alla salvezza.',
      'Crediamo che il frutto dei credenti liberati dal peccato sia la santificazione.',
      'Crediamo nel rapporto diretto del credente con Dio, e la preghiera e il digiuno sono due dei modi più efficaci per avvicinarsi alla divinità.',
      'Crediamo che il battesimo in acqua, che viene impartito alle persone che credono e si sono convertite a Dio, debba essere eseguito mediante una singola immersione nel Nome del Padre, del Figlio e dello Spirito Santo.',
      'Crediamo nell\'istituzione della Cena del Signore per la Chiesa. La partecipazione alla Cena del Signore costituisce una proclamazione della morte del Signore Gesù Cristo.',
      'Crediamo che il Signore Gesù abbia istituito l\'atto della lavanda dei piedi.',
      'Crediamo nella promessa del battesimo nello Spirito Santo per tutti i credenti.',
      'Crediamo che l\'opera dello Spirito Santo si manifesti nei nove doni.',
      'Crediamo che sia la nuova nascita sia il battesimo nello Spirito Santo debbano essere seguiti dal frutto dello Spirito Santo.',
      'Crediamo nella guarigione divina.',
      'Crediamo nell\'esistenza della Chiesa di Dio fondata dal Signore Gesù Cristo come organismo unitario e vivente.',
      'Crediamo che il sacerdozio dell\'Antico Testamento sia stato sostituito nel Nuovo Testamento dai servizi spirituali ordinati nella Chiesa.',
      'Noi crediamo che gli operatori del Vangelo siano ordinati al ministero mediante l\'imposizione delle mani e la preghiera da parte dei ministri di Dio autorizzati a farlo.',
      'Crediamo che tutti i membri della Chiesa di Dio abbiano doveri e diritti.',
      'Crediamo che la famiglia, attraverso il matrimonio, sia un\'istituzione divina stabilita da Dio.',
      'Crediamo nell\'ordinanza della Chiesa riguardante la benedizione dei bambini.',
      'Crediamo che la generosità sia un dovere sacro per ogni credente.',
      'Crediamo nel dovere dei credenti di perseguire la semplicità nel vestire.',
      'Noi crediamo che la domenica sia il giorno del Signore.',
      'Crediamo che sia volontà di Dio che siamo leali allo Stato e alle autorità statali.',
      'Crediamo di avere il dovere di amare tutte le persone, indipendentemente dalla razza, dalla nazionalità o dal credo religioso.',
      'Crediamo nella seconda venuta del Signore Gesù Cristo e negli eventi escatologici che seguiranno.',
    ],
  },

  foto: {
    title: 'Galleria Foto',
    filters: { all: 'Tutto', 2024: '2024', 2023: '2023', craciun: 'Natale', paste: 'Pasqua' },
    empty: 'Momentaneamente non ci sono foto disponibili',
  },

  contatti: {
    title: 'Contatti della Chiesa',
    churchEmail: 'Email Chiesa',
    pastorEmail: 'Email Pastore',
    phone: 'Numero telefono Pastore',
  },

  storicoChiesa: {
    title: 'Breve Storico della chiesa',
    text: '',
  },

  notFound: {
    title: '404',
    text: 'Pagina non trovata.',
  },
};
