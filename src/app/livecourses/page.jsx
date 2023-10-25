import React from "react";
import FirstSection from "@/components/livecourses/firstSection/firstSection";
import SecondSection from "@/components/livecourses/secondSection";
import ThirdSection from "@/components/livecourses/thirdSection/thirdSection";
import FourthSection from "@/components/livecourses/fouthSection/fourthSection";
import FifthSection from "@/components/livecourses/fifthSection/fifthSection.jsx";
import EigthSection from "@/components/livecourses/eigthSection.jsx";
import SeventhSection from "@/components/livecourses/seventhSection/seventhSection";
import Header from "@/components/header";
import Faculty from "@/components/livecourses/Faculty";
import Footer from "@/components/homePage/footer";
import Head from "next/head";
import Plans from "@/components/livecourses/plans/plans.jsx";
// import NinthSection from "@/components/livecourses/ninthSection/NinthSection.jsx";
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
      {/* <SecondSection /> */}
      <ThirdSection />
      <Faculty />
      {/* <FourthSection /> */}
      <FifthSection />
      <Plans />
      <SeventhSection />
      <EigthSection />
      {/* <NinthSection /> */}
      <Footer />
    </div>
  );
}
export default LiveCourse;
