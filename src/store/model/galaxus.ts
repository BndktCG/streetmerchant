import {Store} from './store';

export const Galaxus: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#addToCartButton:enabled',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '#pageContent > div > div.sc-329acb30-0.kuwHMG > div.sc-7a4d0cf2-0.zJjIS > div > div.sc-f092bb40-0.hSAMSM > div > div.sc-f092bb40-6.eMpmAT > span > strong > button',
      euroFormat: true,
    },
    outOfStock: {
      container:
        '#pageContent > div > div.sc-329acb30-0.kuwHMG > div.sc-7a4d0cf2-0.zJjIS > div > div.sc-f092bb40-0.hSAMSM > div > div:nth-child(3) > div.sc-376a0705-0.extended_availability_AvailabilityWrapper____kfidm > div > span > span.availabilityIconView_TextWrapper____nqnzp > div',
      text: [
        'Aktuell nicht lieferbar',
      ],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.galaxus.de/de/s1/product/amd-ryzen-7-5700x3d-tray-am4-3-ghz-8-core-prozessor-42743545?supplier=2705624',
    },
  ],
  name: 'galaxus',
};
