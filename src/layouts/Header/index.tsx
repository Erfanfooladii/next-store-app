"use client";
import { useEffect, useState } from "react";
import menuIcon from "@/layouts/Header/assets/menu-navigation-grid-1528-svgrepo-com.png";
import closeIcon from "@/layouts/Header/assets/icons8-close-67.png";
import Image from "next/image";
import Menu from "./Components/Menu";
export function Header() {
  const location = window.location.pathname;
  const [title, setTitle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      <div className="w-full sm:w-2/3 m-auto flex justify-between flex-row-reverse p-2 items-center">
        <h1 className="text-black text-3xl">{title}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-slate-300 bg-blue-600 p-2 w-12 justify-center h-12 flex items-center rounded-full"
        >
          {isOpen ? (
            <Image src={closeIcon} alt="icon cloase image" />
          ) : (
            <Image src={menuIcon} alt="icon menu image" />
          )}
        </button>
      </div>
      {isOpen && <Menu />}
    </header>
  );
}
