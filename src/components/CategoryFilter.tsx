import React, { Dispatch, SetStateAction } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {
  selectedCategory: ProductCategory | 'all';
  setSelectedCategory: Dispatch<SetStateAction<ProductCategory | 'all'>>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  const handleCategoryChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(target.value as ProductCategory | 'all');
  };
  return (
    <div className="w-full grid grid-cols-12">
      <div className="w-full grid grid-cols-12 col-span-12">
        <div className="col-start-4 col-span-2 px-2">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Categoría
          </label>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 col-span-12">
        <div className="col-span-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Busca tu producto"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="col-span-2 px-2">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            id="category"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected value="all">
              Todos
            </option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
          </select>
        </div>
      </div>
    </div>
  );
};
