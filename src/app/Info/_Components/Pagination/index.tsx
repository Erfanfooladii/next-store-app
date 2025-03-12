import React from "react";
import { Data } from "@/Interfaces/products";

const Pagination = ({
  data,
  setPage,
  page,
}: {
  data: Data;
  setPage: (page: string) => void;
  page: string | undefined;
}) => {
  const totalPages = data.pagination?.totalPages;
  const totalButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    totalButtons.push(i);
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center my-3">
      {totalButtons.map((pageNumber, index) => (
        <button
          key={index}
          className={`w-10 h-10 sm:w-14 rounded-md sm:h-14 bg-orange-400 ${
            Number(page) === index + 1
              ? "border-orange-800 bg-white border-solid border"
              : ""
          }`}
          value={pageNumber}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.target as HTMLButtonElement;
            setPage(target.value);
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
