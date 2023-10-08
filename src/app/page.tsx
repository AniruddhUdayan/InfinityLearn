import Image from "next/image";
import Header from "../components/header.jsx";
import Footer from "../components/footer";
import FirstSection from "../components/homePage/firstSection.jsx";
import SecondSection from "../components/homePage/secondSection.jsx";
import ThirdSection from "../components/homePage/thirdSection.jsx";
import FourthSection from "../components/homePage/fourthSection.jsx";

import FifthSection from "../components/homePage/fifthSection.jsx";
import SixthSection from "../components/homePage/sixthSection.jsx";
import SeventhSection from "../components/homePage/seventhSection.jsx";

import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <div className=" no-scrollbar max-md:w-full">
      <Head>
        <title>Your Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Description of your page for SEO" />
        {/* Other meta tags */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <FourthSection /> */}
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />

      <Script  src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"/>
      <Script  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"/>
    </div>
  );
}
