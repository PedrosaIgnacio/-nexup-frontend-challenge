import React, { Dispatch, SetStateAction } from 'react';

interface FullTextFilterProps {
  fullText: string;
  setFullText: Dispatch<SetStateAction<string>>;
}

export const FullTextFilter: React.FC<FullTextFilterProps> = (props) => {
  const { setFullText, fullText } = props;
  const handleFullTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setFullText(value);
  };
  return (
    <div className="col-span-6 px-2">
      <input
        type="text"
        value={fullText}
        onChange={handleFullTextChange}
        placeholder="Busca tu producto"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
