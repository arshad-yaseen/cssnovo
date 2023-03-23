import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";

function Pricing(props) {
  let free_plans = [
    "Design to Code",
    "Review Code",
    "Debugging Code",
    "Responsive Design Checker",
    "CSS playground",
  ];
  let basic_plans = [
    "All in Free Plan",
    "Framework Converter",
    "Responsive CSS Converter",
    "CSS Code Generator from HTML",
    "CSS To Browser Compatible",
    "SCSS, CSS Converter",
  ];
  let pro_plans = [
    "All in Basic Plan",
    "Optimize code performance",
    "Animation and Transition Generator",
    "A/B Testing",
    "Framework Code From Html, CSS",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const HeroTitle = new SplitType("h1.pricing-section-title", {
      types: "chars",
    });
    const titlechars = HeroTitle.chars;
    const HeroDesc = new SplitType("p.pricing-section-desc", {
      types: "chars",
    });
    const descchars = HeroDesc.chars;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pricingSection",
        start: "top 390%",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pricingSection",
        start: "top 380%",
      },
    });

    tl.fromTo(
      titlechars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
      }
    );
    tl2.fromTo(
      descchars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.005,
        duration: 0.1,
        ease: "power4.out",
      }
    );
    tl2.fromTo(
      "div.pricing-section-plans",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  let [activeType, setActiveType] = useState("monthly");

  return (
    <div
      id="pricingSection"
      className={`h-[160vh] w-full flex items-center justify-center ${
        props.page ? "pt-24" : "pt-48"
      }  flex-col`}
    >
      <h1 className="text-6xl pricing-section-title clip-polygon font-medium  text-[#161616]">
        Choose a pricing plan
      </h1>
      <p className="font-regular text-[1.040rem] pricing-section-desc clip-polygon leading-[1.8] mt-10 text-center w-[600px] text-[#161616]">
        Discover the perfect plan to take your frontend development skills to
        the next level with our unbeatable pricing options at cssnovo.
      </p>
      <ul class="flex flex-wrap bg-white py-2 px-2 rounded-xl text-black mt-16 text-[0.900rem] font-medium text-center ">
        <li class="mr-2">
          <p
            onClick={() => setActiveType("monthly")}
            class={`inline-block px-4 py-3 rounded-lg transition-colors  ${
              activeType === "monthly"
                ? "bg-[#171617] text-white"
                : "hover:bg-[#F1F0EE] text-black"
            } cursor-pointer`}
            aria-current="page"
          >
            Monthly
          </p>
        </li>
        <li>
          <p
            onClick={() => setActiveType("yearly")}
            class={`inline-block px-4 py-3 rounded-lg transition-colors ${
              activeType === "yearly"
                ? "bg-[#171617] text-white"
                : "hover:bg-[#F1F0EE] text-black"
            }  cursor-pointer `}
          >
            Yearly
          </p>
        </li>
      </ul>

      {activeType === "monthly" ? (
        <div className="flex   w-full h-[900px] ">
          <div className="w-1/3 pricing-section-plans h-full flex flex-col justify-center items-end ">
            <div className="w-[80%] h-[90%] rounded-2xl flex flex-col bg-[#E4E3DF] items-center p-10">
              <div className="w-full h-[120px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-3xl font-medium text-[#161616]">Free</h1>
                <p className="font-regular text-lg mt-4 text-[#494849]">
                  Start using free tools now
                </p>
              </div>
              <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                  $0
                </h1>
                <p className="font-regular text-lg mt-4 text-black">
                  Free forever
                </p>
                <Link
                  href="/signup"
                  className="w-full py-2.5 flex items justify-center border-2 border-black mt-8 hover:bg-[#E4E3DE] transition-colors rounded-lg text-lg font-regular bg-white"
                >
                  Join for free
                </Link>
              </div>
              <div className="w-full h-[240px] flex flex-col  ">
                {free_plans.map((plan, index) => {
                  return (
                    <li
                      key={index}
                      className={`font-regular text-[1.040rem] ${
                        index === 0 ? "mt-10" : "mt-5"
                      }  flex text-[#161616]`}
                    >
                      <Image
                        width={25}
                        height={18}
                        src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                        alt="tick"
                        className=" mr-3"
                      />{" "}
                      {plan}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-1/3 pricing-section-plans    h-full flex flex-col justify-center items-center ">
            <div className="w-[80%] h-[90%] rounded-2xl bg-gradient-to-r from-[#FF6C49] via-[#B648A0] to-[#6249FF] p-[0.20rem] flex items-center justify-center">
              <div className="w-full h-full rounded-[0.85rem] flex flex-col bg-white items-center p-10">
                <div className="w-full h-[120px] flex flex-col  border-b border-b-[#C5C2C0]">
                  <h1 className="text-3xl font-medium text-[#161616]">Basic</h1>
                  <p className="font-regular text-lg mt-4 text-[#494849]">
                    Start using Basic tools
                  </p>
                </div>
                <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                  <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                    $4 <span className="text-xl">USD</span>
                  </h1>
                  <p className="font-regular text-lg mt-4 text-black">
                    per month
                  </p>
                  <Link
                    href="/signup"
                    className="w-full py-2.5 flex items justify-center  mt-8 hover:opacity-80 transition-opacity rounded-lg text-lg font-regular bg-black text-white"
                  >
                    Get started with basic
                  </Link>
                </div>
                <div className="w-full h-[240px] flex flex-col  ">
                  {basic_plans.map((plan, index) => {
                    return (
                      <li
                        key={index}
                        className={`font-regular text-[1.040rem] ${
                          index === 0 ? "mt-10" : "mt-5"
                        }  flex text-[#161616]`}
                      >
                        <Image
                          width={25}
                          height={18}
                          src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                          alt="tick"
                          className=" mr-3"
                        />{" "}
                        {plan}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 pricing-section-plans h-full flex flex-col justify-center items-start ">
            <div className="w-[80%] h-[90%] rounded-2xl flex flex-col bg-white items-center p-10">
              <div className="w-full h-[120px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-3xl font-medium text-[#161616]">Pro</h1>
                <p className="font-regular text-lg mt-4 text-[#494849]">
                  Become a css pro with all tools
                </p>
              </div>
              <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                  $8 <span className="text-xl">USD</span>
                </h1>
                <p className="font-regular text-lg mt-4 text-black">
                  per month
                </p>
                <Link
                  href="/signup"
                  className="w-full py-2.5 flex items justify-center  mt-8 hover:opacity-80 transition-opacity rounded-lg text-lg font-regular bg-black text-white"
                >
                  Get Pro
                </Link>
              </div>
              <div className="w-full h-[240px] flex flex-col  ">
                {pro_plans.map((plan, index) => {
                  return (
                    <li
                      key={index}
                      className={`font-regular text-[1.040rem] ${
                        index === 0 ? "mt-10" : "mt-5"
                      }  flex text-[#161616]`}
                    >
                      <img
                        width={25}
                        height={18}
                        src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                        alt="tick"
                        className=" mr-3"
                      />{" "}
                      {plan}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex    w-full h-[900px] ">
          <div className="w-1/3 pricing-section-plans h-full flex flex-col justify-center items-end ">
            <div className="w-[80%] h-[90%] rounded-2xl flex flex-col bg-[#E4E3DF] items-center p-10">
              <div className="w-full h-[120px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-3xl font-medium text-[#161616]">Free</h1>
                <p className="font-regular text-lg mt-4 text-[#494849]">
                  Start using free tools now
                </p>
              </div>
              <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                  $0
                </h1>
                <p className="font-regular text-lg mt-4 text-black">
                  Free forever
                </p>
                <Link
                  href="/signup"
                  className="w-full py-2.5 flex items justify-center border-2 border-black mt-8 hover:bg-[#E4E3DE] transition-colors rounded-lg text-lg font-regular bg-white"
                >
                  Join for free
                </Link>
              </div>
              <div className="w-full h-[240px] flex flex-col  ">
                {free_plans.map((plan, index) => {
                  return (
                    <li
                      key={index}
                      className={`font-regular text-[1.040rem] ${
                        index === 0 ? "mt-10" : "mt-5"
                      }  flex text-[#161616]`}
                    >
                      <Image
                        width={25}
                        height={18}
                        src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                        alt="tick"
                        className=" mr-3"
                      />{" "}
                      {plan}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-1/3 pricing-section-plans    h-full flex flex-col justify-center items-center ">
            <div className="w-[80%] h-[90%] rounded-2xl bg-gradient-to-r from-[#FF6C49] via-[#B648A0] to-[#6249FF] p-[0.20rem] flex items-center justify-center">
              <div className="w-full h-full rounded-[0.85rem] flex flex-col bg-white items-center p-10">
                <div className="w-full h-[120px] relative flex flex-col  border-b border-b-[#C5C2C0]">
                  <h1 className="text-3xl w-full flex font-medium text-[#161616]">
                    Basic
                    <div className="py-1 px-3 absolute right-0 text-black  border-black border-2  text-xs flex items-center rounded-md">
                      SAVE %25
                    </div>
                  </h1>
                  <p className="font-regular text-lg mt-4 text-[#494849]">
                    Start using Basic tools
                  </p>
                </div>
                <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                  <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                    $3 <span className="text-xl">USD</span>
                  </h1>
                  <p className="font-regular flex text-lg mt-4 text-black">
                    per month
                    <div className="py-1 px-3 ml-3 text-black  bg-[#E4E2DE] font-medium  text-xs flex items-center rounded-md">
                      Billed yearly
                    </div>
                  </p>
                  <Link
                    href="/signup"
                    className="w-full py-2.5 flex items justify-center  mt-8 hover:opacity-80 transition-opacity rounded-lg text-lg font-regular bg-black text-white"
                  >
                    Get started with basic
                  </Link>
                </div>
                <div className="w-full h-[240px] flex flex-col  ">
                  {basic_plans.map((plan, index) => {
                    return (
                      <li
                        key={index}
                        className={`font-regular text-[1.040rem] ${
                          index === 0 ? "mt-10" : "mt-5"
                        }  flex text-[#161616]`}
                      >
                        <Image
                          width={25}
                          height={18}
                          src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                          alt="tick"
                          className=" mr-3"
                        />{" "}
                        {plan}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 pricing-section-plans h-full flex flex-col justify-center items-start ">
            <div className="w-[80%] h-[90%] rounded-2xl flex flex-col bg-white items-center p-10">
              <div className="w-full relative h-[120px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-3xl flex font-medium text-[#161616]">
                  Pro
                  <div className="py-1 px-3 absolute right-0 text-black  border-black border-2  text-xs flex items-center rounded-md">
                    SAVE %25
                  </div>
                </h1>
                <p className="font-regular text-lg mt-4 text-[#494849]">
                  Become a css pro with all tools
                </p>
              </div>
              <div className="w-full h-[240px] flex flex-col  border-b border-b-[#C5C2C0]">
                <h1 className="text-6xl font-semibold mt-7 text-[#161616]">
                  $6 <span className="text-xl">USD</span>
                </h1>
                <p className="font-regular flex text-lg mt-4 text-black">
                  per month
                  <div className="py-1 px-3 ml-3 text-black  bg-[#E4E2DE] font-medium  text-xs flex items-center rounded-md">
                    Billed yearly
                  </div>
                </p>

                <Link
                  href="/signup"
                  className="w-full py-2.5 flex items justify-center  mt-8 hover:opacity-80 transition-opacity rounded-lg text-lg font-regular bg-black text-white"
                >
                  Get Pro
                </Link>
              </div>
              <div className="w-full h-[240px] flex flex-col  ">
                {pro_plans.map((plan, index) => {
                  return (
                    <li
                      key={index}
                      className={`font-regular text-[1.040rem] ${
                        index === 0 ? "mt-10" : "mt-5"
                      }  flex text-[#161616]`}
                    >
                      <img
                        width={25}
                        height={18}
                        src="https://assets.website-files.com/6177739448baa66404ce1d9c/619c69d4ef5e408207944d15_checkmark_circle_outlined.png"
                        alt="tick"
                        className=" mr-3"
                      />{" "}
                      {plan}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;
