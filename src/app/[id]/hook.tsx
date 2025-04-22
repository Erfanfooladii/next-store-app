import { useEffect, useState } from "react";
import { useGetProductId } from "./api/hook";
import { useCartStore } from "@/stores/cartStore";

export const useProductCard = ({ id }: { id: string }) => {
  const { addCartItem, removeCartItem, cartItems } = useCartStore();
  const { isLoading, data, error } = useGetProductId(id);
  const [isCart, setIsCart] = useState<boolean>(false);
  useEffect(() => {
    const isCartItem = cartItems.some((item) => item._id === id);
    setIsCart(isCartItem);
  }, [cartItems, id]);
  const buttonHadnler = () => {
    if (!data) return;
    if (isCart) {
      setIsCart(false);
      removeCartItem(data!._id);
    } else {
      setIsCart(true);
      addCartItem(data);
    }
  };
  return { isLoading, error, data, isCart, buttonHadnler };
};
