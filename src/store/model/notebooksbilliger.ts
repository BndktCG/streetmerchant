import {Store} from './store';

export const Notebooksbilliger: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#top > div.page-wrapper.js-page-wrapper > div.section-container.main-container.js-main-container > main > div > div.grid-container > div > div > div > div.pdp-header__container > section.pdp-header__details > div > div.shipping-box__wrapper > section:nth-child(1) > span.font--green.product-detail__availability',
      text: [
        'sofort ab lager',
        'verfügbarkeit: ca. 2-4 werktage',
        'verfügbarkeit: ca. 5-10 werktage',
      ],
    },
    maxPrice: {
      container:
        'form[name="cart_quantity"]  span[class*="product-price__regular"]',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.warehouse',
        text: ['liefertermin noch unbestimmt'],
      },
      {
        container: '.soldOut',
        text: ['dieses produkt ist leider ausverkauft.'],
      },
      {
        container: '.just_inStore',
        text: [
          'dieses Produkt kann nur in unseren unten genannten Stores gekauft werden.',
        ],
      },
      {
        container: '#product_error_text',
        text: ['leider ist dieser artikel nicht mehr verfügbar.'],
      },
    ],
  },
  name: 'notebooksbilliger',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.notebooksbilliger.de/asus+zenbook+duo+oled+ux8406ca+ql194w+872914'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/asus+prime+geforce+rtx+5080+oc+876479'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+5080+16g+suprim+liquid+soc+876474'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+5080+windforce+oc+sff+16g+876603'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/asus+rog+astral+geforce+rtx+5080+876601'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+5080+16g+suprim+soc+876473'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+5080+solid+oc+876835'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+5080+gaming+oc+16g+876606'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5080',
      url: 'https://www.notebooksbilliger.de/asus+tuf+gaming+geforce+rtx+5080+oc+876480'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+5090+32g+suprim+soc+876681'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5090',
      url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+5090+32g+gaming+trio+oc+876678'
    }
  ],
};
