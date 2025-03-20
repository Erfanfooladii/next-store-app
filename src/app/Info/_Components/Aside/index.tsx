import Category from "@/layouts/Header/Components/Categorey";
import { ProviderMobileSize } from "@/Providers/ResponsiveSize";

const Aside = () => {
  return (
    <ProviderMobileSize isReverse={false}>
      <aside className="p-2 col-span-2 min-w-48 row-span-3 rounded-md bg-orange-400">
        <div className="">
          <Category />
        </div>
      </aside>
    </ProviderMobileSize>
  );
};
export default Aside;
