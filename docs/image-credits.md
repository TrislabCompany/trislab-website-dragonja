# Image credits

Every photo of the site, with its source and licence. The same data is in `src/lib/photos.ts`, and each page shows the credits of the photos on it. The photos are resized and converted to AVIF at build time; nothing else is changed.

| Id | Shows | Author | Licence | Source |
| --- | --- | --- | --- | --- |
| `valley-cascade` | Water over stone slabs in a riverbed (the hero) | From the earlier dragonja.si | To check before production | The earlier site's `assets/images/hero.webp` |
| `stone-house` | An Istrian stone house with old millstones | From the earlier dragonja.si | To check before production | The earlier site's `assets/images/culture.webp` |
| `river-flysch` | A pool of the Dragonja below a flysch wall | Vid Pogacnik | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flysch_wall_above_Dragonja.jpg) |
| `valley-view` | The Dragonja valley | Žiga | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DolinaDragonje.JPG) |
| `river-summer` | The riverbed, almost dry, in summer | Gregor Rom | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dragonja_river_in_summer.JPG) |
| `border-view` | The village, the border crossing and the valley | Shabicht | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dragonja_Piran_2.jpg) |
| `salina-flamingos` | Flamingos over the Sečovlje salt pans | Yerpo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Greater_flamingo_flock_(Se%C4%8Dovlje_salina).jpg) |
| `parenzana` | The Parenzana trail in Sečovlje | Petar Milošević | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Parenzana_trail_in_Se%C4%8Dovlje_(D-8),_Slovenia.jpg) |
| `nova-vas` | Nova vas nad Dragonjo | Doremo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nova_Vas_nad_Dragonjo_Slovenia.jpg) |
| `padna` | The centre of Padna | Ajznponar | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Padna,_village_core_01.jpg) |
| `sveti-peter` | Sveti Peter on its hill | Doremo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sveti_Peter_Piran_Slovenia_1.jpg) |
| `skrline` | The stone slabs and falls of the Dragonja at Škrline, the old bridge behind | Ljuba brank | [GFDL 1.2](https://www.gnu.org/licenses/old-licenses/fdl-1.2.html) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dragonja-3.jpg) |
| `mazurin-mill` | The Mazurin mill and its water wheel | Živa Rant | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mazurinov_mlin_Trsek.jpg) |
| `borst` | Boršt on its hill | Doremo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Borst_Koper_Slovenia.jpg) |
| `truske` | Vineyards at Rodica near Truške | emax | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vineyards_Rodica_Truske_-_panoramio.jpg) |
| `labor` | The village of Labor | Doremo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Labor_Koper_Slovenia_2.jpg) |
| `valley-edge` | A view across the valley, vineyards and woods | Žiga | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DolinaDragonje2.JPG) |
| `river-mouth` | The mouth of the Dragonja, with rowing boats | Žiga | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DragonjaIzliv.JPG) |

The map on Visit us is drawn from OpenStreetMap data, © OpenStreetMap contributors, under the [ODbL](https://www.openstreetmap.org/copyright); the credit is under the map.

To add a photo: put the file in `src/assets/photos/`, add it to `src/lib/photos.ts` with its alternative text in every language and its credit, and add a row here. A photo shows at most once on a page (`pnpm test` checks it). Use only photos whose licence allows publishing, and keep the credit.
