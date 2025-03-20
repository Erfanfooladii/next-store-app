"use client";
import { useState } from "react";
import Menu from "./Components/Menu";
import BottomContnet from "./Components/BottomContnet";
import TopContent from "./Components/TopContent";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-orange-400 py-3">
        <TopContent isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <Menu />}
      </header>
      <BottomContnet />
    </>
  );
}
