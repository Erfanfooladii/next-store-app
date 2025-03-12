import { Data, Product } from "@/Interfaces/products";
import Link from "next/link";

const ListProducts = ({ data }: { data: Data }) => {
  return (
    <ul className="flex flex-col justify-between sm:flex-wrap sm:flex-row gap-5">
      {data.products.map((product: Product) => (
        <li
          key={product._id}
          className="flex gap-4 w-full sm:w-64 flex-col bg-slate-300 p-2 shadow-lg rounded-md"
        >
          <Link href={product._id}>
            <div className="w-full h-52">
              <img
                src={product.images[0]}
                alt="image product"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg">{product.name}</h3>
              <h4 className="text-2xl">category: {product.category.name}</h4>
              <p>
                price: <span>{product.price}</span>$
              </p>
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
