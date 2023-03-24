import Image from "next/image";
import React, { useEffect } from "react";
import whiteLogo from "../public/assets/Logos/Svgs/white-logo-circle.svg";
import NavigationMenuSection from "@/components/NavigationMenuSection";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header(props) {
  const { data: session } = useSession();

  return (
    <header
      className={`w-full h-24 z-50  flex items-center sticky top-0  ${
        props.nobgcolor != true ? "bg-[#F0F1EE]" : ""
      }  `}
    >
      <Link
        href="/"
        className="w-[33.333%] hover:opacity-80 transition-opacity flex items-center h-full cursor-pointer pl-10"
      >
        <Image
          height={40}
          src={whiteLogo}
          alt="header-logo"
          className="mt-1.5"
        />
        <h3 className="font-medium text-2xl text-[#161616] ml-3">
          {props.dashboard ? "cssnovo tools" : "cssnovo"}
        </h3>
      </Link>
      <div className="w-[33.333%] h-full flex items-center justify-center">
        {props.dashboard !== true ? <NavigationMenuSection /> : ""}
      </div>
      <div className="w-[33.333%] h-full flex justify-end items-center">
        {props.dashboard ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Image
                width={40}
                src={session?.user.image}
                alt="profile"
                height={40}
                className="rounded-full mr-14 cursor-pointer hover:opacity-80 transition-opacity "
              />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[180px] mr-10 bg-white  rounded-md p-[5px] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
              >
                <DropdownMenu.Item
                  onClick={() => signOut()}
                  className="group font-regular cursor-pointer text-[14px] leading-none text-[#4352FF]/80 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none hover:bg-[#4352FF]/80 data-[highlighted]:text-violet1"
                >
                  Logout
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                <DropdownMenu.Item className="group font-regular cursor-pointer text-[14px] leading-none text-[#4352FF]/80 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none hover:bg-[#4352FF]/80 data-[highlighted]:text-violet1">
                  Upgrade
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  disabled
                  className="group font-regular cursor-pointer text-[14px] leading-none text-[#4352FF]/80 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none hover:bg-[#4352FF]/80 data-[highlighted]:text-violet1"
                >
                  Basic plan
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ) : (
          <div>
            {session ? (
              <div className="flex" >
                <Link
                  href="/tools"
                  className="bg-[#161616] text-white font-regular px-4 py-1 flex items-center text-sm rounded-lg mr-5"
                >
                  Go to tools
                </Link>
                <Image
                  width={40}
                  src={session?.user.image}
                  alt="profile"
                  height={40}
                  className="rounded-full mr-14 cursor-pointer hover:opacity-80 transition-opacity "
                />
              </div>
            ) : (
              <div>
                <Link
                  href="/login"
                  className="text-[#161616] font-regular hover:bg-slate-50 px-4  py-2 rounded-lg mr-4"
                >
                  Login
                </Link>
                <Link
                  href="/pricing"
                  className="bg-[#161616] text-white font-regular px-4 py-2 rounded-lg mr-10"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
