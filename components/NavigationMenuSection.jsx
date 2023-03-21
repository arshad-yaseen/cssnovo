import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const NavigationMenuSection = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center  m-0 flex list-none rounded-[6px] bg-white p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#161616] hover:bg-slate-50 rounded-md  group flex select-none items-center justify-between gap-[2px]  px-3 py-2 text-[15px] font-regular leading-none outline-none ">
            Tools
            <CaretDownIcon
              className="text-[#161616] relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0  h-[500px] w-[420px] overflow-scroll">
            <main className="flex  w-full h-full rounded-2xl px-4 pt-4 bg-white">
              <ul className="h-full w-full ">
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Design to Code{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Review Code{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Debugging Code{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Optimize and Improve Performance of Code{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Framework Converter{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    SCSS, CSS Converter{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    A/B Testing
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Responsive CSS Converter{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Responsive Framework Converter{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Auto CSS Code Generator from HTML{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Framework Code From Html and CSS{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Animation and Transition Generator{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    Responsive Design Checker{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
                <li className="flex flex-col p-3 hover:bg-slate-50 rounded-md cursor-pointer group">
                  <h1 className="font-regular">
                    {" "}
                    CSS To All Browser Compatible Code{" "}
                    <span className="absolute right-10 group-hover:right-8 group-hover:opacity-100 opacity-0 duration-300 transition-all text-slate-500 text-2xl">
                      <BsArrowRightShort />
                    </span>
                  </h1>
                </li>
              </ul>
            </main>
          </NavigationMenu.Content>
        </NavigationMenu.Item>


        <NavigationMenu.Item>
          <Link
            className="text-[#161616] hover:bg-slate-50 rounded-md  block select-none  px-3 py-2 text-[15px] font-regular leading-none no-underline outline-none "
            href="/playground"
          >
            Playground
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className="text-[#161616] hover:bg-slate-50 rounded-md  block select-none  px-3 py-2 text-[15px] font-regular leading-none no-underline outline-none "
            href="/pricing"
          >
            Pricing
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className="text-[#161616] hover:bg-slate-50 rounded-md  block select-none  px-3 py-2 text-[15px] font-regular leading-none no-underline outline-none "
            href="/support"
          >
            Support
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuSection;
