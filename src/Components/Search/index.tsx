import { ProviderMobileSize } from "@/Providers/ResponsiveSize";
import useSearch from "@/stores/searchStore";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Search = () => {
  const { setSearch } = useSearch();
  const [searchValue, setSearchValue] = useState<string>("");
  const searchHandeler = (e: FormEvent) => {
    e.preventDefault();
    setSearch(searchValue);
  };
  return (
    <ProviderMobileSize isReverse={false}>
      <form
        onSubmit={searchHandeler}
        className=" flex gap-1 w-full rounded-full bg-white p-1"
      >
        <input
          type="text"
          placeholder="Search..."
          className="p-1 rounded-full w-full focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-slate-500 rounded-full p-2 hover:bg-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </form>
    </ProviderMobileSize>
  );
};
export default Search;
