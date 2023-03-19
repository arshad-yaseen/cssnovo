import React from "react";

function OverviewSection() {
  return (
    <div className="h-[70vh]  w-full flex flex-col items-center justify-center bg-[#171617] text-white">
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

      <h1 className="text-7xl font-medium text-center mt-10">
        Say goodbye to <br /> complexity styling{" "}
      </h1>
      <p className="w-[440px] text-center font-regular text-xl mt-10" >Simplify website styling with our all-in-one CSS toolkit featuring auto-generation, optimization, and real-time feedback and more tooo.</p>
    </div>
  );
}

export default OverviewSection;
