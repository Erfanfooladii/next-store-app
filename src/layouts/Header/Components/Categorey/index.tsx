"use client";
import { useContext, useState } from "react";
import { categoryContext } from "@/contexts/categoreyContext";
import CategoryItem from "./InputCategorey";

const Category = () => {
  const categories = [
    { name: "Electronics", id: "6748dfa3c9017c78628d4a87" },
    { name: "Home & Garden", id: "6748dfa3c9017c78628d4a8d" },
    { name: "Sports", id: "6748dfa3c9017c78628d4a93" },
    { name: "Books", id: "6748dfa3c9017c78628d4a90" },
    { name: "Clothing", id: "6748dfa3c9017c78628d4a8a" },
  ];
  const { setCategory } = useContext(categoryContext);
  const [isChecked, setIsChecked] = useState<string>("");
  return (
    <div className="">
      <h2 className="text-sm">Category</h2>
      <select>
        {categories.map((item) => (
          <CategoryItem name={item.name} id={item.id} />
        ))}
      </select>
    </div>
  );
};
export default Category;
