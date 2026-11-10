// The texts of the home page, per language. Every fact cites its source
// (`sources`); a fact that can't be checked against a source is left out.
// Slovenian and English are the originals; Croatian, Italian and German are
// translated from them and wait for a native speaker's review.
import type { Lang } from "../i18n";

export const sources = {
  wikiSl: { title: "Wikipedija: Dragonja", url: "https://sl.wikipedia.org/wiki/Dragonja" },
  wikiEn: { title: "Wikipedia: Dragonja", url: "https://en.wikipedia.org/wiki/Dragonja" },
  wikiVillage: { title: "Wikipedia: Dragonja, Piran", url: "https://en.wikipedia.org/wiki/Dragonja,_Piran" },
  wikiVillageSl: { title: "Wikipedija: Dragonja (Piran)", url: "https://sl.wikipedia.org/wiki/Dragonja,_Piran" },
  mills: { title: "Agencija 41: Mlini na reki Dragonji", url: "http://www.agencija41.si/mlini-na-reki-dragonji/" },
  kpss: { title: "Krajinski park Sečoveljske soline", url: "https://www.kpss.si/en/visiting" },
  parks: {
    title: "Naravni parki Slovenije",
    url: "https://naravniparkislovenije.si/en/sights/unprotected-areas",
  },
  bikemap: { title: "Bikemap", url: "https://www.bikemap.net/en/r/2173628" },
  portoroz: {
    title: "Portorož",
    url: "https://www.portoroz.si/sl/informacije/uporabne-informacije/blog/read/63805-skrivnosti-istrskih-vasi-in-poti-med-oljkami/",
  },
} as const;

export type SourceId = keyof typeof sources;

interface Step {
  title: string;
  text: string;
  source: SourceId;
}

export interface HomeTexts {
  hero: { eyebrow: string; title: string; lead: string; discover: string; visit: string };
  ways: { title: string; lead: string; nature: string; culture: string; activity: string };
  story: { eyebrow: string; title: string; steps: [Step, Step, Step, Step] };
  featured: { title: string; all: string };
  seasons: {
    title: string;
    lead: string;
    wet: { title: string; text: string };
    dry: { title: string; text: string };
    source: SourceId;
  };
  getting: {
    title: string;
    lead: string;
    car: Step;
    bike: Step;
    foot: Step;
    more: string;
  };
  sourceLabel: string;
}

const sl: HomeTexts = {
  hero: {
    eyebrow: "Slovenska Istra",
    title: "Dolina Dragonje",
    lead: "Reka, ki se poleti skrije, stari mlini, kamnite vasi in poti ob meji. Dolina, ki jo odkrijete počasi.",
    discover: "Odkrijte dolino",
    visit: "Načrtujte obisk",
  },
  ways: {
    title: "Kaj vas čaka",
    lead: "Med morjem, flišnimi griči in Krasom: izberite, kako boste spoznali dolino.",
    nature: "Tolmuni pod stenami fliša, oljčniki na terasah in soline ob izlivu.",
    culture: "Stari mlini, istrska kamnita gradnja in vasi na slemenih.",
    activity: "Peš in s kolesom po Parenzani in po robu doline.",
  },
  story: {
    eyebrow: "Zgodba doline",
    title: "Reka, mlini, zaselki in meja",
    steps: [
      {
        title: "Reka",
        text: "Dragonja je dolga približno 30 km. Izvira pod Poletiči v Šavrinskem gričevju in se pri Sečoveljskih solinah izliva v Piranski zaliv.",
        source: "wikiSl",
      },
      {
        title: "Mlini",
        text: "Ob reki in njenih pritokih je nekoč mlelo okoli 40 mlinov. Obnovljena sta Kodarinov mlin pri Koštaboni in Mazurinov pri Trseku.",
        source: "mills",
      },
      {
        title: "Zaselki",
        text: "Vas Dragonja je zrasla iz raztresenih zaselkov ob cesti Šmarje–Buje, med njimi Gočan, Križišče, Stena, Mlini in Rota.",
        source: "wikiVillage",
      },
      {
        title: "Meja",
        text: "Spodnji tok reke je meja med Slovenijo in Hrvaško. Vas leži na desnem bregu, tik ob meji.",
        source: "wikiSl",
      },
    ],
  },
  featured: { title: "Ne smete zamuditi", all: "Vse znamenitosti" },
  seasons: {
    title: "Kdaj priti",
    lead: "Dragonja teče po flišu in se poleti pogosto posuši.",
    wet: {
      title: "Od jeseni do pomladi",
      text: "Reka teče, tolmuni so polni in poti ob strugi prijetno hladne. Pravi čas za pohode po dolini.",
    },
    dry: {
      title: "Poleti",
      text: "V strugi ostanejo gole plošče fliša. Takrat obiščite soline ob izlivu in vasi na slemenih, v senci oljk.",
    },
    source: "wikiEn",
  },
  getting: {
    title: "Kako do nas",
    lead: "Dragonja leži v občini Piran, tik ob meji s Hrvaško.",
    car: {
      title: "Z avtom",
      text: "Vas leži na desnem bregu reke, ob meji. Do vasi na slemenih vodijo ozke ceste.",
      source: "wikiVillage",
    },
    bike: {
      title: "S kolesom",
      text: "S Parenzane, nekdanje ozkotirne železnice, vodi kolesarska pot čez Dragonjo do Nove vasi.",
      source: "bikemap",
    },
    foot: {
      title: "Peš",
      text: "Iz Sečovelj vodi sprehajalna pot po robu doline z razgledi na soline.",
      source: "portoroz",
    },
    more: "Zemljevid in nasveti za obisk",
  },
  sourceLabel: "Vir",
};

