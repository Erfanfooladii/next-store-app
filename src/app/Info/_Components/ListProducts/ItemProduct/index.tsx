import LoadingImage from "@/Components/LoadingImage";
import { Product } from "@/Interfaces/products";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import React from "react";
import ButtonItem from "./_components/ButtonItem";
import CategoryItem from "./_components/CategoryItem";
import NameItem from "./_components/NameItem";
import ImageItem from "./_components/ImageItem";

const ItemProduct = ({ product }: { product: Product }) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <li
      className=" bg-slate-300 hover:bg-slate-400 transition-discrete
 w-full sm:w-72 p-2 shadow-lg rounded-md"
    >
      <Link href={isAuthenticated ? product._id : "/login"}>
        <ImageItem name={product.name} imageSrc={product?.images[0]} />
        <div className="grid grid-cols-1 grid-rows-3">
          <NameItem name={product.name} />
          <CategoryItem category={product.category.name} />
          <ButtonItem />
        </div>
      </Link>
    </li>
  );
};

export default React.memo(ItemProduct);
