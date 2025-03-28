import useGetTopSellins from "@/app/api/topSellins/hook";
import TopSellinsItems from "./TopSellinsItems";

const TopSellins = () => {
  const { data, isLoading, error } = useGetTopSellins();
  if (error) return <div className="bg-red-400 p-2">{error.message}</div>;
  if (isLoading) return <div className="bg-red-400 p-2">Loaindg...</div>;
  return (
    <div>
      <h2 className="text-lg border-b border-r-orange-300">
        Top Sellins Products
      </h2>
      <ul className="flex flex-col gap-1">
        {data?.map((item) => (
          <TopSellinsItems key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default TopSellins;
