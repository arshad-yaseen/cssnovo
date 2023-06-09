import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import SplitType from "split-type";

function Section2() {

  useEffect(()=> {

    gsap.registerPlugin(ScrollTrigger);

    const HeroTitle = new SplitType('h1.section-2-title',{ types: 'chars' })
    const chars = HeroTitle.chars
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2", 
        start: "top 170%", 
      }
    });
    
    tl.fromTo(
      chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1,
        ease: 'power4.out',
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2", 
        start: "top 160%", 
      }
    });

    tl2.fromTo(
      "div.section-2-video",
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power4.out',
      }
    );

  },[])

  return (
    <div id="section2" className="w-full h-[80vh] flex pt-10 bg-[#F0F1EE]">
      <div className="w-1/2 h-full section-2-video  flex flex-col justify-center px-20 overflow-hidden">
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
      <div className="w-1/2 h-full  flex flex-col justify-center px-20">
        <h1 className="text-6xl clip-polygon section-2-title font-medium text-[#161616]">
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
