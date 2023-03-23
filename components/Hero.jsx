import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BrandsPng from "../public/images/brands.png";
import * as Dialog from "@radix-ui/react-dialog";


function Hero() {

 

  return (
    <div className="flex h-screen flex-col items-center pt-10">
      <h1 className=" text-[72px] leading-[94px] font-medium text-[#161616] text-center ">
        <span className="home_hero_text_underline">Transform</span> your css{" "}
        <br /> code with ease
      </h1>
      <span className="text-[20px] text-[#161616] font-regular text-center mt-6 leading-[30px]">
        Unlock CSS&apos;s potential with cssnovo - Your ultimate <br /> toolkit
        for effortless and efficient web design.
      </span>
      <div className="flex mt-12">
        <button
        id="try-for-free-button"
          className="bg-[#161616] hover:bg-[#161616]/80 transition-colors text-white font-regular px-8 py-3.5 rounded-lg text-xl mr-5"
        >
          Try for free
        </button>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className=" text-[#161616] flex items-center bg-white hover:bg-[#F0F1EE] transition-colors border-[#161616] border-2 font-regular px-8 py-3.5 rounded-lg text-xl">
              <BsFillPlayCircleFill className="mr-2" /> Watch video
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow z-[100]  fixed top-[50%] left-[50%] w-[900px] translate-x-[-50%] translate-y-[-50%] rounded-[6px]    p-[25px]  focus:outline-none">
              <iframe
                className="shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] rounded-xl bg-[#171617]"
                allow="autoplay;fullscreen"
                width="900"
                height="506"
                src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=false&loop=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fws8tlpgnog4d37e%2FX2Download.app-Make%2520A%2520Framer%2520Website%2520In%2520Minutes-%25281080p60%2529.mp4%3Fraw%3D1&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true"
              ></iframe>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <span className="text-[0.950rem] font-regular text-center mt-12 text-[#161616] leading-[30px]">
        Cssnovo uses the OpenAI{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7248] to-[#6248FE] font-medium">
          GPT-4 API
        </span>{" "}
        to generate CSS code and other entire functions
      </span>

      <Image
        src={BrandsPng}
        height={60}
        alt="brands"
        className="mt-10 opacity-40"
      />
    </div>
  );
}

export default Hero;
