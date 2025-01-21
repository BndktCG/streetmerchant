import {Store} from './store';

export const EuronicsDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#buybox--button',
      text: ['Warenkorb','In den'],
    },
    maxPrice: {
      container: '#',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '#buybox--button',
      text: [
        'Artikel steht derzeit nicht zur Verfügung',
        'Morgen im Laufe des Morgens und nur online unter',
      ],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.euronics.de/computer-und-buero/tablets-und-ebook-reader/tablets/ipad-pro-11-2tb-wifi-5g-5.-generation-2024-space-schwarz-4065327947960',
    },
  ],
  name: 'euronics-de',
};
