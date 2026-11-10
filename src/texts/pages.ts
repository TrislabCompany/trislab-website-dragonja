// The texts of About and Visit us, per language. As on the home page, every
// fact cites its source (src/texts/home.ts `sources`), and a fact that can't
// be checked against a source is left out. Advice that is not a fact (where to
// park, what to bring) has no source. Slovenian and English are the
// originals; Croatian, Italian and German wait for a native speaker's review.
import type { Lang } from "../i18n";
import type { PhotoId } from "../lib/photos";
import type { SourceId } from "./home";

export interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  sources: SourceId[];
  photo: PhotoId;
}

export interface AboutTexts {
  title: string;
  lead: string;
  sections: Section[];
  sourcesLabel: string;
}

interface Way {
  title: string;
  text: string;
  source?: SourceId;
}

export interface VisitTexts {
  title: string;
  lead: string;
  getting: { title: string; car: Way; bike: Way; foot: Way };
  tips: { title: string; items: Way[] };
  map: {
    title: string;
    lead: string;
    label: string;
    scroll: string;
    legend: string;
    river: string;
    trail: string;
    border: string;
    roads: string;
    open: string;
  };
  gallery: { title: string; lead: string; open: string };
  contact: { title: string; text: string };
  sourceLabel: string;
}

// Section photos are chosen so that no photo shows twice on a page.
const aboutPhotos = { river: "river-mouth", mills: "mazurin-mill", hamlets: "stone-house", border: "border-view" } as const;

