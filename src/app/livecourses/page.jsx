import React from "react";
import FirstSection from "@/components/livecourses/firstSection.jsx";
import SecondSection from "@/components/livecourses/secondSection.jsx";
import ThirdSection from "@/components/livecourses/thirdSection.jsx";
import FourthSection from "@/components/livecourses/fourthSection.jsx";
import FifthSection from "@/components/livecourses/fifthSection.jsx";
import EigthSection from "@/components/livecourses/eigthSection.jsx";
import SeventhSection from "@/components/livecourses/seventhSection.jsx";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Plans from "@/components/livecourses/plans.jsx";
function LiveCourse() {
  return (
    <div className=" poppins overflow-x-hidden">
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
      <Plans />
      <SeventhSection />
      <EigthSection />
      <Footer />
    </div>
  );
}
export default LiveCourse;
