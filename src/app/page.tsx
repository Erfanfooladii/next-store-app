"use client";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import ListProducts from "./Info/_Components/ListProducts";
import LivePrice from "./Info/_Components/LivePrece";
import { Data } from "../Interfaces/products";
import Pagination from "./Info/_Components/Pagination";
import { useContext, useState } from "react";
import { useGetProduct } from "./api/products/hook";
import { categoryContext } from "@/contexts/categoreyContext";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<string>("1");
  const { category } = useContext(categoryContext);

  const { isLoading, data, error } = useGetProduct(search, page, category);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="p-3 rounded border-red-800 bg-red-200 text-red-600">
        Error: {error.message}
      </div>
    );
  if (!data?.products) return <div>No data found</div>;

  return (
    <div className="px-2 py-3">
      {/* <LivePrice /> */}
      <ListProducts data={data} />
      <Pagination setPage={setPage} page={page} data={data} />
    </div>
  );
}
