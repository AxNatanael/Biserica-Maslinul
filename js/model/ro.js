/** MODEL — testi in lingua română. */
export default {
  name: 'Biserica Maslinul',
  description: 'Biserica Penticostală Maslinul din Oderzo — Via Padova 6. Programul bisericii, mărturisirea de credință și contacte.',
  copyright: '© 2025 Biserica Penticostala Maslinul. Toate drepturile rezervate',

  ui: {
    skip: 'Sari la conținut',
    openMenu: 'Deschide meniul',
    close: 'Închide',
    noscript: 'Pentru a vedea site-ul, activați JavaScript în browser.',
  },

  menu: {
    index: 'Home',
    fede: 'Marturisirea noastra',
    foto: 'Foto',
    contatti: 'Contacte',
  },

  home: {
    verseRef: '1 Corinteni 15 : 57 - 58',
    verse: 'Dar mulţumiri fie aduse lui Dumnezeu, care ne dă biruinţa prin Domnul nostru Isus Hristos! De aceea, preaiubiţii mei fraţi, fiţi tari, neclintiţi, sporiţi totdeauna în lucrul Domnului, căci ştiţi că osteneala voastră în Domnul nu este zadarnică.',
    photoAlt: 'Sala Bisericii Maslinul din Oderzo',
    about: {
      title: 'Cine suntem',
      text: 'Suntem o comunitate de credincioși care ne angajăm in fiecare zi să Îl iubim, sa Îl  urmăm și să Îl cinstim pe Domnul Isus Cristos. Mărturisirea noastră este căci EL este Fiul lui Dumnezeu care a venit să izbăvească omenirea de sub robia păcatului și oferind tuturor celor care credem în EL , să trăim o viață nouă.',
    },
    purpose: {
      title: 'Scopul',
      text: 'Să împlinim prima și cea mai importantă poruncă.',
      quote: 'Duceți-vă și faceți ucenici din toate neamurile',
      quoteRef: 'Matei 28:19',
    },
    schedule: {
      kicker: 'Program',
      title: 'Programele Bisericii Măslinul Oderzo.',
      items: {
        joi: { day: 'Joi seara', text: 'Rugăciune și mesaj biblic' },
        duminicaDimineata: { day: 'Duminică dimineața', text: 'Program' },
        duminicaSeara: { day: 'Duminică seara', text: 'Program' },
      },
    },
    map: { kicker: 'Oderzo', title: 'Unde Suntem' },
  },

  fede: {
    title: 'Mărturisirea de credință',
    items: [
      'Credem că Biblia sau Sfânta Scriptură este Cuvântul infailibil al lui Dumnezeu și singura noastră regulă în viața de credință.',
      'Credem într-un singur Dumnezeu în trei persoane: Tatăl, Fiul și Duhul Sfânt.',
      'Credem că la început Dumnezeu a creat cerurile și pământul.',
      'Credem că Dumnezeu a creat îngerii.',
      'Credem că Dumnezeu a creat omul din țărână.',
      'Credem că păcatul a intrat în lume din cauza neascultării omului față de porunca lui Dumnezeu.',
      'Credem că harul lui Dumnezeu a făcut și face posibilă mântuirea omului prin jertfa Domnului Isus Hristos.',
      'Credem că mântuirea este condiționată de credință, pocăință și nașterea din nou.',
      'Credem că avem iertarea lui Dumnezeu ca urmare a primirii Domnului Isus Hristos ca Mântuitor.',
      'Credem că îndreptățirea credinciosului rezidă în jertfa Domnului Isus Hristos și că este primită prin credință, de la Dumnezeu, odată cu mântuirea.',
      'Credem că roada credincioșilor eliberați de păcat este sfințirea.',
      'Credem în relația directă a credinciosului cu Dumnezeu, iar rugăciunea și postul sunt două dintre cele mai eficiente moduri de a ne apropia de divinitate.',
      'Credem că botezul în apă, care este acordat persoanelor care cred și s-au întors la Dumnezeu, trebuie efectuat printr-o singură scufundare în Numele Tatălui, al Fiului și al Duhului Sfânt.',
      'Credem în instituirea Cinei Domnului pentru Biserică. Participarea la Cina Domnului constituie o proclamare a morții Domnului Isus Hristos.',
      'Credem că Domnul Isus a instituit actul spălării picioarelor.',
      'Credem în făgăduința botezului cu Duhul Sfânt pentru toți credincioșii.',
      'Credem că lucrarea Duhului Sfânt se manifestă prin cele nouă daruri.',
      'Credem că atât nașterea din nou, cât și botezul cu Duhul Sfânt trebuie să fie urmate de roada Duhului Sfânt.',
      'Credem în vindecarea divină.',
      'Credem în existența Bisericii lui Dumnezeu fondată de Domnul Isus Hristos ca organism unitar și viu.',
      'Credem că preoția Vechiului Testament a fost înlocuită în Noul Testament de slujbele duhovnicești rânduite în Biserică.',
      'Noi credem că lucrătorii Evangheliei sunt ordinați în slujbă prin punerea mâinilor și rugăciune de către slujitorii lui Dumnezeu autorizați să facă acest lucru.',
      'Credem că toți membrii Bisericii lui Dumnezeu au îndatoriri și drepturi.',
      'Credem că familia, prin căsătorie, este o instituție divină stabilită de Dumnezeu.',
      'Credem în rânduiala Bisericii privind binecuvântarea copiilor.',
      'Credem că dărnicia este o datorie sfântă pentru fiecare credincios.',
      'Credem în datoria credincioșilor de a urmări simplitatea în îmbrăcăminte.',
      'Credem că duminica este ziua Domnului.',
      'Credem că este voia lui Dumnezeu să fim loiali statului și autorităților statale.',
      'Credem că avem datoria de a iubi toți oamenii, indiferent de rasă, naționalitate sau credință religioasă.',
      'Credem în a doua venire a Domnului Isus Hristos și în evenimentele escatologice care vor urma.',
    ],
  },

  foto: {
    title: 'Galerie Foto',
    filters: { all: 'Toate', 2024: '2024', 2023: '2023', craciun: 'Crăciun', paste: 'Paște' },
    empty: 'Momentan nu sunt poze disponibile',
  },

  contatti: {
    title: 'Contacte a biserici',
    churchEmail: 'Email Biserica',
    pastorEmail: 'Email Pastor',
    phone: 'Numar telefon Pastor',
  },

  storicoChiesa: {
    title: 'Scurt istoric al biserici',
    text: '',
  },

  notFound: {
    title: '404',
    text: 'Pagina nu a fost găsită.',
  },
};
