import {
  AccountIcon,
  LogoutIcon,
  StoreIcon,
} from "@/layouts/Header/icons/icons";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

const ButtonsProfileHeader = () => {
  const { cartItems } = useCartStore();
  const { push } = useRouter();
  const { isAuthenticated, logoutUserAuth } = useAuthStore();
  const authButtonHadeler = () => {
    if (!isAuthenticated) {
      push("/register");
    } else {
      logoutUserAuth();
    }
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={authButtonHadeler}
        className="p-2 hover:bg-slate-300 rounded-full transition-transform"
      >
        {!isAuthenticated ? <AccountIcon /> : <LogoutIcon />}
      </button>
      <button
        onClick={() => push("/Cart")}
        className="p-2 relative hover:bg-slate-300 rounded-full transition-transform"
      >
        <StoreIcon />
        <span className="w-6 rounded-full h-6 top-[-10px] left-[-2px] bg-red-600 absolute">
          {!isAuthenticated ? "0" : cartItems.length}
        </span>
      </button>
    </div>
  );
};

export default ButtonsProfileHeader;
