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

function LiveCourse() {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SeventhSection />
      <EigthSection />
      <Footer />
    </div>
  );
}
export default LiveCourse;
