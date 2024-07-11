import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import ProductService from '../services/product.service';

export const useGetProducts = (category: ProductCategory | 'all') => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const get = async (category_param: ProductCategory | 'all') => {
    setIsLoading(true);
    try {
      const res: Product[] = await ProductService.getProducts(category_param);
      setProducts(res);
    } catch (err: unknown) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get(category);
  }, [category]);

  return {
    products,
    isLoading,
    error,
  };
};
