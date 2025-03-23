import { useQuery } from "@tanstack/react-query";
import getTopSellins from "./api";
import { Product } from "@/Interfaces/products";

const useGetTopSellins = () => {
  return useQuery<Product[], Error>({
    queryKey: ["data"],
    queryFn: () => getTopSellins(),
  });
};

export default useGetTopSellins;
