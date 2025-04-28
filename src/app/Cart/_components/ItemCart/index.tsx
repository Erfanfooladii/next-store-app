import LoadingImage from "@/Components/LoadingImage";
import { Product } from "@/Interfaces/products";
import React from "react";

const ItemCart = ({
  item,
  removeHandler,
}: {
  item: Product;
  removeHandler: (id: string) => void;
}) => {
  return (
    <li className="bg-slate-300 flex flex-col rounded-lg p-2 shadow">
      <div className="w-full md:w-72 rounded-lg">
        <LoadingImage className="rounded-lg" src={item.images[0]} />
      </div>
      <h2 className="text-lg">{item.name}</h2>
      <p>
        Price:
        <span className="text-red-500">{Number(item.price).toFixed(2)}</span>$
      </p>
      <button
        onClick={() => removeHandler(item._id)}
        className="bg-orange-500 hover:bg-slate-500 rounded-md p-4"
      >
        Remove from cart
      </button>
    </li>
  );
};
export default ItemCart;
