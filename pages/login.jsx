import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import DarkLogoRounded from "../public/assets/Logos/Svgs/black-logo-rounded.svg";
import WhiteLogoRounded from "../public/assets/Logos/Svgs/white-logo-rounded.svg";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";
import gsap from "gsap";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

function Login() {
  const { data: session } = useSession();
  let router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      ".login-content",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  const onSignin = async (session) => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", session?.user?.email);
    if (data) {
      if (data.length === 0) {
        signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL + "/pricing" });
      } else {
        router.push("/tools");
      }
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      console.log(session);
      onSignin(session);
    }
  }, [session]);

  return (
    <div className="w-full h-screen items-center pt-36 flex flex-col">
      <Head>
        <title>Login | Cssnovo</title>
        <meta name="description" content="Login to your cssnovo account" />
        <link rel="icon" href={DarkLogoRounded.src} />
      </Head>
      <Image
        src={WhiteLogoRounded}
        height={48}
        alt="white-logo-rounded"
        className="login-content"
      />
      <h1 className="text-4xl text-black font-medium mt-6 login-content">
        Welcome back
      </h1>
      <button
        onClick={() => signIn("google")}
        className="w-[500px] flex justify-center items-center login-content py-3.5  bg-white rounded-lg font-medium text-lg cursor-pointer mt-12 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <AiOutlineGoogle className="text-2xl mr-2" /> Login using Google
      </button>
      <button
        onClick={() => signIn("discord")}
        className="w-[500px] flex justify-center login-content items-center py-3.5  bg-white rounded-lg font-medium text-lg cursor-pointer mt-3 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <BsDiscord className="text-2xl mr-2" /> Login using Discord
      </button>
      <button
        onClick={() => signIn("github")}
        className="w-[500px] flex justify-center login-content items-center py-3.5  bg-white rounded-lg font-medium text-lg cursor-pointer mt-3 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <AiFillGithub className="text-2xl mr-2" /> Login using Github
      </button>

      <div className="w-full h-32 fixed bottom-0 login-content flex items-center justify-center">
        <h1 className="font-regular">
          Don&apos;t have an account?{" "}
          <Link
            href="/pricing"
            className="py-2 px-4 ml-4 rounded-lg border border-[#B7B4B0]"
          >
            Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Login;
