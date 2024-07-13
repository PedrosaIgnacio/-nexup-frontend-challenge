import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { getProductList } from '../api/products';

export const useGetProducts = (
  category: ProductCategory | 'all',
  stock: 'available' | 'unavailable' | 'all',
  search: string,
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const get = async (
    category_param: ProductCategory | 'all',
    stock_param: 'available' | 'unavailable' | 'all',
    search_param: string,
  ) => {
    try {
      setIsLoading(true);
      const res: Product[] = await getProductList(
        category_param,
        stock_param,
        search_param,
      );
      setProducts(res);
    } catch (err: unknown) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get(category, stock, search);
  }, [category, stock, search]);

  return {
    products,
    isLoading,
    error,
  };
};
