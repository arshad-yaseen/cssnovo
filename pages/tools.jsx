import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import { FiFigma } from "react-icons/fi";
import { SiAdobexd, SiSpeedtest } from "react-icons/si";
import { FaSketch } from "react-icons/fa";
import { IoImage } from "react-icons/io5";
import { SiVitest } from "react-icons/si";
import { SiCodereview } from "react-icons/si";
import { VscDebugAltSmall } from "react-icons/vsc";
import { SiConvertio } from "react-icons/si";
import { IoIosCreate } from "react-icons/io";
import Link from "next/link.js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router.js";

function Dashboard() {
  const { data: session } = useSession();
  let router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push("/login");
    }
  }, [session]);

  let tools = [
    {
      name: "Review Code",
      description: "Review Code makes code review easier and more efficient",
      icon: (
        <SiCodereview className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Debugging Code",
      description:
        "Get to the root of the problem with Debugging Code, your go-to debugging tool.",
      icon: (
        <VscDebugAltSmall className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Optimize and Improve Performance of Code",
      description: "Make your code faster, better, and more efficient.",
      icon: (
        <SiSpeedtest className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Framework Converter",
      description: "Convert your code to your preferred framework with ease",
      icon: (
        <SiConvertio className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "SCSS, CSS Converter",
      description: "Simplify your CSS workflow with automated conversion.",
      icon: (
        <SiConvertio className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Responsive CSS Converter",
      description:
        "Convert your CSS to responsive code effortlessly and create a seamless mobile experience for your users.",
      icon: (
        <SiConvertio className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Responsive Framework Converter",
      description: "Convert your website to a responsive framework in minutes.",
      icon: (
        <SiConvertio className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
    {
      name: "Auto CSS Code Generator from HTML",
      description:
        "Generate CSS styles from HTML code effortlessly with our Auto CSS Code Generator.",
      icon: (
        <IoIosCreate className="text-4xl opacity-50 absolute right-6 top-8" />
      ),
    },
  ];

  if(!session) return (<div>Loading....</div>)

  return (
    <div>
      <Header dashboard={true} nobgcolor={true} />
      <div className="w-full flex  overflow-hidden   flex-col items-center">
        <div className="w-[800px]  h-fit flex  items-center justify-center">
          <div className="w-1/2 opacity-50 cursor-not-allowed h-[200px]  transition-shadow p-6 bg-[#E4E2DE] flex flex-col rounded-xl mr-5">
            <h1 className="font-medium text-2xl">Design to Code</h1>
            <p className="text-lg font-regular text-[#494849] mt-2">
              Convert your design to code in seconds.
            </p>
            <div className="flex mt-8">
              <FiFigma className="text-3xl " />
              <SiAdobexd className="text-3xl  ml-4" />
              <FaSketch className="text-3xl  ml-4" />
              <IoImage className="text-3xl  ml-4" />
            </div>
          </div>
          <div className="w-1/2 opacity-50 cursor-not-allowed  h-[200px] transition-shadow p-6 relative overflow-hidden bg-[#E4E2DE] flex flex-col rounded-xl mr-5">
            <h1 className="font-medium text-2xl">A/B Testing</h1>
            <p className="text-lg font-regular text-[#494849] mt-2">
              Compare your design with the original design.
            </p>
            <div className="flex mt-3">
              <SiVitest className="text-8xl opacity-50 absolute right-6" />
            </div>
          </div>
        </div>
        <div className="w-[800px]  h-[60vh] mt-5 flex flex-col overflow-scroll  items-center pr-5">
          {tools.map((tool, index) => {
            return (
              <Link
                href="/tools/review-code"
                key={index}
                className={`w-full ${
                  index !== 0
                    ? "opacity-50  pointer-events-none"
                    : "hover:shadow-lg"
                } min-h-[100px] mt-5 relative bg-[#E4E2DE]  cursor-pointer transition-shadow flex flex-col rounded-xl justify-center pl-8`}
              >
                <h1 className="font-medium text-2xl ">{tool.name}</h1>
                <p className="text-sm font-regular text-[#494849] mt-2">
                  {tool.description}
                </p>
                <div className="flex">{tool.icon}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
