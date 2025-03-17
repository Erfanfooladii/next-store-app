import React from "react";
import { Data } from "@/Interfaces/products";
import usePage from "@/stores/pageStore";
import useData from "@/stores/dataStore";

const Pagination = () => {
  const { data } = useData();

  const totalPages = (data as Data)?.pagination?.totalPages || 0;
  const totalButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    totalButtons.push(i);
  }

  const { setNumberPage, numberPage } = usePage();
  return (
    <div className="my-3 flex justify-center gap-2">
      {totalButtons.map((pageNumber, index) => (
        <button
          key={index}
          className={`w-10 h-10 sm:w-14 rounded-md sm:h-14 bg-orange-400 ${
            Number(numberPage) === index + 1
              ? "border-orange-800 bg-white border-solid border"
              : ""
          }`}
          value={pageNumber}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.target as HTMLButtonElement;
            setNumberPage(target.value);
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
