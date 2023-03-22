import React from 'react'
import Pricing from '../components/Pricing'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import DarkLogoRounded from "../public/assets/Logos/Svgs/black-logo-rounded-border.svg";

function Pricing() {


  return (
    <div>
        <Head>
            <title>Pricing | Cssnovo</title>
            <meta name="description" content="Discover the perfect plan to take your frontend development skills to the next level with our unbeatable pricing options at cssnovo" />
            <link rel="icon" href={DarkLogoRounded.src} />
        </Head>
        <Header />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Pricing