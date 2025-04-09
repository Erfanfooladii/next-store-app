import React from "react";

const CategoryItem = ({
  name,
  id,
  handleCheckboxChange,
  selectedCategory,
}: {
  name: string;
  id: string;
  handleCheckboxChange: (category: string) => void;
  selectedCategory: null | string;
}) => {
  return (
    <div key={id}>
      <label>
        <input
          type="checkbox"
          checked={id === selectedCategory}
          onChange={() => handleCheckboxChange(id)}
        />
        {name}
      </label>
    </div>
  );
};
export default CategoryItem;
