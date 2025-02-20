import {Store} from './store';

// note that nvidia marketplace does not have seperate product pages for each item. thats why products are referenced by filters. might be unstabe
export const NvidiaMarketplaceDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#form-action-addToCart > a',
      text: ['In den Einkaufswagen', 'JETZT KAUFEN'],
    },
    maxPrice: {
      container: '#resultsDiv > div > div > div:nth-child(2) > div.product_detail_78.nv-priceAndCTAContainer > div > div.nv-priceAndCompare > div.product-details-price-stock > div > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: {
      container: '#resultsDiv > div > div > div:nth-child(2) > div.product_detail_78.nv-priceAndCTAContainer > div > div.clearfix.pdc-87.fe-pids > a > button',
      text: ['DERZEIT NICHT VERFÜGBAR'],
    },
  },
  name: 'nvidia-marketplace-de',
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/nvidia-geforce-rtx-4070/'
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5080',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/nvidia-geforce-rtx-5080/'
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/nvidia-geforce-rtx-5090/'
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/nvidia-geforce-rtx-5070/'
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070ti',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/nvidia-geforce-rtx-5070-ti/'
    }
  ],
};