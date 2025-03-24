import React from "react";
import { Data } from "@/Interfaces/products";
import usePage from "@/stores/pageStore";
import useData from "@/stores/dataStore";
import ButtonPagination from "./ButtonPagination";

const Pagination = () => {
  const { data } = useData();

  const totalPages = (data as Data)?.pagination?.totalPages || 0;
  const totalButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    totalButtons.push(i);
  }

  const { setNumberPage, numberPage } = usePage();
  return (
    <div className="my-3 flex justify-center flex-wrap gap-2">
      {totalButtons.map((pageNumber, index) => (
        <ButtonPagination
          key={index}
          index={index}
          pageNumber={pageNumber}
          numberPage={numberPage}
          setNumberPage={setNumberPage}
        />
      ))}
    </div>
  );
};

export default Pagination;
