import Image from "next/image";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BrandsPng from "../public/images/brands.png"

function Hero() {
  return (
    <div className="flex h-screen flex-col items-center pt-10">
      <h1 className="text-[72px] leading-[94px] font-medium text-center ">
        <span className="home_hero_text_underline">Transform</span> your css{" "}
        <br /> code with ease
      </h1>
      <span className="text-[20px] font-regular text-center mt-6 leading-[30px]">
        Unlock CSS&apos;s potential with cssnovo - Your ultimate <br /> toolkit for
        effortless and efficient web design.
      </span>
      <div className="flex mt-12">
        <button className="bg-black hover:bg-black/80 transition-colors text-white font-regular px-8 py-3.5 rounded-lg text-xl mr-5">
          Try for free
        </button>
        <button className=" text-black flex items-center bg-white hover:bg-[#F0F1EE] transition-colors border-black border-2 font-regular px-8 py-3.5 rounded-lg text-xl">
          <BsFillPlayCircleFill className="mr-2" /> Watch video
        </button>
      </div>
      <span className="text-sm font-regular text-center mt-16 leading-[30px]">
        Cssnovo uses the OpenAI{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7248] to-[#6248FE] font-medium">
          GPT-4 API
        </span>{" "}
        to generate CSS code and other entire functions
      </span>

      <Image src={BrandsPng} height={60} alt="brands" className="mt-10 opacity-30" />

    </div>
  );
}

export default Hero;
