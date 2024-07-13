import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

export const Products: Product[] = [
  {
    id: 1,
    name: 'Apple',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 10.2,
    stock: 0,
  },
  {
    id: 2,
    name: 'Banana',
    status: ProductStatus.Inactive,
    category: ProductCategory.Fruit,
    price: 10.8,
    stock: 0,
  },
  {
    id: 3,
    name: 'Carrot',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 20.5,
    stock: 20,
  },
  {
    id: 4,
    name: 'Broccoli',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 100.0,
    stock: 100,
  },
  {
    id: 5,
    name: 'Chicken Breast',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 150.0,
    stock: 15,
  },
  {
    id: 6,
    name: 'Beef Steak',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 120.0,
    stock: 2,
  },
];
