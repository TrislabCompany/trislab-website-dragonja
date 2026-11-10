// Every photo of the site: the file, its alternative text per language and
// its credit. Pages and content refer to a photo by its id ("river-flysch"),
// never by its file, so the credit always travels with it. The list of
// sources and licences is also in docs/image-credits.md.
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";
import borderView from "../assets/photos/border-view.jpg";
import novaVas from "../assets/photos/nova-vas.jpg";
import padna from "../assets/photos/padna.jpg";
import parenzana from "../assets/photos/parenzana.jpg";
import riverFlysch from "../assets/photos/river-flysch.jpg";
import riverSummer from "../assets/photos/river-summer.jpg";
import salinaFlamingos from "../assets/photos/salina-flamingos.jpg";
import stoneHouse from "../assets/photos/stone-house.jpg";
import svetiPeter from "../assets/photos/sveti-peter.jpg";
import valleyCascade from "../assets/photos/valley-cascade.jpg";
import valleyView from "../assets/photos/valley-view.jpg";

export interface Credit {
  author: string;
  licence: string;
  /** The licence's page; none for a photo of the site's own. */
  licenceUrl?: string;
  /** Where the original is. */
  source: string;
}

export interface Photo {
  src: ImageMetadata;
  alt: Record<Lang, string>;
  credit: Credit;
  /** CSS object-position for crops: where the subject of the photo is. */
  focus?: string;
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;
const ccBySa4 = { licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/" };
const ccBy4 = { licence: "CC BY 4.0", licenceUrl: "https://creativecommons.org/licenses/by/4.0/" };
const cc0 = { licence: "CC0", licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/" };
const own = { author: "dragonja.si", licence: "©", source: "https://dragonja.si" };

export const photos = {
  "valley-cascade": {
    src: valleyCascade,
    alt: {
      sl: "Voda teče čez kamnite plošče v rečni strugi, za njo zeleni grmi in drevesa.",
      en: "Water flowing over stone slabs in a riverbed, with green bushes and trees behind.",
      hr: "Voda teče preko kamenih ploča u riječnom koritu, iza nje zeleno grmlje i drveće.",
      it: "L'acqua scorre su lastre di pietra nel letto di un fiume, con cespugli e alberi verdi alle spalle.",
      de: "Wasser fließt über Steinplatten in einem Flussbett, dahinter grüne Büsche und Bäume.",
    },
    credit: own,
    focus: "50% 60%",
  },
  "stone-house": {
    src: stoneHouse,
    alt: {
      sl: "Istrska kamnita hiša z lesenimi polkni, vrtnicami ob vratih in starimi mlinskimi kamni na dvorišču.",
      en: "An Istrian stone house with wooden shutters, roses by the door and old millstones in the yard.",
      hr: "Istarska kamena kuća s drvenim škurama, ružama uz vrata i starim mlinskim kamenjem u dvorištu.",
      it: "Una casa istriana in pietra con imposte di legno, rose accanto alla porta e vecchie macine nel cortile.",
      de: "Ein istrisches Steinhaus mit Holzläden, Rosen an der Tür und alten Mühlsteinen im Hof.",
    },
    credit: own,
    focus: "60% 50%",
  },
  "river-flysch": {
    src: riverFlysch,
    alt: {
      sl: "Zelen tolmun Dragonje pod visoko steno sivega fliša.",
      en: "A green pool of the Dragonja below a high wall of grey flysch.",
      hr: "Zeleni vir Dragonje ispod visoke stijene sivog fliša.",
      it: "Una pozza verde della Dragogna sotto un'alta parete di flysch grigio.",
      de: "Ein grüner Gumpen der Dragonja unter einer hohen Wand aus grauem Flysch.",
    },
    credit: { author: "Vid Pogacnik", ...ccBySa4, source: commons("Flysch_wall_above_Dragonja.jpg") },
  },
  "valley-view": {
    src: valleyView,
    alt: {
      sl: "Pogled na zeleno dolino Dragonje s terasami, oljčniki in gozdom.",
      en: "A view over the green Dragonja valley, with terraces, olive groves and woods.",
      hr: "Pogled na zelenu dolinu Dragonje s terasama, maslinicima i šumom.",
      it: "Vista sulla verde valle della Dragogna, con terrazzamenti, uliveti e boschi.",
      de: "Blick über das grüne Dragonja-Tal mit Terrassen, Olivenhainen und Wald.",
    },
    credit: { author: "Žiga", licence: "Public domain", source: commons("DolinaDragonje.JPG") },
  },
  "river-summer": {
    src: riverSummer,
    alt: {
      sl: "Poleti je struga Dragonje skoraj suha: gole plošče fliša in plitva voda.",
      en: "In summer the bed of the Dragonja is almost dry: bare slabs of flysch and shallow water.",
      hr: "Ljeti je korito Dragonje gotovo suho: gole ploče fliša i plitka voda.",
      it: "D'estate il letto della Dragogna è quasi asciutto: lastre di flysch scoperte e acqua bassa.",
      de: "Im Sommer ist das Bett der Dragonja fast trocken: blanke Flyschplatten und seichtes Wasser.",
    },
    credit: { author: "Gregor Rom", ...ccBySa4, source: commons("Dragonja_river_in_summer.JPG") },
  },
  "border-view": {
    src: borderView,
    alt: {
      sl: "Pogled z brega na vas Dragonja, mejni prehod in dolino proti Hrvaški.",
      en: "A view from the hillside over the village of Dragonja, the border crossing and the valley towards Croatia.",
      hr: "Pogled s brijega na selo Dragonju, granični prijelaz i dolinu prema Hrvatskoj.",
      it: "Vista dalla collina sul villaggio di Dragogna, il valico di confine e la valle verso la Croazia.",
      de: "Blick vom Hang auf das Dorf Dragonja, den Grenzübergang und das Tal Richtung Kroatien.",
    },
    credit: { author: "Shabicht", ...cc0, source: commons("Dragonja_Piran_2.jpg") },
  },
  "salina-flamingos": {
    src: salinaFlamingos,
    alt: {
      sl: "Jata plamencev leti nad vodo v Sečoveljskih solinah.",
      en: "A flock of flamingos flying over the water of the Sečovlje salt pans.",
      hr: "Jato plamenaca leti iznad vode u Sečoveljskim solanama.",
      it: "Uno stormo di fenicotteri in volo sull'acqua delle saline di Sicciole.",
      de: "Ein Schwarm Flamingos fliegt über das Wasser der Salinen von Sečovlje.",
    },
    credit: { author: "Yerpo", ...ccBySa4, source: commons("Greater_flamingo_flock_(Sečovlje_salina).jpg") },
  },
  parenzana: {
    src: parenzana,
    alt: {
      sl: "Kolo ob poti Parenzana v Sečovljah, za njim polja, ciprese in vas na griču.",
      en: "A bicycle beside the Parenzana trail in Sečovlje, with fields, cypresses and a hilltop village behind.",
      hr: "Bicikl uz stazu Parenzana u Sečovljama, iza njega polja, čempresi i selo na brežuljku.",
      it: "Una bicicletta lungo la Parenzana a Sicciole, con campi, cipressi e un paese sulla collina.",
      de: "Ein Fahrrad am Parenzana-Weg in Sečovlje, dahinter Felder, Zypressen und ein Dorf auf dem Hügel.",
    },
    credit: { author: "Petar Milošević", ...ccBy4, source: commons("Parenzana_trail_in_Sečovlje_(D-8),_Slovenia.jpg") },
    focus: "60% 60%",
  },
  "nova-vas": {
    src: novaVas,
    alt: {
      sl: "Nova vas nad Dragonjo z zvonikom na slemenu nad oljčniki.",
      en: "Nova vas nad Dragonjo with its bell tower on the ridge above olive groves.",
      hr: "Nova vas nad Dragonjom sa zvonikom na hrptu iznad maslinika.",
      it: "Nova vas nad Dragonjo con il campanile sul crinale sopra gli uliveti.",
      de: "Nova vas nad Dragonjo mit seinem Glockenturm auf dem Kamm über Olivenhainen.",
    },
    credit: { author: "Doremo", ...ccBySa4, source: commons("Nova_Vas_nad_Dragonjo_Slovenia.jpg") },
  },
  padna: {
    src: padna,
    alt: {
      sl: "Stare kamnite hiše v jedru vasi Padna.",
      en: "Old stone houses in the centre of the village of Padna.",
      hr: "Stare kamene kuće u središtu sela Padna.",
      it: "Vecchie case in pietra nel centro del paese di Padna.",
      de: "Alte Steinhäuser im Ortskern von Padna.",
    },
    credit: { author: "Ajznponar", ...ccBySa4, source: commons("Padna,_village_core_01.jpg") },
  },
  "sveti-peter": {
    src: svetiPeter,
    alt: {
      sl: "Vas Sveti Peter na griču, obdana z oljčniki.",
      en: "The village of Sveti Peter on its hill, surrounded by olive groves.",
      hr: "Selo Sveti Peter na brežuljku, okruženo maslinicima.",
      it: "Il paese di Sveti Peter sulla sua collina, circondato da uliveti.",
      de: "Das Dorf Sveti Peter auf seinem Hügel, umgeben von Olivenhainen.",
    },
    credit: { author: "Doremo", ...ccBySa4, source: commons("Sveti_Peter_Piran_Slovenia_1.jpg") },
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;
export const photoIds = Object.keys(photos) as [PhotoId, ...PhotoId[]];

/** The photo with this id, or a build error that names the unknown id. */
export function photo(id: string): Photo {
  if (!(id in photos)) throw new Error(`Photo "${id}" is not in src/lib/photos.ts.`);
  return photos[id as PhotoId];
}
