import React from 'react';
import { Product } from '../models/Product';
import { formatCurrency } from '../utils/currency';

interface ProductRowProps {
  product: Product;
}

interface ProductCellProps {
  property: keyof Product;
  value: any;
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
  return (
    <div
      className={`col-span-${COL_SPAN_SIZES[property]} py-2 px-2 sm:px-6 items-center flex`}
    >
      {property === 'price' ? (
        <p className="capitalize tracking-tight text-xs sm:text-sm">
          {formatCurrency(value, 'USD')}
        </p>
      ) : (
        <p className="capitalize tracking-tight text-xs sm:text-sm">{value}</p>
      )}
    </div>
  );
};

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => (
  <div
    className="col-span-10 grid grid-cols-10 rounded-sm bg-white my-[0.15rem]"
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
