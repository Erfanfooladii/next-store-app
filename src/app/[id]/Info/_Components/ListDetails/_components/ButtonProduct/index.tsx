const ButtonProduct = ({
  buttonHadnler,
  isCart,
}: {
  buttonHadnler: () => void;
  isCart: boolean;
}) => {
  return (
    <button
      onClick={buttonHadnler}
      className="bg-orange-500 hover:bg-slate-500 rounded-md p-4"
    >
      {isCart ? "Remove from cart" : "Add to cart"}
    </button>
  );
};
export default ButtonProduct;
