import Image from "next/image";
import React from "react";
import whiteLogo from "../public/assets/Logos/Svgs/white-logo-circle.svg";
import NavigationMenuSection from "@/components/NavigationMenuSection";

function Header() {
  return (
    <div className="w-full h-24 z-[100]  flex items-center sticky top-0  bg-[#F0F1EE]">
      <div className="w-[33.333%] flex items-center h-full pl-10">
        <Image
          height={40}
          src={whiteLogo}
          alt="header-logo"
          className="mt-1.5"
        />
        <h3 className="font-medium text-2xl ml-3">cssnovo</h3>
      </div>
      <div className="w-[33.333%] h-full flex items-center justify-center">
        <NavigationMenuSection />
      </div>
      <div className="w-[33.333%] h-full flex justify-end items-center">
        <button className="text-black font-regular hover:bg-slate-50 px-4  py-2 rounded-lg mr-4">
          Login
        </button>
        <button className="bg-black text-white font-regular px-4 py-2 rounded-lg mr-10">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
