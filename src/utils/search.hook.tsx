import useSearch from "@/stores/searchStore";
import { FormEvent, useState } from "react";

type SearchTypes = {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchHandeler: (e: FormEvent<HTMLFormElement>) => void;
};

export const useSearchHandele = (): SearchTypes => {
  const { setSearch } = useSearch();
  const [searchValue, setSearchValue] = useState<string>("");

  const searchHandeler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchValue);
  };

  return {
    searchValue,
    setSearchValue,
    searchHandeler,
  };
};
