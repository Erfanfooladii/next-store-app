"use client";
import { useCartHandele } from "@/utils/cart.hook";
import TitleCart from "./_components/TitleCart";
import ItemCart from "./_components/ItemCart";
import ListCart from "./_components/ListCart";
import EmptyCart from "./_components/EmptyCart";
import { Product } from "@/Interfaces/products";
import BottomContentCart from "./_components/BottomContentCart";

const Cart = () => {
  const { isEmpty, cartItems, removeCartItem, clearAllCartItems, totalPrices } =
    useCartHandele();
  if (!isEmpty) return <EmptyCart />;

  return (
    <div className="p-2 md:p-0">
      <TitleCart />
      <div className="flex flex-col md:min-h-[660px] gap-3 md:flex-row-reverse justify-between">
        <ListCart>
          {cartItems.map((item: Product, index: number) => (
            <ItemCart key={index} item={item} removeHandler={removeCartItem} />
          ))}
        </ListCart>
        <BottomContentCart
          totalCards={cartItems.length}
          removeAllHadler={clearAllCartItems}
          totalPrices={totalPrices}
        />
      </div>
    </div>
  );
};
export default Cart;
