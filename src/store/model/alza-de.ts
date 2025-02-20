import {Store} from './store';

export const AlzaDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#detailText > div.price-detail > div.price-detail__buy-actions > a.btnx.new.green.buy.js-buy-button > span.text',
      text: ['In den Warenkorb','Vorbestellen'],
    },
    maxPrice: {
      container: '#detailText > div.price-detail > div.price-detail__row > div.price-detail__price-box-wrapper.js-price-detail__main-price-box-wrapper > div > div.price-box__body > span > span',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#detailText > div.price-detail > div.price-detail__buy-actions > a',
        text: ['Verfügbarkeit beobachten'],
      },
    ],
  },
  name: 'alza-de',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alza.de/mac-mini-m4-2024?dq=12661695'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/msi-geforce-rtx-5080-16g-gaming-trio-oc-white-d12762633.htm?o=1'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/msi-geforce-rtx-5080-16g-suprim-soc-d12762632.htm?o=2'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/msi-geforce-rtx-5080-16g-vanguard-soc-launch-edition-d12762635.htm?o=3'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/msi-geforce-rtx-5080-16g-ventus-3x-oc-white-d12762634.htm?o=4'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/msi-geforce-rtx-5080-16g-ventus-3x-oc-plus-d12762631.htm?o=5'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/asus-rog-astral-geforce-rtx-5080-o16g-gaming-d12766318.htm?o=6'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/asus-prime-geforce-rtx-5080-o16g-d12766320.htm?o=7'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5080-master-ice-16g-d12766425.htm?o=8'
    },
    {
      brand: 'gainward',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gainward-geforce-rtx-5080-phantom-gs-16g-d12764038.htm?o=9'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-wb-16g-d12766423.htm?o=11'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-16g-d12766427.htm?o=12'
    },
    {
      brand: 'palit',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/palit-geforce-rtx-5080-gamerock-16g-d12764040.htm?o=13'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-geforce-rtx-5080-gaming-oc-16g-d12766429.htm?o=14'
    },
    {
      brand: 'gainward',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gainward-geforce-rtx-5080-phantom-16g-d12764039.htm?o=15'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-geforce-rtx-5080-aero-oc-sff-16g-d12766428.htm?o=16'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/gigabyte-geforce-rtx-5080-windforce-oc-sff-16g-d12766424.htm?o=17'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.alza.de/asus-tuf-geforce-rtx-5080-o16g-gaming-d12766319.htm?o=18'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/asus-rog-astral-geforce-rtx-5090-o32g-gaming-d12783433.htm?o=1'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/asus-tuf-geforce-rtx-5090-o32g-gaming-d12783436.htm?o=2'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-wb-32g-d12783430.htm?o=3'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5090-master-32g-d12783426.htm?o=4'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-geforce-rtx-5090-gaming-oc-32g-d12783427.htm?o=5'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5090-master-ice-32g-d12783431.htm?o=6'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/asus-tuf-geforce-rtx-5090-32g-gaming-d12783432.htm?o=7'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/asus-rog-astral-lc-geforce-rtx-5090-o32g-gaming-d12783435.htm?o=8'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-32g-d12783428.htm?o=9'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.alza.de/gigabyte-geforce-rtx-5090-windforce-oc-32g-d12783429.htm?o=10'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.alza.de/inno3d-geforce-rtx-5070-ti-x3-d12814022.htm?o=1'
    }
  ],
};