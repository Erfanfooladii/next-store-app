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
  const authButtonHadeler = () => {
    push("/register");
  };
  const { authList } = useAuthStore();
  return (
    <div className="flex gap-1">
      <button
        onClick={authButtonHadeler}
        className="p-2 hover:bg-slate-300 rounded-full transition-transform"
      >
        {authList.length < 0 ? <AccountIcon /> : <LogoutIcon />}
      </button>
      <button
        onClick={() => push("/Cart")}
        className="p-2 relative hover:bg-slate-300 rounded-full transition-transform"
      >
        <StoreIcon />
        <span className="w-6 rounded-full h-6 top-[-10px] left-[-2px] bg-red-600 absolute">
          {cartItems.length}
        </span>
      </button>
    </div>
  );
};

export default ButtonsProfileHeader;