const en: HomeTexts = {
  hero: {
    eyebrow: "Slovenian Istria",
    title: "The Dragonja valley",
    lead: "A river that hides in summer, old mills, stone villages and trails along the border. A valley to discover slowly.",
    discover: "Discover the valley",
    visit: "Plan your visit",
  },
  ways: {
    title: "Find your way in",
    lead: "Between the sea, the flysch hills and the Karst: choose how you meet the valley.",
    nature: "Pools below flysch cliffs, terraced olive groves and salt pans at the river mouth.",
    culture: "Old mills, Istrian stone houses and villages on the ridges.",
    activity: "On foot and by bike, on the Parenzana and along the valley's edge.",
  },
  story: {
    eyebrow: "The story of the valley",
    title: "A river, its mills, the hamlets and the border",
    steps: [
      {
        title: "The river",
        text: "The Dragonja is about 30 km long. It rises below Poletiči in the Šavrin hills and flows into the Bay of Piran at the Sečovlje salt pans.",
        source: "wikiSl",
      },
      {
        title: "The mills",
        text: "About 40 mills once worked along the river and its streams. Two are restored: the Kodarin mill near Koštabona and the Mazurin mill at Trsek.",
        source: "mills",
      },
      {
        title: "The hamlets",
        text: "The village of Dragonja grew from scattered hamlets along the Šmarje–Buje road, among them Gočan, Križišče, Stena, Mlini and Rota.",
        source: "wikiVillage",
      },
      {
        title: "The border",
        text: "The lower course of the river is the border between Slovenia and Croatia. The village lies on its right bank, right on the border.",
        source: "wikiSl",
      },
    ],
  },
  featured: { title: "Not to be missed", all: "All attractions" },
  seasons: {
    title: "When to come",
    lead: "The Dragonja flows over flysch and often dries up in summer.",
    wet: {
      title: "Autumn to spring",
      text: "The river flows, the pools are full and the paths along the bed are cool. The time to walk the valley.",
    },
    dry: {
      title: "Summer",
      text: "Bare slabs of flysch are left in the bed. Visit the salt pans at the mouth and the ridge villages, in the shade of the olives.",
    },
    source: "wikiEn",
  },
  getting: {
    title: "How to get here",
    lead: "Dragonja lies in the municipality of Piran, right on the border with Croatia.",
    car: {
      title: "By car",
      text: "The village lies on the right bank of the river, on the border. Narrow roads lead up to the ridge villages.",
      source: "wikiVillage",
    },
    bike: {
      title: "By bike",
      text: "From the Parenzana, a former narrow-gauge railway, a cycle route leads through Dragonja up to Nova vas.",
      source: "bikemap",
    },
    foot: {
      title: "On foot",
      text: "From Sečovlje a path follows the edge of the valley, with views over the salt pans.",
      source: "portoroz",
    },
    more: "Map and tips for your visit",
  },
  sourceLabel: "Source",
};

