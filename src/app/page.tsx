import Image from "next/image";
import Header from "../components/header.jsx";
// import Footer from "@/components/footer";
// import "./globals.css";
import Footer from "../components/homePage/footer.jsx";
import FirstSection from "../components/homePage/firstSection.jsx";
import SecondSection from "../components/homePage/secondSection.jsx";
import ThirdSection from "../components/homePage/thirdSection.jsx";
import FourthSection from "../components/homePage/fourthSection.jsx";
import React from "react";
import FifthSection from "../components/homePage/fifthSection.jsx";
import SixthSection from "../components/homePage/sixthSection.jsx";
import SeventhSection from "../components/homePage/seventhSection.jsx";

import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Download from "@/components/examPage/Download/index.js";
export default function Home() {
  return (
    <div className=" no-scrollbar poppins max-md:w-full">
      <Head>
        <title>Your Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Description of your page for SEO" />
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      {/* <Download /> */}
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}
