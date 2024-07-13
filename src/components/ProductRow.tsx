import React from 'react';
import { Product } from '../models/Product';
import { formatCurrency } from '../utils/currency';
import { ProductStatus } from '../models/ProductStatus';

interface ProductRowProps {
  product: Product;
}

interface ProductCellProps {
  property: keyof Product;
  value: string | number;
}

type ColSpanSizeType = {
  [key in keyof Product]?: number;
};

const COL_SPAN_SIZES: ColSpanSizeType = {
  name: 3,
  status: 2,
  category: 3,
  price: 1,
  stock: 1,
};

const ProductCell: React.FC<ProductCellProps> = (props) => {
  const { property, value } = props;
  switch (property) {
    case 'price':
      return (
        <div
          className={`col-span-${COL_SPAN_SIZES[property]} py-2 px-2 sm:px-6 items-center flex`}
        >
          <p className="capitalize tracking-tight text-xs sm:text-sm">
            {formatCurrency(value as number, 'USD')}
          </p>
        </div>
      );
    case 'status':
      return (
        <div
          className={`col-span-${COL_SPAN_SIZES[property]} py-2 px-2 sm:px-6 items-center flex`}
        >
          <p
            className={`${value === ProductStatus.Active ? 'bg-blue-400 rounded-full px-2 py-1 text-white font-bold text-xs' : 'bg-gray-400 rounded-full px-2 py-1 text-white font-bold text-xs'} capitalize tracking-tight`}
          >
            {value}
          </p>
        </div>
      );
    default:
      return (
        <div
          className={`col-span-${COL_SPAN_SIZES[property]} py-2 px-2 sm:px-6 items-center flex`}
        >
          <p className="capitalize tracking-tight text-xs sm:text-sm">
            {value}
          </p>
        </div>
      );
  }
};

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => (
  <div
    className="col-span-10 grid grid-cols-10 rounded-lg bg-white my-[0.15rem] hover:bg-[#F7F7F7]"
    key={product.id}
  >
    {Object.keys(product)
      .filter((key) => key !== 'id')
      .map((key) => (
        <ProductCell
          key={key}
          property={key as keyof Product}
          value={product[key as keyof Product]}
        />
      ))}
  </div>
);
