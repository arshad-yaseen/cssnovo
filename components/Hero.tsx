import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BrandsPng from "../public/images/brands.png"

function Hero() {

  return (
    <div className="flex h-screen flex-col items-center pt-10">
      <h1 className="text-[72px] leading-[94px] font-medium text-[#161616] text-center ">
        <span className="home_hero_text_underline">Transform</span> your css{" "}
        <br /> code with ease
      </h1>
      <span className="text-[20px] text-[#161616] font-regular text-center mt-6 leading-[30px]">
        Unlock CSS&apos;s potential with cssnovo - Your ultimate <br /> toolkit for
        effortless and efficient web design.
      </span>
      <div className="flex mt-12">
        <Link href="/pricing" className="bg-[#161616] hover:bg-[#161616]/80 transition-colors text-white font-regular px-8 py-3.5 rounded-lg text-xl mr-5">
          Try for free
        </Link>
        <button className=" text-[#161616] flex items-center bg-white hover:bg-[#F0F1EE] transition-colors border-[#161616] border-2 font-regular px-8 py-3.5 rounded-lg text-xl">
          <BsFillPlayCircleFill className="mr-2" /> Watch video
        </button>
      </div>
      <span className="text-[0.950rem] font-regular text-center mt-12 text-[#161616] leading-[30px]">
        Cssnovo uses the OpenAI{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7248] to-[#6248FE] font-medium">
          GPT-4 API
        </span>{" "}
        to generate CSS code and other entire functions
      </span>

      <Image src={BrandsPng} height={60} alt="brands" className="mt-10 opacity-40" />

    </div>
  );
}

export default Hero;
