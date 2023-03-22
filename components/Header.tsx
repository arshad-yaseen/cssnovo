import Image from "next/image";
import React from "react";
import whiteLogo from "../public/assets/Logos/Svgs/white-logo-circle.svg";
import NavigationMenuSection from "@/components/NavigationMenuSection";
import Link from "next/link";

function Header() {


  return (
    <header className="w-full h-24 z-50  flex items-center sticky top-0  bg-[#F0F1EE]">
      <Link href="/" className="w-[33.333%] hover:opacity-80 transition-opacity flex items-center h-full cursor-pointer pl-10">
        <Image
          height={40}
          src={whiteLogo}
          alt="header-logo"
          className="mt-1.5"
        />
        <h3 className="font-medium text-2xl text-[#161616] ml-3">cssnovo</h3>
      </Link>
      <div className="w-[33.333%] h-full flex items-center justify-center">
        <NavigationMenuSection />
      </div>
      <div className="w-[33.333%] h-full flex justify-end items-center">
        <Link href="/login" className="text-[#161616] font-regular hover:bg-slate-50 px-4  py-2 rounded-lg mr-4">
          Login
        </Link>
        <Link href="/pricing" className="bg-[#161616] text-white font-regular px-4 py-2 rounded-lg mr-10">
          Signup
        </Link>
      </div>
    </header>
  );
}

export default Header;
