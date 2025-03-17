import React from "react";

const CategoryItem = ({
  name,
  id,
  setCategory,
  checked,
}: {
  name: string;
  id: string;
  setCategory: (category: string) => void;
  checked: boolean;
}) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
      <input
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCategory(e.target.value)
        }
        value={id}
        id={name}
        checked={checked}
      />
      <label className="focus:outline-none" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
export default CategoryItem;
