import { Product } from "@/Interfaces/products";
import Link from "next/link";

const ItemProduct = ({ product }: { product: Product }) => {
  return (
    <li className=" bg-slate-300 w-full sm:w-72 p-2 shadow-lg rounded-md">
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
  );
};
export default ItemProduct;
