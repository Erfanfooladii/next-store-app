"use client";
import Search from "@/Components/Search";
import Image from "next/image";
import closeIcon from "@/layouts/Header/assets/icons8-close-67.png";
import menuIcon from "@/layouts/Header/assets/menu-navigation-grid-1528-svgrepo-com.png";
import ButtonsProfileHeader from "./Components/ButtonsProfileHeader";
import { ProviderMobileSize } from "@/Providers/ResponsiveSize";
import Link from "next/link";

const TopContent = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div className="w-full sm:w-3/4 m-auto flex gap-2 sm:gap-8 justify-between flex-row-reverse p-2 items-center">
      <ButtonsProfileHeader />
      <Search />
      <div className="flex gap-2 items-center">
        <ProviderMobileSize isReverse>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-slate-300 p-2 w-12 justify-center h-12 flex items-center rounded-full"
          >
            {isOpen ? (
              <Image src={closeIcon} alt="icon close image" />
            ) : (
              <Image src={menuIcon} alt="icon menu image" />
            )}
          </button>
        </ProviderMobileSize>
        <div className="text-xl">
          <Link href="/">
            <h1>STEGAR</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopContent;
