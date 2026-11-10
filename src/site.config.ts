// The site's own facts, read at build time: languages, company, contact,
// legal pages, lists of items, structured data and security.txt. Change the
// values here; the shape is in src/lib/site-settings.ts. Nothing here is
// secret: it all ends up in the public pages. Values that differ per
// Environment go to /config.json instead (src/lib/config.ts).
// First written by `pnpm init-site` from site.yaml; from then on it is the
// site's own.

import type { SiteSettings } from "./lib/site-settings";

/** The site's languages. With one language, the URLs have no language prefix. */
export const languages = ["sl", "en", "hr", "it", "de"] as const;
export type Lang = (typeof languages)[number];

const site: SiteSettings<Lang> = {
  url: "https://dragonja.si",
  name: "Dragonja",
  description: {
    sl: "Dolina reke Dragonje v slovenski Istri: reka, stari mlini, istrske vasi in poti ob meji. Kaj videti in kako priti.",
    en: "The Dragonja valley in Slovenian Istria: the river, old mills, Istrian villages and trails along the border. What to see and how to get here.",
    hr: "Dolina rijeke Dragonje u slovenskoj Istri: rijeka, stari mlinovi, istarska sela i staze uz granicu. Što vidjeti i kako doći.",
    it: "La valle della Dragogna nell'Istria slovena: il fiume, gli antichi mulini, i villaggi istriani e i sentieri lungo il confine. Cosa vedere e come arrivare.",
    de: "Das Dragonja-Tal im slowenischen Istrien: der Fluss, alte Mühlen, istrische Dörfer und Wege entlang der Grenze. Was es zu sehen gibt und wie man hinkommt."
  },
  languages: languages,
  defaultLanguage: "sl",
  themeColor: "#2c3e50",
  collections: [
    {
      id: "attractions",
      title: {
        sl: "Znamenitosti",
        en: "Attractions",
        hr: "Znamenitosti",
        it: "Cosa vedere",
        de: "Ausflugsziele"
      },
      lead: {
        sl: "Narava, kultura, dejavnosti in kraji v dolini Dragonje in okolici.",
        en: "Nature, culture, activities and places in and around the Dragonja valley.",
        hr: "Priroda, kultura, aktivnosti i mjesta u dolini Dragonje i okolici.",
        it: "Natura, cultura, attività e luoghi nella valle della Dragogna e dintorni.",
        de: "Natur, Kultur, Aktivitäten und Orte im Dragonja-Tal und in der Umgebung."
      },
      nav: true,
      home: true
    }
  ],
  company: {
    name: "Trislab",
    legalName: "Trislab d.o.o.",
    address: {
      street: "Ankaranska cesta 7b",
      postalCode: "6000",
      city: "Koper",
      country: "SI"
    },
    registrationNumber: "8074585000",
    vatId: "SI40832198",
    logo: "/favicon.svg",
    profiles: []
  },
  contact: {
    topics: [
      {
        email: "hello@dragonja.si",
        label: {
          sl: "Vprašanja o obisku",
          en: "Questions about your visit",
          hr: "Pitanja o posjetu",
          it: "Domande sulla visita",
          de: "Fragen zu Ihrem Besuch"
        }
      }
    ]
  },
  legalPages: {
    imprint: false,
    privacy: true,
    accessibility: true,
    sustainability: true
  },
  structuredData: "none",
  securityTxt: {
    contact: "mailto:info@trislab.com",
    expires: "2027-11-05T15:57:14.721Z"
  }
};

export default site;
