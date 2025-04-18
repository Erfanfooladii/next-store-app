import LoadingImage from "@/Components/LoadingImage";
import { Product } from "@/Interfaces/products";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";

const ItemProduct = ({ product }: { product: Product }) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <li className=" bg-slate-300 w-full sm:w-72 p-2 shadow-lg rounded-md">
      <Link href={isAuthenticated ? product._id : "/login"}>
        <div className="w-full h-52">
          <LoadingImage src={product?.images[0]} size={15} alt={product.name} />
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
