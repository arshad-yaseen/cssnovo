import Image from "next/image";
import React from "react";

function Section1() {
  return (
    <div className="w-full h-[80vh] flex bg-[#F0F1EE] ">
      <div className="w-1/2 h-full  flex flex-col justify-center px-20">
        <h1 className="text-6xl font-medium text-[#161616]">
        Design to code, <br />
in seconds
        </h1>
        <p className="font-regular text-xl mt-10 text-[#161616]">
        Convert your designs into functional code quickly and easily with Design to Code.
        </p>

        <ul>
          <li className="font-regular text-xl mt-10 flex text-[#161616]">
            <Image
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              width={28}
              height={3}
              alt="tick"
              className=" mr-2"
            />{" "}
             Not just html and css
          </li>
          <li className="font-regular text-xl mt-4 flex text-[#161616]">
            <Image
              src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
              width={28}
              height={3}
              alt="tick"
              className=" mr-2"
            />{" "}
            React, Vue, Angular, Svelte, and more
          </li>
        </ul>

        <button className="bg-white text-[#161616] border-[#161616] border-2 font-regular w-fit text-lg px-6 py-2 mt-10 rounded-md">
          Try it now
        </button>
      </div>
      <div className="w-1/2 h-full  flex flex-col justify-center px-20 overflow-hidden">
      <div
          style={{
            paddingTop: "56.25%",
            position: "relative",
            overflow: "hidden",
            transform: "scale(1.5)",
          }}
        >
          <iframe
            allowFullScreen=""
            allow="autoplay;fullscreen"
            src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fws8tlpgnog4d37e%2FX2Download.app-Make%2520A%2520Framer%2520Website%2520In%2520Minutes-%25281080p60%2529.mp4%3Fraw%3D1&poster=&time=false&progressBar=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&quality=auto&playButton=false"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              borderRadius: "1.5rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
