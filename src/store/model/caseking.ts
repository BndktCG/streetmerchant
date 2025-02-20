import {Store} from './store';

export const Caseking: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#js-product-availability-container > div > span > span',
      text: ['auf lager','lagernd', 'im zulauf', 'ab', 'in den warenkorb','Vorbestellung','Auf Lager'],
      
    },
    maxPrice: {
      container: '#maincontent > div > div.product-detail.product-wrapper.pb-9 > div:nth-child(2) > div > div.col-lg-5.pb-lg-4.float-lg-end.product-detail-col-cta > div > div.attributes > div.prices-add-to-cart-actions.sticky-mobil > div.d-flex.gap-2.mb-2.mb-sm-3.align-items-end.align-items-sm-start.flex-sm-column > div.prices.flex-shrink-1.w-min-0 > div > div > span > span > span > span',
      euroFormat: true,
    },
    outOfStock: {
      container: '#js-product-availability-container > div > span > span',
      text: ['nicht verfügbar','unbekannt'],
    },
  },
  name: 'caseking',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.caseking.de/amd-ryzen-7-7800x3d-5.0-ghz-raphael-am5-boxed/HPAM-257.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5080-solid-oc-16384-mb-gddr7/GCZT-265.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5080-solid-16384-mb-gddr7/GCZT-266.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5080-amp-extreme-infinity-16384-mb-gddr7/GCZT-264.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-rog-astral-geforce-rtx-5080-oc-edition-16384-mb-gddr7/GCAS-645.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/msi-geforce-rtx-5080-16g-gaming-trio-oc-white-16384-mb-gddr7/GCMC-396.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-tuf-gaming-geforce-rtx-5080-oc-edition-16384-mb-gddr7/GCAS-643.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/msi-geforce-rtx-5080-16g-gaming-trio-oc-16384-mb-gddr7/GCMC-399.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-wb-16g/GCGB-546.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5080-master-ice-16g-16384-mb-gddr7/GCGB-547.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-rog-astral-geforce-rtx-5080-16384-mb-gddr7/GCAS-646.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/msi-geforce-rtx-5080-16g-suprim-soc-16384-mb-gddr7/GCMC-395.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-prime-geforce-rtx-5080-oc-edition-16384-mb-gddr7/GCAS-641.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5080-aero-oc-sff-16g-16384-mb-gddr7/GCGB-550.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5080-master-16g-16384-mb-gddr7/GCGB-548.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-tuf-gaming-geforce-rtx-5080-16384-mb-gddr7/GCAS-644.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-16g-16384-mb-gddr7/GCGB-545.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5080-windforce-oc-sff-16g-16384-mb-gddr7/GCGB-551.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5080-gaming-oc-16g-16384-mb-gddr7/GCGB-549.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/msi-geforce-rtx-5080-16g-ventus-3x-oc-plus-16384-mb-gddr7/GCMC-398.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5080-ichill-frostbite-16384-mb-gddr7/GCI3-293.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/asus-prime-geforce-rtx-5080-16384-mb-gddr7/GCAS-642.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5080-ichill-x3-16384-mb-gddr7/GCI3-294.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5080-x3-oc-white-16384-mb-gddr7/GCI3-288.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5080-x3-oc-16384-mb-gddr7/GCI3-289.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5080',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5080-x3-16384-mb-gddr7/GCI3-290.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5090-amp-extreme-infinity-32768-mb-gddr7/GCZT-261.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5090-solid-oc-32768-mb-gddr7/GCZT-262.html'
    },
    {
      brand: 'zotac',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5090-solid-32768-mb-gddr7/GCZT-263.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5090-master-32g-32768-mb-gddr7/GCGB-542.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/GCGB-540.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5090-gaming-oc-32g-32768-mb-gddr7/GCGB-543.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/GCGB-539.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5090-master-ice-32g-32768-mb-gddr7/GCGB-541.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5090-windforce-oc-32g-32768-mb-gddr7/GCGB-544.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/msi-geforce-rtx-5090-32g-suprim-soc-32768-mb-gddr7/GCMC-401.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/msi-geforce-rtx-5090-32g-suprim-liquid-soc-32768-mb-gddr7/GCMC-400.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/msi-geforce-rtx-5090-32g-gaming-trio-oc-32768-mb-gddr7/GCMC-402.html'
    },
    {
      brand: 'msi',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/msi-geforce-rtx-5090-32g-ventus-3x-oc-32768-mb-gddr7/GCMC-403.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5090-x3-32768-mb-gddr7/GCI3-287.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5090-ichill-x3-32768-mb-gddr7/GCI3-292.html'
    },
    {
      brand: 'inno3d',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/inno3d-geforce-rtx-5090-ichill-frostbite-32768mb-gddr7/GCI3-291.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/asus-tuf-geforce-rtx-5090-32768-mb-gddr7/GCAS-653.html'
    },
    {
      brand: 'asus',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/asus-rog-astral-geforce-rtx-5090-oc-edition-32768-mb-gddr7/GCAS-650.html'
    },
    {
      brand: 'gigabyte',
      model: 'any',
      series: '5090',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-wb-32g-32768-mb-gddr7/GCGB-540.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5070-ti-eagle-oc-sff-16g-16384-mb-gddr7-/GCGB-556.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/asus-prime-geforce-rtx-5070-ti-16384-mb-gddr7-/GCAS-657.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/msi-geforce-rtx-5070-ti-gaming-trio-oc-plus-16384-mb-gddr7-/GCMC-406.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/asus-prime-geforce-rtx-5070-ti-oc-edition-16384-mb-gddr7-/GCAS-656.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5070-ti-aero-oc-16g-16384-mb-gddr7-/GCGB-553.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-aorus-geforce-rtx-5070-ti-master-16g-16384-mb-gddr7-/GCGB-552.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/asus-tuf-geforce-rtx-5070-ti-oc-edition-16384-mb-gddr7-/GCAS-654.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5070-ti-eagle-oc-ice-sff-16g-16384-mb-gddr7-/GCGB-555.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/asus-tuf-geforce-rtx-5070-ti-16384-mb-gddr7-/GCAS-655.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/msi-geforce-rtx-5070-ti-ventus-3x-oc-16384-mb-gddr7-/GCMC-407.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5070-ti-gaming-oc-16g-16384-mb-gddr7-/GCGB-554.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5070-ti-solid-core-16384-mb-gddr7-/GCZT-273.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/gigabyte-geforce-rtx-5070-ti-windforce-oc-sff-16g-16384-mb-gddr7-/GCGB-557.html'
    },
    {
      brand: 'any',
      model: 'any',
      series: '5070ti',
      url: 'https://www.caseking.de/zotac-gaming-geforce-rtx-5070-ti-solid-oc-16384-mb-gddr7-/GCZT-272.html'
    }
  ],
};