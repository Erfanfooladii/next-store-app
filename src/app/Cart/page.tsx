"use client";
import LoadingImage from "@/Components/LoadingImage";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItems, removeCartItem, clearAllCartItems } = useCartStore();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const totalPrices = cartItems
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.price),
      0
    )
    .toFixed(2);
  useEffect(() => {
    if (cartItems.length > 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cartItems]);
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
      <div className="flex flex-col">
        <ul className="flex flex-col gap-2 py-3">
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
        <div className="p-2 bg-slate-500 rounded-md">
          <h2 className="text-xl font-bold">
            Total Cart: <span>{cartItems.length}</span>
          </h2>
          <p className="text-lg">
            Price: <span>{totalPrices}</span>
          </p>
          <button
            onClick={() => clearAllCartItems()}
            className="bg-orange-500 hover:bg-slate-500 rounded-md p-4"
          >
            All cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
