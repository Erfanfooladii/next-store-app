import { ProviderMobileSize } from "@/Providers/ResponsiveSize";
import Category from "../../../../Components/Categorey";

const Menu = () => {
  return (
    <ProviderMobileSize isReverse>
      <div className="w-64 p-2 fixed left-0 bg-orange-400">
        <h1>Store</h1>
        <Category />
      </div>
    </ProviderMobileSize>
  );
};
export default Menu;
