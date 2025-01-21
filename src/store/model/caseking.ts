import {Store} from './store';

export const Caseking: Store = {
  backoffStatusCodes: [403, 429],
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-main-cta',
      text: ['lagernd', 'im zulauf', 'ab', 'in den warenkorb'],
    },
    maxPrice: {
      container: '.js-unit-price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.btn-main-cta',
      text: ['unbekannt'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.caseking.de/apnx-v1-pc-case-midi-tower-atx-tempered-glass-wood-black/GESI-420.html',
    },
    {
      brand: 'zotac',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5080-solid-oc-16384-mb-gddr7/GCZT-265.html',
    },
    {
      brand: 'zotac',
      model: 'amp extreme infinity',
      series: '5080',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5080-solid-16384-mb-gddr7/GCZT-266.html',
    },
    {
      brand: 'asus',
      model: 'oc',
      series: '5080',
      url: 'https://www.caseking.de/asus-rog-astral-geforce-rtx-5080-oc-edition-16384-mb-gddr7/GCAS-645.html',
    },
  ],
  name: 'caseking',
};
