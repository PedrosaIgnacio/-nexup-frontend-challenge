import React from 'react';
import { Product } from '../models/Product';
import { formatCurrency } from '../utils/currency';

interface ProductRowProps {
  product: Product;
}
const ProductRow: React.FC<ProductRowProps> = ({ product }) => (
  <div
    className="col-span-10 grid grid-cols-10 rounded-sm bg-white my-[0.15rem]"
    key={product.id}
  >
    <div className="col-span-3 py-2 px-2 sm:px-6 items-center flex">
      <p className="capitalize tracking-tight text-xs sm:text-sm">
        {product.name}
      </p>
    </div>
    <div className="col-span-2 py-2 px-2 sm:px-6 items-center flex">
      <p className="capitalize tracking-tight text-xs sm:text-sm">
        {product.status}
      </p>
    </div>
    <div className="col-span-3 py-2 px-2 sm:px-6 items-center">
      <p className="capitalize tracking-tight text-xs sm:text-sm">
        {product.category}
      </p>
    </div>
    <div className="col-span-2 py-2 px-2 sm:px-6 items-center flex">
      <p className="capitalize tracking-tight text-xs sm:text-sm">
        {formatCurrency(product.price, 'USD')}
      </p>
    </div>
  </div>
);
export default ProductRow;
