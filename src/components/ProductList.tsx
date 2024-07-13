import React from 'react';
import { Product } from '../models/Product';
import { ProductHeader } from './ProductHeader';
import { ProductRow } from './ProductRow';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <div className="w-full grid grid-cols-10 space-y-3">
      <div className="col-span-10 grid grid-cols-10">
        <ProductHeader />
      </div>
      <div className="col-span-10 grid grid-cols-10">
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-10 py-3 px-6 text-center">
            No products available
          </div>
        )}
      </div>
    </div>
  );
};
