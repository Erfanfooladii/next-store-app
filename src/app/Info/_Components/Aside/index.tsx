import Category from "@/Components/Categorey";
import { ProviderMobileSize } from "@/Providers/ResponsiveSize";
import TopSellins from "../TopSellins";

const Aside = () => {
  return (
    <ProviderMobileSize isReverse={false}>
      <aside className="p-2  min-w-52 flex flex-col gap-1 rounded-md bg-orange-400">
        <div className="border-orange-100 p-1 border-2 rounded">
          <Category />
        </div>
        <div className="border-orange-100 p-1 border-2 rounded">
          <TopSellins />
        </div>
      </aside>
    </ProviderMobileSize>
  );
};
export default Aside;
