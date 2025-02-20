import {Store} from './store';

export const AsusDe: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#_defaultWrapper > div:nth-child(3) > div > div.asusOfficialProductMenu.LevelFourProductPageHeader__wrapper__1tvNu.LevelFourProductPageHeader__black__1D1kz > div > div.LevelFourProductPageHeader__priceAndButtonWrapper__P3Fj7 > div.LevelFourProductPageHeader__ecButtonContainer__axJ6i > div > div > a',
      text: ['in den warenkorb',' Jetzt kaufen '],
    },
    maxPrice: {
      container: 'body > main > div:nth-child(2) > div > div.product-detail > div.product-detail-buy > div.js-magnifier-zoom-image-container > div.detail-offers > div.product-detail-price-container > p',
      euroFormat: true,
    },
  },
  name: 'asus-de',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.asus.com/de/motherboards-components/graphics-cards/prime/prime-rtx5070ti-o16g/'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.asus.com/de/motherboards-components/graphics-cards/prime/prime-rtx5070ti-o16g/'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.asus.com/de/motherboards-components/graphics-cards/prime/prime-rtx5070ti-16g/'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.asus.com/de/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5070ti-16g-gaming/'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.asus.com/de/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5070ti-o16g-gaming/'
    }
  ],
};