const hr: HomeTexts = {
  hero: {
    eyebrow: "Slovenska Istra",
    title: "Dolina Dragonje",
    lead: "Rijeka koja se ljeti skriva, stari mlinovi, kamena sela i staze uz granicu. Dolina koju otkrivate polako.",
    discover: "Otkrijte dolinu",
    visit: "Planirajte posjet",
  },
  ways: {
    title: "Što vas čeka",
    lead: "Između mora, flišnih brežuljaka i Krasa: odaberite kako ćete upoznati dolinu.",
    nature: "Viri ispod stijena fliša, maslinici na terasama i solane na ušću.",
    culture: "Stari mlinovi, istarska kamena gradnja i sela na hrptovima.",
    activity: "Pješice i biciklom po Parenzani i rubom doline.",
  },
  story: {
    eyebrow: "Priča doline",
    title: "Rijeka, mlinovi, zaseoci i granica",
    steps: [
      {
        title: "Rijeka",
        text: "Dragonja je duga oko 30 km. Izvire ispod Poletiča u Šavrinskom pobrđu i kod Sečoveljskih solana ulijeva se u Piranski zaljev.",
        source: "wikiSl",
      },
      {
        title: "Mlinovi",
        text: "Uz rijeku i njezine pritoke nekoć je mljelo oko 40 mlinova. Obnovljena su dva: Kodarinov mlin kod Koštabone i Mazurinov kod Trseka.",
        source: "mills",
      },
      {
        title: "Zaseoci",
        text: "Selo Dragonja nastalo je od raštrkanih zaselaka uz cestu Šmarje–Buje, među njima Gočan, Križišče, Stena, Mlini i Rota.",
        source: "wikiVillage",
      },
      {
        title: "Granica",
        text: "Donji tok rijeke granica je između Slovenije i Hrvatske. Selo leži na desnoj obali, tik uz granicu.",
        source: "wikiSl",
      },
    ],
  },
  featured: { title: "Ne propustite", all: "Sve znamenitosti" },
  seasons: {
    title: "Kada doći",
    lead: "Dragonja teče po flišu i ljeti često presuši.",
    wet: {
      title: "Od jeseni do proljeća",
      text: "Rijeka teče, viri su puni, a staze uz korito ugodno svježe. Pravo vrijeme za šetnje dolinom.",
    },
    dry: {
      title: "Ljeti",
      text: "U koritu ostaju gole ploče fliša. Tada posjetite solane na ušću i sela na hrptovima, u hladu maslina.",
    },
    source: "wikiEn",
  },
  getting: {
    title: "Kako doći",
    lead: "Dragonja se nalazi u općini Piran, tik uz granicu s Hrvatskom.",
    car: {
      title: "Automobilom",
      text: "Selo leži na desnoj obali rijeke, uz granicu. Do sela na hrptovima vode uske ceste.",
      source: "wikiVillage",
    },
    bike: {
      title: "Biciklom",
      text: "S Parenzane, nekadašnje uskotračne željeznice, biciklistička ruta vodi kroz Dragonju do Nove vasi.",
      source: "bikemap",
    },
    foot: {
      title: "Pješice",
      text: "Iz Sečovelja staza vodi rubom doline s pogledom na solane.",
      source: "portoroz",
    },
    more: "Karta i savjeti za posjet",
  },
  sourceLabel: "Izvor",
};

const it: HomeTexts = {
  hero: {
    eyebrow: "Istria slovena",
    title: "La valle della Dragogna",
    lead: "Un fiume che d'estate si nasconde, antichi mulini, paesi di pietra e sentieri lungo il confine. Una valle da scoprire con calma.",
    discover: "Scoprite la valle",
    visit: "Pianificate la visita",
  },
  ways: {
    title: "Cosa vi aspetta",
    lead: "Tra il mare, le colline di flysch e il Carso: scegliete come conoscere la valle.",
    nature: "Pozze sotto pareti di flysch, uliveti a terrazze e saline alla foce.",
    culture: "Antichi mulini, case istriane in pietra e paesi sui crinali.",
    activity: "A piedi e in bicicletta, sulla Parenzana e lungo il bordo della valle.",
  },
  story: {
    eyebrow: "La storia della valle",
    title: "Il fiume, i mulini, le frazioni e il confine",
    steps: [
      {
        title: "Il fiume",
        text: "La Dragogna è lunga circa 30 km. Nasce sotto Poletiči, nelle colline dei Savrini, e sfocia nella baia di Pirano presso le saline di Sicciole.",
        source: "wikiSl",
      },
      {
        title: "I mulini",
        text: "Lungo il fiume e i suoi affluenti lavoravano un tempo circa 40 mulini. Due sono stati restaurati: il mulino Kodarin vicino a Costabona e il mulino Mazurin a Trsek.",
        source: "mills",
      },
      {
        title: "Le frazioni",
        text: "Il paese di Dragogna è nato da frazioni sparse lungo la strada Šmarje–Buie, tra cui Gočan, Križišče, Stena, Mlini e Rota.",
        source: "wikiVillage",
      },
      {
        title: "Il confine",
        text: "Il corso inferiore del fiume segna il confine tra Slovenia e Croazia. Il paese si trova sulla riva destra, proprio sul confine.",
        source: "wikiSl",
      },
    ],
  },
  featured: { title: "Da non perdere", all: "Tutte le attrazioni" },
  seasons: {
    title: "Quando venire",
    lead: "La Dragogna scorre sul flysch e d'estate spesso si prosciuga.",
    wet: {
      title: "Dall'autunno alla primavera",
      text: "Il fiume scorre, le pozze sono piene e i sentieri lungo il letto sono freschi. Il momento giusto per camminare nella valle.",
    },
    dry: {
      title: "D'estate",
      text: "Nel letto restano lastre di flysch scoperte. Visitate allora le saline alla foce e i paesi sui crinali, all'ombra degli ulivi.",
    },
    source: "wikiEn",
  },
  getting: {
    title: "Come arrivare",
    lead: "Dragogna si trova nel comune di Pirano, proprio sul confine con la Croazia.",
    car: {
      title: "In auto",
      text: "Il paese si trova sulla riva destra del fiume, sul confine. Strade strette salgono ai paesi sui crinali.",
      source: "wikiVillage",
    },
    bike: {
      title: "In bicicletta",
      text: "Dalla Parenzana, un'antica ferrovia a scartamento ridotto, un percorso ciclabile porta attraverso Dragogna fino a Nova vas.",
      source: "bikemap",
    },
    foot: {
      title: "A piedi",
      text: "Da Sicciole un sentiero segue il bordo della valle, con vista sulle saline.",
      source: "portoroz",
    },
    more: "Mappa e consigli per la visita",
  },
  sourceLabel: "Fonte",
};

