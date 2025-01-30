import {Store} from './store';

// note that nvidia marketplace does not have seperate product pages for each item. thats why products are referenced by filters. might be unstabe
export const NvidiaMarketplaceDE: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#resultsDiv > div > div > div:nth-child(2) > div.product_detail_78.nv-priceAndCTAContainer > div > div.clearfix.pdc-87 > div:nth-child(2) > div > div > a > span',
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
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%203070&gpu_filter=RTX%204090~2,RTX%204080%20SUPER~5,RTX%204080~2,RTX%204070%20Ti%20SUPER~27,RTX%204070%20Ti~8,RTX%204070%20SUPER~22,RTX%204070~8,RTX%204060%20Ti~13,RTX%204060~8,RTX%203070~1,RTX%203060%20Ti~2,RTX%203060~7,RTX%203050~4',
    },
    // presumably
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205070',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5070ti',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205070%20Ti',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5080',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205080',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '5090',
      url: 'https://marketplace.nvidia.com/de-de/consumer/graphics-cards/?locale=de-de&page=1&limit=12&gpu=RTX%205090',
    },
  ],
  name: 'nvidia-marketplace-de',
};
