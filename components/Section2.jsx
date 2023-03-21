import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <div className="w-full h-[80vh] flex pt-10 bg-[#F0F1EE]">
      <div className="w-1/2 h-full  flex flex-col justify-center px-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="scale-150  rounded-3xl "
          src="https://player.vimeo.com/progressive_redirect/download/810029173/container/c56cf4f6-1ee5-4037-ad36-8069dc4bf9ff/e037d239-d40b4c1b/x2download.app-make_a_framer_website_in_minutes-%281080p60%29.mp4%20%28720p%29.mp4?expires=1679378769&loc=external&signature=334f54f95cfb30d58b60b97073508f9035393d0ea910084eaa2cd77a00bf884c"
        ></video>
      </div>
      <div className="w-1/2 h-full  flex flex-col justify-center px-20">
        <h1 className="text-6xl font-medium text-[#161616]">
          Debug your <br /> code using AI
        </h1>

        <ul>
          <li className="font-regular text-xl mt-10 flex text-[#161616]">
            <Image
                width={28}
                height={3}
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              alt="tick"
              className=" mr-2"
            />{" "}
            Faster Debugging Using AI
          </li>
          <li className="font-regular text-xl mt-4 flex text-[#161616]">
            <Image
                width={28}
                height={3}
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              alt="tick"
              className=" mr-2"
            />{" "}
            Css and Sass
          </li>
          <li className="font-regular text-xl mt-4 flex text-[#161616]">
            <Image
                width={28}
                height={3}
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              alt="tick"
              className=" mr-2"
            />{" "}
            Other Frameworks
          </li>
        </ul>

        <button className="bg-white text-[#161616] border-[#161616] border-2 font-regular w-fit text-lg px-6 py-2 mt-10 rounded-md">
          Try it now
        </button>
      </div>
    </div>
  );
}

export default Section2;
