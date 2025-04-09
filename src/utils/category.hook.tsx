import useCategory from "@/stores/categoryStore";
import { useState } from "react";

interface CategoreyTypes {
  name: string;
  id: string;
}
type ReturnCategoryHandele = () => {
  categories: CategoreyTypes[];
  handleCheckboxChange: (categoryId: string) => void;
  selectedCategory: string | null;
};
export const useCategoryHandele: ReturnCategoryHandele = () => {
  const categories: CategoreyTypes[] = [
    { name: "Electronics", id: "6748dfa3c9017c78628d4a87" },
    { name: "Home & Garden", id: "6748dfa3c9017c78628d4a8d" },
    { name: "Sports", id: "6748dfa3c9017c78628d4a93" },
    { name: "Books", id: "6748dfa3c9017c78628d4a90" },
    { name: "Clothing", id: "6748dfa3c9017c78628d4a8a" },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { setCategory } = useCategory();
  const handleCheckboxChange = (categoryId: string) => {
    const newSelectedCategory =
      categoryId === selectedCategory ? "" : categoryId;
    setSelectedCategory(newSelectedCategory);
    setCategory(newSelectedCategory);
    console.log(categoryId);
  };
  return {
    categories,
    handleCheckboxChange,
    selectedCategory,
  };
};