const de: HomeTexts = {
  hero: {
    eyebrow: "Slowenisches Istrien",
    title: "Das Dragonja-Tal",
    lead: "Ein Fluss, der sich im Sommer versteckt, alte Mühlen, Steindörfer und Wege entlang der Grenze. Ein Tal zum langsamen Entdecken.",
    discover: "Das Tal entdecken",
    visit: "Besuch planen",
  },
  ways: {
    title: "Was Sie erwartet",
    lead: "Zwischen Meer, Flyschhügeln und Karst: Wählen Sie, wie Sie das Tal kennenlernen.",
    nature: "Gumpen unter Flyschwänden, terrassierte Olivenhaine und Salinen an der Mündung.",
    culture: "Alte Mühlen, istrische Steinhäuser und Dörfer auf den Bergrücken.",
    activity: "Zu Fuß und mit dem Rad, auf der Parenzana und am Rand des Tals.",
  },
  story: {
    eyebrow: "Die Geschichte des Tals",
    title: "Der Fluss, die Mühlen, die Weiler und die Grenze",
    steps: [
      {
        title: "Der Fluss",
        text: "Die Dragonja ist etwa 30 km lang. Sie entspringt unterhalb von Poletiči im Šavrin-Hügelland und mündet bei den Salinen von Sečovlje in die Bucht von Piran.",
        source: "wikiSl",
      },
      {
        title: "Die Mühlen",
        text: "Am Fluss und seinen Bächen arbeiteten einst rund 40 Mühlen. Zwei sind restauriert: die Kodarin-Mühle bei Koštabona und die Mazurin-Mühle bei Trsek.",
        source: "mills",
      },
      {
        title: "Die Weiler",
        text: "Das Dorf Dragonja entstand aus verstreuten Weilern an der Straße Šmarje–Buje, darunter Gočan, Križišče, Stena, Mlini und Rota.",
        source: "wikiVillage",
      },
      {
        title: "Die Grenze",
        text: "Der Unterlauf des Flusses ist die Grenze zwischen Slowenien und Kroatien. Das Dorf liegt am rechten Ufer, direkt an der Grenze.",
        source: "wikiSl",
      },
    ],
  },
  featured: { title: "Nicht verpassen", all: "Alle Ausflugsziele" },
  seasons: {
    title: "Wann kommen",
    lead: "Die Dragonja fließt über Flysch und trocknet im Sommer oft aus.",
    wet: {
      title: "Herbst bis Frühling",
      text: "Der Fluss fließt, die Gumpen sind voll und die Wege am Ufer angenehm kühl. Die Zeit für Wanderungen im Tal.",
    },
    dry: {
      title: "Sommer",
      text: "Im Flussbett bleiben blanke Flyschplatten. Besuchen Sie dann die Salinen an der Mündung und die Dörfer auf den Rücken, im Schatten der Oliven.",
    },
    source: "wikiEn",
  },
  getting: {
    title: "Anreise",
    lead: "Dragonja liegt in der Gemeinde Piran, direkt an der Grenze zu Kroatien.",
    car: {
      title: "Mit dem Auto",
      text: "Das Dorf liegt am rechten Flussufer, an der Grenze. Schmale Straßen führen zu den Dörfern auf den Rücken.",
      source: "wikiVillage",
    },
    bike: {
      title: "Mit dem Rad",
      text: "Von der Parenzana, einer ehemaligen Schmalspurbahn, führt eine Radroute durch Dragonja hinauf nach Nova vas.",
      source: "bikemap",
    },
    foot: {
      title: "Zu Fuß",
      text: "Von Sečovlje folgt ein Weg dem Rand des Tals, mit Blick auf die Salinen.",
      source: "portoroz",
    },
    more: "Karte und Tipps für Ihren Besuch",
  },
  sourceLabel: "Quelle",
};

export const home: Record<Lang, HomeTexts> = { sl, en, hr, it, de };
