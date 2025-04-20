"use client";
import LoadingImage from "@/Components/LoadingImage";
import { useCartHandele } from "@/utils/cart.hook";

const Cart = () => {
  const { isEmpty, cartItems, removeCartItem, clearAllCartItems, totalPrices } =
    useCartHandele();
  if (!isEmpty)
    return (
      <div className=" min-h-[650px] flex items-center justify-center">
        <div className="bg-red-300 p-2 my-2 rounded-lg">
          <h2 className="text-red-500 font-semibold">Empty cart</h2>
        </div>
      </div>
    );

  return (
    <div className="px-2 md:px-0">
      <h2 className="font-extrabold text-2xl border-b-2 border-r-orange-400 border-solid">
        Cart List:
      </h2>
      <div className="flex flex-col md:min-h-[660px] gap-3 md:flex-row-reverse justify-between">
        <ul className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2 py-3">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="bg-slate-300 flex flex-col rounded-lg p-2 shadow"
            >
              <div className="w-full md:w-72 rounded-lg">
                <LoadingImage className="rounded-lg" src={item.images[0]} />
              </div>
              <h2 className="text-lg">{item.name}</h2>
              <p>
                Price:
                <span className="text-red-500">
                  {Number(item.price).toFixed(2)}
                </span>
                $
              </p>
              <button
                onClick={() => removeCartItem(item._id)}
                className="bg-orange-500 hover:bg-slate-500 rounded-md p-4"
              >
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
        <div className="p-2 md:max-h-60 md:min-w-60 flex md:flex-col md:justify-center md:items-center bg-slate-500 rounded-md">
          <h2 className="text-xl text-white font-bold">
            Total Cart: <span>{cartItems.length}</span>
          </h2>
          <p className="text-lg text-red-200">
            Price: <span>{totalPrices}</span>
          </p>
          <button
            onClick={() => clearAllCartItems()}
            className="bg-orange-500 hover:bg-orange-300 rounded-md p-4"
          >
            Remove All cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
