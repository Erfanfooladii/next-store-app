import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState } from "react";

export const useCartHandele = () => {
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
  return {
    isEmpty,
    cartItems,
    removeCartItem,
    clearAllCartItems,
    totalPrices,
  };
};
