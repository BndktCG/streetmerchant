import {Store} from './store';

export const Mindfactory: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.pshipping',
      text: ['lagernd', 'verfügbar'],
    },
    maxPrice: {
      container: 'div[class="pprice"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.pshipping',
      text: ['ohne liefertermin'],
    },
  },
  name: 'mindfactory',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-GeForce-RTX-5080-Vanguard-SOC-Launch-Edition-Aktiv-PCIe-5-0-x1_1609599.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-GeForce-RTX-5080-Vanguard-SOC-Launch-Edition-Aktiv-PCIe-5-0-x1_1609599.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-GeForce-RTX-5080-Ventus-3X-OC-Aktiv-PCIe-5-0-x16-1xHDMI-2-1b-3_1611042.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.mindfactory.de/product_info.php/16GB-MSI-GeForce-RTX-5080-Ventus-3X-OC-White-Aktiv-PCIe-5-0-x16-1xHDMI-_1611041.html'
    }
  ],
};