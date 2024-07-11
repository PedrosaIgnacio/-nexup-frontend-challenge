const ProductHeader: React.FC = () => {
  return (
    <div className="col-span-10 grid grid-cols-10">
      <div className="col-span-3 capitalize px-2 sm:px-6 text-left">
        <p className="text-xs sm:text-sm font-semibold tracking-wide capiptalize text-[#4F4F4F]">
          nombre
        </p>
      </div>
      <div className="col-span-2 capitalize px-2 sm:px-6 text-left">
        <p className="text-xs sm:text-sm font-semibold tracking-wide capiptalize text-[#4F4F4F]">
          estado
        </p>
      </div>
      <div className="col-span-3 capitalize px-2 sm:px-6 text-left">
        <p className="text-xs sm:text-sm font-semibold tracking-wide capiptalize text-[#4F4F4F]">
          categoría
        </p>
      </div>
      <div className="col-span-2 capitalize px-2 sm:px-6 text-left">
        <p className="text-xs sm:text-sm font-semibold tracking-wide capiptalize text-[#4F4F4F]">
          precio
        </p>
      </div>
    </div>
  );
};

export default ProductHeader;
