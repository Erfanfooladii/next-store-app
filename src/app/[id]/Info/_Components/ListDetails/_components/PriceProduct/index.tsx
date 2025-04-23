const PriceProduct = ({ price }: { price: string | undefined }) => {
  return (
    <p className="text-xl text-slate-600">
      Price:
      <span className="text-2xl">{Math.round(Number(price))}</span>
      <i className="text-red-700">$</i>
    </p>
  );
};
export default PriceProduct;
