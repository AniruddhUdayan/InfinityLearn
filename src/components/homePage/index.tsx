"use client";
import React, { useEffect } from "react";
import Header from "../header.jsx";
<<<<<<< HEAD
import Footer from "./footer.jsx";
import FirstSection from "./firstSection.jsx";
import SecondSection from "./secondSection.jsx";
=======
import Footer from "../homePage/footer.jsx";
import FirstSection from "./firstSection/firstSection.jsx";
import SecondSection from "./secondSection/secondSection.jsx";
>>>>>>> db7ecd6dc6b500faff30f2746dcc4dbf1b0919d8
import ThirdSection from "./thirdSection.jsx";
import FourthSection from "./fourthSection.jsx";
import FifthSection from "./fifthSection.jsx";
import SixthSection from "./sixthSection.jsx";
import SeventhSection from "./seventhSection.jsx";
import Download from "@/components/examPage/Download/index.js";
import analytics from "../../utils/analytics.jsx";
import LoginPopup from "../LoginPopup";

import SelectGradePopup from "../common/SelectGradePopup.jsx";
import BookSessionPopup from "../bookSessionPopup";
import PackageSubscription from "../PackageSubscription/index.jsx";
const HomePage = () => {
<<<<<<< HEAD
    useEffect(() => {
        analytics.page() 
      }, [])
    return (
        <div>
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            {/* <Download /> */}
            <SixthSection />
            <SeventhSection />
            <Footer/>
            <LoginPopup />
            <SelectGradePopup />
            <BookSessionPopup />
        </div>
    )
}

=======
  useEffect(() => {
    analytics.page();
  }, []);
  return (
    <div>
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
      <LoginPopup />
      <SelectGradePopup />
      {/* <PackageSubscription /> */}
      <BookSessionPopup />
    </div>
  );
};
>>>>>>> db7ecd6dc6b500faff30f2746dcc4dbf1b0919d8

export default HomePage;
