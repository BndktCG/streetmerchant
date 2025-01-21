import {Store} from './store';

export const AsusDe: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#productDetailPageBuyProductForm > div > div:nth-child(11) > button.btn.btn-primary.btn-block.btn-buy',
      text: ['in den warenkorb'],
    },
    maxPrice: {
      container: 'body > main > div:nth-child(2) > div > div.product-detail > div.product-detail-buy > div.js-magnifier-zoom-image-container > div.detail-offers > div.product-detail-price-container > p',
      euroFormat: true,
    },
  },

  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://webshop.asus.com/de/Grafikkarten/Nvidia-RTX-40-SUPER/ASUS-TUF-Gaming-GeForce-RTX-4070-Ti-SUPER-16GB-GDDR6X-OC-Edition-Gaming-Grafikkarte/90YV0KF0-M0NA00',
    },
  ],
  name: 'asus-de',
};
