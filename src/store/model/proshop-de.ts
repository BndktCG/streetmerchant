import {Store} from './store';

export const ProshopDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'button[data-form-action="addToBasket"]',
      text: ['bestellen'],
    },
    maxPrice: {
      container:
        '.site-currency-wrapper > span[class="site-currency-attention"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.site-currency-attention',
      text: ['Die Ware ist leider nicht mehr verfügbar.'],
    },
  },
  name: 'proshop-de',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.proshop.de/Grafikkarte/ASUS-GeForce-RTX-5070-Ti-Prime-16GB-GDDR7-RAM-Grafikkarte/3331054'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.proshop.de/Grafikkarte/ASUS-GeForce-RTX-5070-Ti-Prime-16GB-GDDR7-RAM-Grafikkarte/3331054'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.proshop.de/Grafikkarte/ASUS-GeForce-RTX-5070-Ti-TUF-OC-16GB-GDDR7-RAM-Grafikkarte/3331057'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.proshop.de/Grafikkarte/ASUS-GeForce-RTX-5070-Ti-Prime-OC-16GB-GDDR7-RAM-Grafikkarte/3331055'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.proshop.de/Grafikkarte/ZOTAC-GeForce-RTX-5080-Solid-OC-16GB-GDDR7-RAM-Grafikkarte/3331161'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.proshop.de/Grafikkarte/GIGABYTE-GeForce-RTX-5080-WindForce-3-16GB-GDDR7-RAM-Grafikkarte/3330170'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.proshop.de/Grafikkarte/ZOTAC-GeForce-RTX-5080-Solid-16GB-GDDR7-RAM-Grafikkarte/3331160'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.proshop.de/Grafikkarte/GIGABYTE-GeForce-RTX-5090-AORUS-Master-32GB-GDDR7-RAM-Grafikkarte/3331130'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.proshop.de/Grafikkarte/GIGABYTE-GeForce-RTX-5090-WindForce-3-OC-32GB-GDDR7-RAM-Grafikkarte/3331127'
    }
  ],
};