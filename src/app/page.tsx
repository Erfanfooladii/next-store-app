"use client";
import ListProducts from "./Info/_Components/ListProducts";
import Aside from "./Info/_Components/Aside";
import Pagination from "./Info/_Components/Pagination";

export default function Home() {
  return (
    <div className="px-2 py-3">
      <div className="flex gap-3">
        <ListProducts />
        <Aside />
      </div>
      <Pagination />
    </div>
  );
}
