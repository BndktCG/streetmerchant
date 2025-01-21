import {Store} from './store';

export const Cyberport: Store = {
  currency: '€',
  backoffStatusCodes: [403, 429, 503],
  labels: {
    inStock: {
      container: '#overview > div.m\\:flex.m\\:gap-m.l\\:gap-xl > div.flex.flex-col.gap-m.m\\:w-4\\/12 > div > div:nth-child(2) > div > div.ml-2xs.mr-3xs',
      text: ['sofort verfügbar','Sofort verfügbar','in den warenkorb','In den Warenkorb'],
    },
    maxPrice: {
      container: '#overview > div.m\\:flex.m\\:gap-m.l\\:gap-xl > div.flex.flex-col.gap-m.m\\:w-4\\/12 > div > div.mb-s > div.flex.items-center.content-center.gap-2xs.m\\:gap-0.m\\:flex-col.m\\:items-start > div',
      euroFormat: true,
    },

  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.cyberport.de/pc-und-zubehoer/komponenten/grafikkarten/nvidia-fuer-gaming/gigabyte/pdp/2e21-57y/gigabyte-geforce-rtx-4080-super-windforce-v2-16gb-grafikkarte-3xdp-hdmi.html',
    },
  ],
  name: 'cyberport',
};
