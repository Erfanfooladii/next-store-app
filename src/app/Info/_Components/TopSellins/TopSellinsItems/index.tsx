import LoadingImage from "@/Components/LoadingImage";
import { Product } from "@/Interfaces/products";

const TopSellinsItems = ({ item }: { item: Product }) => {
  return (
    <li className="flex gap-2 border-b-2 py-1 items-center last:border-b-0">
      <div className="w-11 h-11">
        <LoadingImage alt={item.name} size={5} src={item?.images[1]} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm">{item.name}</h2>
        <p className="text-orange-700">{Math.round(Number(item.price))}</p>
      </div>
    </li>
  );
};

export default TopSellinsItems;
