import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import {BsCaretRightFill} from "react-icons/bs";
import SplitType from "split-type";

function HomeToolsExamples() {

    useEffect(()=> {

        gsap.registerPlugin(ScrollTrigger);
    
        const HeroTitle = new SplitType('h1.tools-example-section-title',{ types: 'chars' })
        const chars = HeroTitle.chars
      
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#toolsExampleSection", 
            start: "top 350%", 
          }
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#toolsExampleSection", 
            start: "top 340%", 
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
        tl2.fromTo(
          "div.tools-example-section-tools",
          {
            opacity: 0
          },
          {
            opacity: 1,
            stagger: 0.1,
            duration: 2,
            ease: 'power4.out',
          }
        );
    
      },[])

  return (
      <div id="toolsExampleSection" className="flex justify-center mb-24">
        <div className="h-[105vh]  w-[90%] rounded-3xl flex flex-col items-center bg-[#E5E2DF] mt-16  text-white">
        <h1 className="text-5xl tools-example-section-title clip-polygon font-medium text-center mt-24 leading-[94px] text-[#161616] ">
        Explore advanced tools
        </h1>

        <div className="w-full flex flex-wrap justify-center h-full  py-12 px-24" > 

        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Design to Code</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Review Code</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Debugging Code</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Optimize Code</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Framework Converter</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >SCSS, CSS Converter</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >A/B Testing</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Responsive CSS Converter</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Responsive Framework Converter</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Auto CSS Code Generator from HTML</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Framework Code From Html and CSS</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Animation and Transition Generator</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >Responsive Design Checker</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>
        <div className="w-fit mx-4 my-4 cursor-pointer tools-example-section-tools hover:opacity-70 transition-opacity h-[60px] bg-white px-6 rounded-xl border-black border-2 flex  items-center ">
            <h1 className="text-black font-regular text-lg mr-2 " >CSS To All Browser Compatible Code</h1>
            <BsCaretRightFill className="text-lg text-black flex items-center" /> 
        </div>

        </div>

      </div>
      </div>
  );
}

export default HomeToolsExamples;
