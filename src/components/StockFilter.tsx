import React, { Dispatch, SetStateAction } from 'react';

interface StockFilterProps {
  selectedStockFilter: 'available' | 'unavailable' | 'all';
  setSelectedStockFilter: Dispatch<
    SetStateAction<'available' | 'unavailable' | 'all'>
  >;
}

export const StockFilter: React.FC<StockFilterProps> = (props) => {
  const { selectedStockFilter, setSelectedStockFilter } = props;
  const handleStockFilterChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStockFilter(target.value as 'available' | 'unavailable' | 'all');
  };
  return (
    <div className="col-span-3 px-2">
      <label
        htmlFor="stock"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Stock
      </label>
      <select
        value={selectedStockFilter}
        onChange={handleStockFilterChange}
        id="stock"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">Todos</option>
        <option value="available">En stock</option>
        <option value="unavailable">Sin stock</option>
      </select>
    </div>
  );
};
