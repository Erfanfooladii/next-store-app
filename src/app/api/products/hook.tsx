import { Data } from "@/Interfaces/products";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./api";

export const useGetProduct = (
  search: string,
  page: string,
  category: string
) => {
  return useQuery<Data | undefined, Error>({
    queryKey: ["data", search, page, category],
    queryFn: () => getData(search, page, category),
  });
};
