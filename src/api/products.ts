import { Products } from '../data/products';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

// Change the return type if necessary
export const getProductList = async (
  category: ProductCategory | 'all',
  stock: 'available' | 'unavailable' | 'all',
  search: string,
): Promise<Product[]> => {
  let productList = Products;

  if (category !== 'all') {
    productList = productList.filter(
      (product) =>
        product.category.toLocaleLowerCase() === category.toLocaleLowerCase(),
    );
  }

  switch (stock) {
    case 'available':
      productList = productList.filter((product) => product.stock > 0);
      break;
    case 'unavailable':
      productList = productList.filter((product) => product.stock === 0);
      break;
    default:
      break;
  }

  if (search) {
    productList = productList.filter(
      (product) =>
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(search.toLowerCase()) ||
        product.status.toLowerCase().includes(search.toLowerCase()) ||
        product.stock.toString().toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Simulate an async operation with a delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(productList), 2000);
  });
};
