const BottomContentCart = ({
  totalCards,
  totalPrices,
  removeAllHadler,
}: {
  totalPrices: string;
  removeAllHadler: () => void;
  totalCards: number;
}) => {
  return (
    <div className="p-2 sticky top-1 md:max-h-60 md:min-w-60 flex-col items-center flex md:flex-col md:justify-center md:items-center bg-slate-500 rounded-md">
      <h2 className="text-xl text-white font-bold">
        Total Card: <span>{totalCards}</span>
      </h2>
      <p className="text-lg text-red-200">
        Price: <span>{totalPrices}</span>
      </p>
      <button
        onClick={() => removeAllHadler}
        className="bg-orange-500 hover:bg-orange-300 rounded-md p-4"
      >
        Remove All cart
      </button>
    </div>
  );
};
export default BottomContentCart;