export const about: Record<Lang, AboutTexts> = {
  sl: {
    title: "O dolini",
    lead: "Dolina Dragonje povezuje morje, flišno Istro in Kras. Reka, mlini, zaselki in meja: kratka zgodba doline.",
    sourcesLabel: "Viri",
    sections: [
      {
        id: "river",
        title: "Reka",
        photo: aboutPhotos.river,
        paragraphs: [
          "Dragonja je dolga 30 km. Izvira pod naseljem Poletiči na vzhodnih pobočjih Šavrinskega gričevja in se pri Sečoveljskih solinah izliva v Piranski zaliv. Njeno porečje obsega 95,6 km².",
          "Ima 18 desnih in 13 levih pritokov; najpomembnejša sta Rokava na desni in Argila na levi. Teče po flišu in se v sušnih poletjih spremeni v prodne struge.",
          "Nekoč je bila od izliva do Kaštela plovna za majhna plovila. V zgodovinskih virih se prvič omenja kot Argao.",
        ],
        sources: ["wikiSl", "wikiEn", "parks"],
      },
      {
        id: "mills",
        title: "Mlini in vrtovi",
        photo: aboutPhotos.mills,
        paragraphs: [
          "V dolini je nekoč delovalo približno 40 mlinov. Obnovljena sta Kodarinov mlin pri Koštaboni in Mazurinov pri Trseku.",
          "V začetku 20. stoletja je koprsko zaledje z dolino Dragonje oskrbovalo z zelenjavo in pridelki obalna mesta in sosednji Trst.",
        ],
        sources: ["parks", "mills"],
      },
      {
        id: "hamlets",
        title: "Vas in zaselki",
        photo: aboutPhotos.hamlets,
        paragraphs: [
          "Vas Dragonja je zrasla iz raztresenih hiš in zaselkov ob cesti Šmarje–Buje: Gočan, Križišče, Stena, Mlini, Rota, Pesjanci, Ruda, Slami in Vuki.",
          "V bližini vasi so našli ostanke rimske poselitve: rimsko opeko, zid, odkrit pri regulaciji reke, in žarni grob pri mostu čez Dragonjo.",
        ],
        sources: ["wikiVillage"],
      },
      {
        id: "border",
        title: "Meja",
        photo: aboutPhotos.border,
        paragraphs: [
          "Spodnji tok Dragonje je meja med Slovenijo in Hrvaško. Prehod Dragonja je bil eden glavnih prehodov iz slovenske v hrvaško Istro.",
          "Odkar je Hrvaška 1. januarja 2023 vstopila v schengensko območje, mejne kontrole na prehodu ni več.",
        ],
        sources: ["wikiSl", "wikiVillage", "wikiVillageSl"],
      },
    ],
  },
  en: {
    title: "About the valley",
    lead: "The Dragonja valley links the sea, flysch Istria and the Karst. The river, the mills, the hamlets and the border: the valley's story in short.",
    sourcesLabel: "Sources",
    sections: [
      {
        id: "river",
        title: "The river",
        photo: aboutPhotos.river,
        paragraphs: [
          "The Dragonja is 30 km long. It rises below the village of Poletiči on the eastern slopes of the Šavrin hills and flows into the Bay of Piran at the Sečovlje salt pans. Its catchment covers 95.6 km².",
          "It has 18 right-hand and 13 left-hand tributaries; the main ones are the Rokava on the right and the Argila on the left. It flows over flysch, and in dry summers it turns into beds of gravel.",
          "Small boats could once sail from its mouth up to Kaštel. The river is first recorded as Argao.",
        ],
        sources: ["wikiSl", "wikiEn", "parks"],
      },
      {
        id: "mills",
        title: "Mills and gardens",
        photo: aboutPhotos.mills,
        paragraphs: [
          "About 40 mills once worked in the valley. Two are restored: the Kodarin mill near Koštabona and the Mazurin mill at Trsek.",
          "In the early 20th century the hinterland of Koper, the Dragonja valley included, supplied the coastal towns and Trieste next door with vegetables and farm produce.",
        ],
        sources: ["parks", "mills"],
      },
      {
        id: "hamlets",
        title: "The village and its hamlets",
        photo: aboutPhotos.hamlets,
        paragraphs: [
          "The village of Dragonja grew from scattered houses and hamlets along the Šmarje–Buje road: Gočan, Križišče, Stena, Mlini, Rota, Pesjanci, Ruda, Slami and Vuki.",
          "Remains of Roman settlement have been found near the village: Roman brick, a wall uncovered when the river was regulated, and a cremation burial at the Dragonja bridge.",
        ],
        sources: ["wikiVillage"],
      },
      {
        id: "border",
        title: "The border",
        photo: aboutPhotos.border,
        paragraphs: [
          "The lower course of the Dragonja is the border between Slovenia and Croatia. The Dragonja crossing was one of the main crossings from Slovenian into Croatian Istria.",
          "Since Croatia joined the Schengen area on 1 January 2023, there are no more border checks at the crossing.",
        ],
        sources: ["wikiSl", "wikiVillage", "wikiVillageSl"],
      },
    ],
  },
  hr: {
    title: "O dolini",
    lead: "Dolina Dragonje povezuje more, flišnu Istru i Kras. Rijeka, mlinovi, zaseoci i granica: kratka priča o dolini.",
    sourcesLabel: "Izvori",
    sections: [
      {
        id: "river",
        title: "Rijeka",
        photo: aboutPhotos.river,
        paragraphs: [
          "Dragonja je duga 30 km. Izvire ispod naselja Poletiči na istočnim padinama Šavrinskog pobrđa i kod Sečoveljskih solana ulijeva se u Piranski zaljev. Njezin sliv obuhvaća 95,6 km².",
          "Ima 18 desnih i 13 lijevih pritoka; najvažniji su Rokava zdesna i Argila slijeva. Teče po flišu, a u sušnim ljetima pretvara se u šljunčana korita.",
          "Nekad je od ušća do Kaštela bila plovna za male brodice. Prvi put se spominje kao Argao.",
        ],
        sources: ["wikiSl", "wikiEn", "parks"],
      },
      {
        id: "mills",
        title: "Mlinovi i vrtovi",
        photo: aboutPhotos.mills,
        paragraphs: [
          "U dolini je nekad radilo oko 40 mlinova. Obnovljena su dva: Kodarinov mlin kod Koštabone i Mazurinov kod Trseka.",
          "Početkom 20. stoljeća koparsko zaleđe s dolinom Dragonje opskrbljivalo je povrćem i poljoprivrednim proizvodima obalne gradove i susjedni Trst.",
        ],
        sources: ["parks", "mills"],
      },
      {
        id: "hamlets",
        title: "Selo i zaseoci",
        photo: aboutPhotos.hamlets,
        paragraphs: [
          "Selo Dragonja nastalo je od raštrkanih kuća i zaselaka uz cestu Šmarje–Buje: Gočan, Križišče, Stena, Mlini, Rota, Pesjanci, Ruda, Slami i Vuki.",
          "U blizini sela pronađeni su ostaci rimskog naselja: rimska opeka, zid otkriven pri regulaciji rijeke i paljevinski grob kod mosta preko Dragonje.",
        ],
        sources: ["wikiVillage"],
      },
      {
        id: "border",
        title: "Granica",
        photo: aboutPhotos.border,
        paragraphs: [
          "Donji tok Dragonje granica je između Slovenije i Hrvatske. Prijelaz Dragonja bio je jedan od glavnih prijelaza iz slovenske u hrvatsku Istru.",
          "Otkako je Hrvatska 1. siječnja 2023. ušla u schengenski prostor, na prijelazu više nema granične kontrole.",
        ],
        sources: ["wikiSl", "wikiVillage", "wikiVillageSl"],
      },
    ],
  },
  it: {
    title: "La valle",
    lead: "La valle della Dragogna unisce il mare, l'Istria del flysch e il Carso. Il fiume, i mulini, le frazioni e il confine: la storia della valle in breve.",
    sourcesLabel: "Fonti",
    sections: [
      {
        id: "river",
        title: "Il fiume",
        photo: aboutPhotos.river,
        paragraphs: [
          "La Dragogna è lunga 30 km. Nasce sotto il paese di Poletiči, sui pendii orientali delle colline dei Savrini, e sfocia nella baia di Pirano presso le saline di Sicciole. Il suo bacino misura 95,6 km².",
          "Ha 18 affluenti di destra e 13 di sinistra; i principali sono la Rokava a destra e l'Argila a sinistra. Scorre sul flysch e nelle estati secche si trasforma in letti di ghiaia.",
          "Un tempo era navigabile per piccole barche dalla foce fino a Castelvenere (Kaštel). Il fiume è citato per la prima volta come Argao.",
        ],
        sources: ["wikiSl", "wikiEn", "parks"],
      },
      {
        id: "mills",
        title: "Mulini e orti",
        photo: aboutPhotos.mills,
        paragraphs: [
          "Un tempo nella valle lavoravano circa 40 mulini. Due sono stati restaurati: il mulino Kodarin vicino a Costabona e il mulino Mazurin a Trsek.",
          "All'inizio del Novecento l'entroterra di Capodistria, valle della Dragogna compresa, riforniva di verdura e prodotti agricoli le città della costa e la vicina Trieste.",
        ],
        sources: ["parks", "mills"],
      },
      {
        id: "hamlets",
        title: "Il paese e le frazioni",
        photo: aboutPhotos.hamlets,
        paragraphs: [
          "Il paese di Dragogna è nato da case sparse e frazioni lungo la strada Šmarje–Buie: Gočan, Križišče, Stena, Mlini, Rota, Pesjanci, Ruda, Slami e Vuki.",
          "Vicino al paese sono stati trovati resti di un insediamento romano: mattoni romani, un muro scoperto durante la regolazione del fiume e una sepoltura a cremazione presso il ponte sulla Dragogna.",
        ],
        sources: ["wikiVillage"],
      },
      {
        id: "border",
        title: "Il confine",
        photo: aboutPhotos.border,
        paragraphs: [
          "Il corso inferiore della Dragogna è il confine tra la Slovenia e la Croazia. Il valico di Dragogna era uno dei principali passaggi dall'Istria slovena a quella croata.",
          "Da quando la Croazia è entrata nell'area Schengen, il 1° gennaio 2023, al valico non ci sono più controlli di frontiera.",
        ],
        sources: ["wikiSl", "wikiVillage", "wikiVillageSl"],
      },
    ],
  },
  de: {
    title: "Über das Tal",
    lead: "Das Dragonja-Tal verbindet das Meer, das Flysch-Istrien und den Karst. Der Fluss, die Mühlen, die Weiler und die Grenze: die Geschichte des Tals in Kürze.",
    sourcesLabel: "Quellen",
    sections: [
      {
        id: "river",
        title: "Der Fluss",
        photo: aboutPhotos.river,
        paragraphs: [
          "Die Dragonja ist 30 km lang. Sie entspringt unterhalb des Dorfes Poletiči an den Osthängen des Šavrin-Hügellands und mündet bei den Salinen von Sečovlje in die Bucht von Piran. Ihr Einzugsgebiet umfasst 95,6 km².",
          "Sie hat 18 rechte und 13 linke Zuflüsse; die wichtigsten sind die Rokava rechts und die Argila links. Sie fließt über Flysch und wird in trockenen Sommern zu Kiesbetten.",
          "Einst war sie von der Mündung bis Kaštel für kleine Boote schiffbar. Erstmals erwähnt wird der Fluss als Argao.",
        ],
        sources: ["wikiSl", "wikiEn", "parks"],
      },
      {
        id: "mills",
        title: "Mühlen und Gärten",
        photo: aboutPhotos.mills,
        paragraphs: [
          "Im Tal arbeiteten einst etwa 40 Mühlen. Zwei sind restauriert: die Kodarin-Mühle bei Koštabona und die Mazurin-Mühle bei Trsek.",
          "Anfang des 20. Jahrhunderts versorgte das Hinterland von Koper, das Dragonja-Tal eingeschlossen, die Küstenstädte und das benachbarte Triest mit Gemüse und Feldfrüchten.",
        ],
        sources: ["parks", "mills"],
      },
      {
        id: "hamlets",
        title: "Das Dorf und seine Weiler",
        photo: aboutPhotos.hamlets,
        paragraphs: [
          "Das Dorf Dragonja entstand aus verstreuten Häusern und Weilern an der Straße Šmarje–Buje: Gočan, Križišče, Stena, Mlini, Rota, Pesjanci, Ruda, Slami und Vuki.",
          "Nahe dem Dorf wurden Reste einer römischen Siedlung gefunden: römische Ziegel, eine bei der Flussregulierung freigelegte Mauer und ein Brandgrab an der Dragonja-Brücke.",
        ],
        sources: ["wikiVillage"],
      },
      {
        id: "border",
        title: "Die Grenze",
        photo: aboutPhotos.border,
        paragraphs: [
          "Der Unterlauf der Dragonja ist die Grenze zwischen Slowenien und Kroatien. Der Übergang Dragonja war einer der wichtigsten Übergänge vom slowenischen ins kroatische Istrien.",
          "Seit Kroatien am 1. Januar 2023 dem Schengen-Raum beigetreten ist, gibt es am Übergang keine Grenzkontrollen mehr.",
        ],
        sources: ["wikiSl", "wikiVillage", "wikiVillageSl"],
      },
    ],
  },
};

