import { useQuery } from "@tanstack/react-query";
import { getProductId } from "./api";

export const useGetProductId = (id: string) => {
  return useQuery({
    queryKey: ["productId"],
    queryFn: () => getProductId(id),
  });
};
