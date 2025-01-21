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
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2828/asus-rog-strix-rtx3080-10g-gaming',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2829/asus-rog-strix-rtx3080-o10g-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2824/asus-tuf-rtx3080-10g-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2825/asus-tuf-rtx3080-o10g-gaming',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2826/asus-rog-strix-rtx3090-24g-gaming',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2827/asus-rog-strix-rtx3090-o24g-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2822/asus-tuf-rtx3090-24g-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2823/asus-tuf-rtx3090-o24g-gaming',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: 'rx6700xt',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/dual-series/3104/asus-dual-rx6700xt-12g',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6700xt',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/rog-serie/3106/asus-rog-strix-rx6700xt-o12g-gaming',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6700xt',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/tuf-247-betrieb/3105/asus-tuf-rx6700xt-o12g-gaming',
    },
  ],
  name: 'asus-de',
};