export const visit: Record<Lang, VisitTexts> = {
  sl: {
    title: "Obisk",
    lead: "Kako priti v dolino, kje pustiti avto, kdaj priti in kaj vedeti pred potjo.",
    getting: {
      title: "Kako do nas",
      car: { title: "Z avtom", text: "Vas Dragonja leži ob cesti Šmarje–Buje, na desnem bregu reke, tik ob meji s Hrvaško.", source: "wikiVillage" },
      bike: { title: "S kolesom", text: "Parenzana, pot po trasi nekdanje železnice Trst–Poreč, vodi iz Sečovelj čez mejni prehod in skozi Dragonjo do Nove vasi.", source: "bikemap" },
      foot: { title: "Peš", text: "Iz Sečovelj vodi pot po robu doline z razgledi na soline do Nove vasi nad Dragonjo.", source: "portoroz" },
    },
    tips: {
      title: "Dobro je vedeti",
      items: [
        { title: "Parkiranje", text: "V dolini ni velikega parkirišča. Avto pustite v vaseh, kjer je parkiranje dovoljeno, nikoli na poljskih poteh ali pred vhodi na njive." },
        { title: "Meja", text: "Odkar je Hrvaška vstopila v schengensko območje, na prehodu Dragonja ni mejne kontrole.", source: "wikiVillageSl" },
        { title: "Soline", text: "Za obisk Krajinskega parka Sečoveljske soline potrebujete vstopnico. Voden ogled Lere traja najmanj uro in pol; skupine ga rezervirajo vnaprej.", source: "kpss" },
        { title: "Poletje", text: "Reka se poleti pogosto posuši. Vzemite vodo s seboj in za pohode izberite jutro ali večer." , source: "wikiEn" },
      ],
    },
    map: {
      title: "Zemljevid",
      lead: "Dolina od solin ob morju do izvirov pod Poletiči. Številke vodijo do znamenitosti.",
      label: "Zemljevid doline Dragonje z reko, cestami, mejo, Parenzano, vasmi in znamenitostmi",
      scroll: "Zemljevid, ki se pomika vstran",
      legend: "Znamenitosti na zemljevidu",
      river: "Dragonja in pritoki",
      trail: "Parenzana",
      border: "Državna meja",
      roads: "Ceste",
      open: "Odpri v OpenStreetMap",
    },
    gallery: { title: "Galerija", lead: "Dolina skozi oči fotografov. Za večjo sliko kliknite fotografijo.", open: "Odpri večjo sliko" },
    contact: { title: "Vprašanja?", text: "Pišite nam, z veseljem pomagamo pri načrtovanju obiska." },
    sourceLabel: "Vir",
  },
  en: {
    title: "Visit us",
    lead: "How to get to the valley, where to leave the car, when to come and what to know before you set out.",
    getting: {
      title: "Getting here",
      car: { title: "By car", text: "The village of Dragonja lies on the Šmarje–Buje road, on the right bank of the river, right on the border with Croatia.", source: "wikiVillage" },
      bike: { title: "By bike", text: "The Parenzana, a trail on the line of the old Trieste–Poreč railway, leads from Sečovlje over the border crossing and through Dragonja up to Nova vas.", source: "bikemap" },
      foot: { title: "On foot", text: "From Sečovlje a path follows the edge of the valley, with views over the salt pans, up to Nova vas nad Dragonjo.", source: "portoroz" },
    },
    tips: {
      title: "Good to know",
      items: [
        { title: "Parking", text: "There is no large car park in the valley. Leave the car in the villages where parking is allowed, never on field tracks or in front of field gates." },
        { title: "The border", text: "Since Croatia joined the Schengen area, there are no border checks at the Dragonja crossing.", source: "wikiVillageSl" },
        { title: "The salt pans", text: "A visit to the Sečovlje Salina Nature Park needs a ticket. A guided tour of Lera lasts at least an hour and a half; groups book it ahead.", source: "kpss" },
        { title: "Summer", text: "The river often dries up in summer. Bring water, and walk in the morning or the evening.", source: "wikiEn" },
      ],
    },
    map: {
      title: "Map",
      lead: "The valley from the salt pans by the sea to the springs below Poletiči. The numbers lead to the attractions.",
      label: "Map of the Dragonja valley with the river, roads, the border, the Parenzana, villages and attractions",
      scroll: "Map, scrolls sideways",
      legend: "Attractions on the map",
      river: "The Dragonja and its tributaries",
      trail: "The Parenzana",
      border: "State border",
      roads: "Roads",
      open: "Open in OpenStreetMap",
    },
    gallery: { title: "Gallery", lead: "The valley through photographers' eyes. Select a photo to see it larger.", open: "Open a larger image" },
    contact: { title: "Questions?", text: "Write to us; we are glad to help you plan your visit." },
    sourceLabel: "Source",
  },
  hr: {
    title: "Posjet",
    lead: "Kako doći u dolinu, gdje ostaviti automobil, kada doći i što znati prije puta.",
    getting: {
      title: "Kako do nas",
      car: { title: "Automobilom", text: "Selo Dragonja leži uz cestu Šmarje–Buje, na desnoj obali rijeke, tik uz granicu s Hrvatskom.", source: "wikiVillage" },
      bike: { title: "Biciklom", text: "Parenzana, staza po trasi nekadašnje željeznice Trst–Poreč, vodi iz Sečovelja preko graničnog prijelaza i kroz Dragonju do Nove vasi.", source: "bikemap" },
      foot: { title: "Pješice", text: "Iz Sečovelja staza prati rub doline, s pogledom na solane, do Nove vasi nad Dragonjom.", source: "portoroz" },
    },
    tips: {
      title: "Dobro je znati",
      items: [
        { title: "Parkiranje", text: "U dolini nema velikog parkirališta. Automobil ostavite u selima gdje je parkiranje dopušteno, nikad na poljskim putovima ili ispred ulaza u polja." },
        { title: "Granica", text: "Otkako je Hrvatska ušla u schengenski prostor, na prijelazu Dragonja nema granične kontrole.", source: "wikiVillageSl" },
        { title: "Solane", text: "Za posjet Parku prirode Sečoveljske solane potrebna je ulaznica. Vođeni obilazak Lere traje najmanje sat i pol; grupe ga rezerviraju unaprijed.", source: "kpss" },
        { title: "Ljeto", text: "Rijeka ljeti često presuši. Ponesite vodu, a za šetnje izaberite jutro ili večer.", source: "wikiEn" },
      ],
    },
    map: {
      title: "Karta",
      lead: "Dolina od solana uz more do izvora ispod Poletiča. Brojevi vode do znamenitosti.",
      label: "Karta doline Dragonje s rijekom, cestama, granicom, Parenzanom, selima i znamenitostima",
      scroll: "Karta, pomiče se vodoravno",
      legend: "Znamenitosti na karti",
      river: "Dragonja i pritoci",
      trail: "Parenzana",
      border: "Državna granica",
      roads: "Ceste",
      open: "Otvori u OpenStreetMapu",
    },
    gallery: { title: "Galerija", lead: "Dolina očima fotografa. Odaberite fotografiju za veći prikaz.", open: "Otvori veću sliku" },
    contact: { title: "Pitanja?", text: "Pišite nam; rado ćemo vam pomoći isplanirati posjet." },
    sourceLabel: "Izvor",
  },
  it: {
    title: "Visita",
    lead: "Come arrivare nella valle, dove lasciare l'auto, quando venire e cosa sapere prima di partire.",
    getting: {
      title: "Come arrivare",
      car: { title: "In auto", text: "Il paese di Dragogna si trova sulla strada Šmarje–Buie, sulla riva destra del fiume, proprio sul confine con la Croazia.", source: "wikiVillage" },
      bike: { title: "In bicicletta", text: "La Parenzana, un percorso sul tracciato della vecchia ferrovia Trieste–Parenzo, porta da Sicciole oltre il valico e attraverso Dragogna fino a Nova vas.", source: "bikemap" },
      foot: { title: "A piedi", text: "Da Sicciole un sentiero segue il ciglio della valle, con vista sulle saline, fino a Nova vas nad Dragonjo.", source: "portoroz" },
    },
    tips: {
      title: "Buono a sapersi",
      items: [
        { title: "Parcheggio", text: "Nella valle non c'è un grande parcheggio. Lasciate l'auto nei paesi dove la sosta è consentita, mai sulle strade di campagna o davanti agli accessi ai campi." },
        { title: "Il confine", text: "Da quando la Croazia è entrata nell'area Schengen, al valico di Dragogna non ci sono controlli di frontiera.", source: "wikiVillageSl" },
        { title: "Le saline", text: "Per visitare il Parco naturale delle Saline di Sicciole serve un biglietto. La visita guidata di Lera dura almeno un'ora e mezza; i gruppi la prenotano in anticipo.", source: "kpss" },
        { title: "L'estate", text: "D'estate il fiume spesso si prosciuga. Portate acqua e camminate la mattina o la sera.", source: "wikiEn" },
      ],
    },
    map: {
      title: "Mappa",
      lead: "La valle dalle saline sul mare alle sorgenti sotto Poletiči. I numeri portano ai luoghi da vedere.",
      label: "Mappa della valle della Dragogna con il fiume, le strade, il confine, la Parenzana, i paesi e i luoghi da vedere",
      scroll: "Mappa, scorre in orizzontale",
      legend: "I luoghi sulla mappa",
      river: "La Dragogna e i suoi affluenti",
      trail: "La Parenzana",
      border: "Confine di Stato",
      roads: "Strade",
      open: "Apri in OpenStreetMap",
    },
    gallery: { title: "Galleria", lead: "La valle con gli occhi dei fotografi. Selezionate una foto per vederla più grande.", open: "Apri un'immagine più grande" },
    contact: { title: "Domande?", text: "Scriveteci: vi aiutiamo volentieri a organizzare la visita." },
    sourceLabel: "Fonte",
  },
  de: {
    title: "Besuch",
    lead: "Wie Sie ins Tal kommen, wo Sie das Auto lassen, wann Sie kommen und was Sie vor dem Aufbruch wissen sollten.",
    getting: {
      title: "Anreise",
      car: { title: "Mit dem Auto", text: "Das Dorf Dragonja liegt an der Straße Šmarje–Buje, am rechten Flussufer, direkt an der Grenze zu Kroatien.", source: "wikiVillage" },
      bike: { title: "Mit dem Rad", text: "Die Parenzana, ein Weg auf der Trasse der alten Bahn Triest–Poreč, führt von Sečovlje über den Grenzübergang und durch Dragonja hinauf nach Nova vas.", source: "bikemap" },
      foot: { title: "Zu Fuß", text: "Von Sečovlje folgt ein Weg dem Talrand, mit Blick auf die Salinen, bis Nova vas nad Dragonjo.", source: "portoroz" },
    },
    tips: {
      title: "Gut zu wissen",
      items: [
        { title: "Parken", text: "Im Tal gibt es keinen großen Parkplatz. Lassen Sie das Auto in den Dörfern, wo Parken erlaubt ist, nie auf Feldwegen oder vor Feldeinfahrten." },
        { title: "Die Grenze", text: "Seit Kroatien dem Schengen-Raum beigetreten ist, gibt es am Übergang Dragonja keine Grenzkontrollen.", source: "wikiVillageSl" },
        { title: "Die Salinen", text: "Für den Besuch des Naturparks Salinen von Sečovlje braucht man eine Eintrittskarte. Eine Führung durch Lera dauert mindestens eineinhalb Stunden; Gruppen buchen sie im Voraus.", source: "kpss" },
        { title: "Sommer", text: "Im Sommer trocknet der Fluss oft aus. Nehmen Sie Wasser mit und wandern Sie morgens oder abends.", source: "wikiEn" },
      ],
    },
    map: {
      title: "Karte",
      lead: "Das Tal von den Salinen am Meer bis zu den Quellen unterhalb von Poletiči. Die Nummern führen zu den Ausflugszielen.",
      label: "Karte des Dragonja-Tals mit Fluss, Straßen, Grenze, Parenzana, Dörfern und Ausflugszielen",
      scroll: "Karte, seitlich verschiebbar",
      legend: "Ausflugsziele auf der Karte",
      river: "Die Dragonja und ihre Zuflüsse",
      trail: "Die Parenzana",
      border: "Staatsgrenze",
      roads: "Straßen",
      open: "In OpenStreetMap öffnen",
    },
    gallery: { title: "Galerie", lead: "Das Tal mit den Augen der Fotografen. Wählen Sie ein Foto, um es größer zu sehen.", open: "Größeres Bild öffnen" },
    contact: { title: "Fragen?", text: "Schreiben Sie uns; wir helfen Ihnen gern bei der Planung Ihres Besuchs." },
    sourceLabel: "Quelle",
  },
};

/** The gallery on Visit us: photos that show nowhere else on that page. */
export const galleryPhotos: PhotoId[] = [
  "valley-cascade",
  "river-flysch",
  "skrline",
  "river-mouth",
  "salina-flamingos",
  "stone-house",
  "labor",
  "sveti-peter",
];
