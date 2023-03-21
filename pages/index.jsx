import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DarkLogoRounded from "../public/assets/Logos/Svgs/black-logo-rounded-border.svg";
import OverviewSection from "@/components/OverviewSection.jsx";
import Section1 from "@/components/Section1.jsx";
import Section2 from "@/components/Section2.jsx";
import Section3 from "@/components/Section3.jsx";
import Head from "next/head";
import ConversionExampleSection from "@/components/ConversionExampleSection.jsx";
import HomeToolsExamples from "@/components/HomeToolsExamples.jsx";
import Pricing from "@/components/Pricing.jsx";
import Footer from "@/components/Footer.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let data_scroll_container = document.querySelector("[data-scroll-container]");
    import("locomotive-scroll").then(locomotiveModule => {
      if(!data_scroll_container) return;
      const scroll = new locomotiveModule.default({
        el: data_scroll_container,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, []);

  return (
    <div  >
      <Head>
        <title>Cssnovo - Your CSS Second Brain - AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={DarkLogoRounded.src} />
      </Head>
      <Header />
      <div data-scroll-container >
      <Hero />
      <OverviewSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <ConversionExampleSection />
      <HomeToolsExamples />
      <Pricing />
      <Footer />
      </div>
      
    </div>
  );
}
