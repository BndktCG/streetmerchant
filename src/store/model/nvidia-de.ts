import {Store} from './store';

export const NvidiaDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#nv-button-f3d1a1873f > span',
      text: ['In den Einkaufswagen', 'JETZT KAUFEN', 'Kaufen'],
    },
    outOfStock: {
      container: '#nv-button-0a98a3e249 > span',
      text: ['DERZEIT NICHT VERFÜGBAR','Benachrichtigungen erhalten'],
    },
  },
  links: [
    // test item
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/40-series/rtx-4090/',
    },
    // real items
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5090/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5080',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5080/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5070-family/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070ti',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5070-family/',
    },

  ],
  name: 'nvidia-de',
};
