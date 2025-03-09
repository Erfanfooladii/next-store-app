"use client";
import { getData } from "@/utils/getApi";
import { useQuery } from "@tanstack/react-query";
import ListProducts from "./components/ListProducts";
import LivePrice from "./components/LivePrece";
import { Data } from "./Interfaces/products";
import Pagination from "./components/Pagination";

export default function Home() {
  const fetchData = async (): Promise<Data | undefined> => {
    try {
      const response: Data | undefined = await getData();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { isLoading, data, error } = useQuery<Data | undefined, Error>({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.products) return <div>No data found</div>;

  return (
    <div className="px-2 py-3">
      <LivePrice />
      <ListProducts data={data} />
      <Pagination data={data} />
    </div>
  );
}
