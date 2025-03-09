"use client";
import { useEffect, useState } from "react";
import menuIcon from "@/app/layouts/Header/assets/menu-navigation-grid-1528-svgrepo-com.png";
import Image from "next/image";
export function Header() {
  const location = window.location.pathname;
  const [title, setTitle] = useState<string>("");
  const status = (isLocation: string) => {
    switch (isLocation) {
      case "/":
        setTitle("Home Page");
        break;
      case "/product":
        setTitle("");
        break;
    }
  };
  useEffect(() => {
    status(location);
  }, [location]);
  return (
    <header className="bg-slate-200">
      <div className="w-full sm:w-2/3 m-auto flex justify-between p-2 items-center">
        <h1 className="text-black text-3xl">{title}</h1>
        <button className="hover:bg-slate-300 p-2 w-12 justify-center h-12 flex items-center rounded-full">
          <Image src={menuIcon} alt="" />
        </button>
      </div>
    </header>
  );
}
