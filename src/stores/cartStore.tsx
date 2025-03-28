import { Product } from "@/Interfaces/products";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartStore = {
  cartItems: Array<Product>;
  addCartItem: (newCartItem: Product) => void;
  removeCartItem: (id: string) => void;
  clearAllCartItems: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addCartItem: (newCartItem) => {
        set({ cartItems: [...get().cartItems, newCartItem] });
      },
      removeCartItem: (id) => {
        set({ cartItems: get().cartItems.filter((p) => p._id !== id) });
      },
      clearAllCartItems: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
