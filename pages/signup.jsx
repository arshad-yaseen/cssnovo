import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import DarkLogoRounded from "../public/assets/Logos/Svgs/black-logo-rounded.svg";
import WhiteLogoRounded from "../public/assets/Logos/Svgs/white-logo-rounded.svg";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";
import gsap from "gsap";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

function Signup() {
  const { data: session } = useSession();
  let router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      ".signup-content",
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

  const handleStripe = async (data) => {

    return new Promise((resolve, reject) => {
      
    })

  }

  const onSignin = async () => {
    const { error } = await supabase
      .from("users")
      .insert({
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        payment: false,
      });
    if (error) {
      if(error.code === "23505") {
        router.push("/tools");
      }else{
        console.log("error", error);
      }
    } else {
      handleStripe(session).then(()=> {
        router.push("/tools")
      }).catch(()=> {

      })
    }
  };

  useEffect(() => {
    if (session) {
      onSignin();
    }
  }, [session]);

  return (
    <div className="w-full h-screen items-center pt-36 flex flex-col">
      <Head>
        <title>Signup | Cssnovo</title>
        <meta name="description" content="Signup to your cssnovo account" />
        <link rel="icon" href={DarkLogoRounded.src} />
      </Head>
      <Image
        src={WhiteLogoRounded}
        height={48}
        alt="white-logo-rounded"
        className="signup-content"
      />
      <h1 className="text-4xl text-black font-medium mt-6 signup-content">
        Get Started
      </h1>
      <button
        onClick={() => signIn("google")}
        className="w-[500px] flex justify-center items-center py-3.5 signup-content  bg-white rounded-lg font-medium text-lg cursor-pointer mt-12 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <AiOutlineGoogle className="text-2xl mr-2" /> Signup using Google
      </button>
      <button
        onClick={() => signIn("discord")}
        className="w-[500px] flex justify-center items-center signup-content py-3.5  bg-white rounded-lg font-medium text-lg cursor-pointer mt-3 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <BsDiscord className="text-2xl mr-2" /> Signup using Discord
      </button>
      <button
        onClick={() => signIn("github")}
        className="w-[500px] flex justify-center items-center signup-content py-3.5  bg-white rounded-lg font-medium text-lg cursor-pointer mt-3 border-[#B7B4B0] border hover:bg-[#F0F1EE] transition-colors"
      >
        <AiFillGithub className="text-2xl mr-2" /> Signup using Github
      </button>

      <div className="w-full h-32 fixed bottom-0 signup-content flex items-center justify-center">
        <h1 className="font-regular">
          Already have an account?{" "}
          <Link
            href="/login"
            className="py-2 px-4 ml-4 rounded-lg border border-[#B7B4B0]"
          >
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Signup;
