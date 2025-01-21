import {Store} from './store';

export const AlternateDe: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.add-to-cart.details-cart-button.btn.btn-primary.btn-lg.d-flex.justify-content-center.tp-button.btn-season',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '#tle-details-price-section > div.col.campaign-timer-price-section > div > div:nth-child(1) > span.price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['liefertermin unbekannt'],
      },
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['Artikel kann nicht gekauft werden'],
      },
      {
        container: 'div.col-12 > div:nth-child(1)',
        text: ['Artikel kann derzeit nicht gekauft werden'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alternate.de/html/product/1916729',
    },
  ],
  name: 'alternate-de',
};
