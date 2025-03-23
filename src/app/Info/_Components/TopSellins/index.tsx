import useGetTopSellins from "@/app/api/topSellins/hook";

const TopSellins = () => {
  const { data, isLoading, error } = useGetTopSellins();
  if (error) return <div className="bg-red-400 p-2">{error.message}</div>;
  if (isLoading) return <div className="bg-red-400 p-2">Loaindg...</div>;
  console.log(data);

  return (
    <div className="">
      <h2 className="text-lg border-b border-r-orange-300">
        Top Sellins Products
      </h2>
      <ul className="flex flex-col gap-1">
        {data?.map((item) => (
          <li
            key={item._id}
            className="flex gap-2 border-b-2 py-1 items-center last:border-b-0"
          >
            <div className="w-11 h-11">
              <img
                src={item?.images[1]}
                alt={item.name}
                className="w-full object-cover h-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm">{item.name}</h2>
              <p className="text-orange-700">
                {Math.round(Number(item.price))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopSellins;
