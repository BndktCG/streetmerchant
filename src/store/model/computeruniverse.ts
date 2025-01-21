import {Store} from './store';

export const Computeruniverse: Store = {
  backoffStatusCodes: [503],
  currency: '€',
  labels: {
    inStock: {
      container: '.product-stock__delivery-text.mb-1',
      text: [
        'bestellartikel',
        'auf lager und sofort lieferbar',
        'kurzfristig verfügbar',
        'bald verfügbar',
      ],
    },
    maxPrice: {
      container: '.price.price--base-4-5xl.flex',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-stock__delivery-text.mb-1',
      text: ['nicht verfügbar', 'liefertermin hat erhebliche schwankungen'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.computeruniverse.net/de/p/2E21-58P',
    },
  ],
  name: 'computeruniverse',
};
