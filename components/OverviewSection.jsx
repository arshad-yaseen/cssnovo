import gsap from "gsap";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function OverviewSection() {

  useEffect(()=> {

    gsap.registerPlugin(ScrollTrigger);

    const HeroTitle = new SplitType('h1.overview-section-title',{ types: 'chars' })
    const chars = HeroTitle.chars
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#overview-section", 
        start: "top 100%", 
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

  },[])

  return (
    <div id="overview-section" className="h-[70vh]  w-full flex flex-col items-center justify-center bg-[#171617] text-white">
      <div className="flex w-full justify-center h-fit">
        <div className="copypaste-symbol_wrapper_1">
          <div className="copypaste-symbol_text-wrapper">
            <div
              className="copypaste-symbol_text2 font-medium"
              style={{
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              Convert
            </div>
          </div>
        </div>
       
        <div className="copypaste-symbol_wrapper_2">
          <div className="font-medium">Optimize</div>
        </div>
      </div>

      <h1 className="text-7xl clip-polygon overview-section-title font-medium text-center mt-10">
        Say goodbye to <br /> complexity styling{" "}
      </h1>
      <p className="w-[440px] text-center font-regular text-xl mt-10" >Simplify website styling with our all-in-one CSS toolkit featuring auto-generation, optimization, and real-time feedback and more tooo.</p>
    </div>
  );
}

export default OverviewSection;
