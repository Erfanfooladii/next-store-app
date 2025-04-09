"use client";
import CategoryItem from "./InputCategorey";
import { useCategoryHandele } from "@/utils/category.hook";

const Category = () => {
  const { categories, selectedCategory, handleCheckboxChange } =
    useCategoryHandele();

  return (
    <div>
      <h2 className="text-lg border-b border-r-orange-300">Category</h2>
      <form className="">
        {categories.map((category) => (
          <CategoryItem
            selectedCategory={selectedCategory}
            handleCheckboxChange={handleCheckboxChange}
            name={category.name}
            id={category.id}
          />
        ))}
      </form>
    </div>
  );
};
export default Category;
