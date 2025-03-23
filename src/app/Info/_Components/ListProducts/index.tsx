import { useGetProduct } from "@/app/api/products/hook";
import ShowItem from "@/Components/Show";
import { Product } from "@/Interfaces/products";
import useCategory from "@/stores/categoryStore";
import useData from "@/stores/dataStore";
import usePage from "@/stores/pageStore";
import useSearch from "@/stores/searchStore";
import useShowItem from "@/stores/showStore";
import Link from "next/link";
import { useEffect } from "react";
import ItemProduct from "./ItemProduct";

const ListProducts = () => {
  const { search } = useSearch();
  const { numberPage } = usePage();
  const { category } = useCategory();
  const { showItem } = useShowItem();
  const { isLoading, data, error } = useGetProduct(
    search,
    numberPage,
    category,
    showItem
  );
  const { setData } = useData();
  useEffect(() => {
    setData(data);
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="p-3 rounded border-red-800 bg-red-200 text-red-600">
        Error: {error.message}
      </div>
    );
  if (!data?.products) return <div>No data found</div>;

  return (
    <div className=" min-w-[60vw] sm:min-w-[800px] flex gap-2 flex-col items-start">
      <ShowItem />
      <ul className="flex w-full justify-center flex-wrap gap-4 flex-row">
        {data.products.map((product: Product) => (
          <ItemProduct product={product} />
        ))}
      </ul>
    </div>
  );
};
export default ListProducts;
