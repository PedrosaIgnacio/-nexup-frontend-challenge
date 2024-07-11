import { Products } from '../data/products';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

export default class ProductService {
  static async getProducts(
    category: ProductCategory | 'all',
  ): Promise<Product[]> {
    let productList = Products;

    if (category !== 'all') {
      productList = productList.filter(
        (product) => product.category === category,
      );
    }

    // Simulate an async operation with a delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(productList), 2000);
    });
  }
}
