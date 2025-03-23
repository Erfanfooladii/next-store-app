"use client";
import { useEffect, useState } from "react";
import CategoryItem from "./InputCategorey";
import useCategory from "@/stores/categoryStore";

const Category = () => {
  const categories = [
    { name: "Electronics", id: "6748dfa3c9017c78628d4a87" },
    { name: "Home & Garden", id: "6748dfa3c9017c78628d4a8d" },
    { name: "Sports", id: "6748dfa3c9017c78628d4a93" },
    { name: "Books", id: "6748dfa3c9017c78628d4a90" },
    { name: "Clothing", id: "6748dfa3c9017c78628d4a8a" },
  ];
  const { setCategory } = useCategory();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    if (isChecked === false) {
      setCategory("");
    }
  }, [isChecked]);
  return (
    <div className="">
      <h2 className="text-lg border-b border-r-orange-300">Category</h2>
      <form className="">
        {categories.map((item) => (
          <CategoryItem
            setCategory={setCategory}
            key={item.id}
            name={item.name}
            id={item.id}
            checked={isChecked}
          />
        ))}
      </form>
    </div>
  );
};
export default Category;
