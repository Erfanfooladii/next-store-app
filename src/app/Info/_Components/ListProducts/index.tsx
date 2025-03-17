import { useGetProduct } from "@/app/api/products/hook";
import { Data, Product } from "@/Interfaces/products";
import useCategory from "@/stores/categoryStore";
import useData from "@/stores/dataStore";
import usePage from "@/stores/pageStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListProducts = () => {
  const [search, setSearch] = useState<string>("");
  const { numberPage } = usePage();
  const { category } = useCategory();

  const { isLoading, data, error } = useGetProduct(
    search,
    numberPage,
    category
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
    <ul className="flex flex-wrap gap-2 flex-row">
      {data.products.map((product: Product) => (
        <li
          key={product._id}
          className=" bg-slate-300 w-full sm:w-72 p-2 shadow-lg rounded-md"
        >
          <Link href={product._id}>
            <div className="w-full h-52">
              <img
                src={product.images[0]}
                alt="image product"
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 grid-rows-3">
              <h3 className="text-lgd">{product.name}</h3>
              <h4 className="text-xl md:text-lg">
                category: {product.category.name}
              </h4>
              <button className="p-2 bg-orange-400 hover:bg-orange-300 text-white rounded-md">
                Add to cart
              </button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListProducts;
