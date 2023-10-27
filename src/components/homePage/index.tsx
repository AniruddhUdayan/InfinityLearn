"use client";
import React, { useEffect } from "react";
import Header from "../header.jsx";
import Footer from "../homePage/footer.jsx";
import FirstSection from "./firstSection/firstSection.jsx";
import SecondSection from "./secondSection/secondSection.jsx";
import ThirdSection from "./thirdSection/thirdSection.jsx";
import FourthSection from "./fourthSection/fourthSection.jsx";
import FifthSection from "./fifthSection/fifthSection.jsx";
import SixthSection from "./sixthSection/sixthSection.jsx";
import SeventhSection from "./seventhSection/seventhSection.jsx";
// import Download from "@/components/examPage/Download/index.js";
import analytics from "../../utils/analytics.jsx";
import LoginPopup from "../LoginPopup";
import NinthSection from "./ninthSection/ninthSection.jsx";
import EigthSection from "./eightSection/eigthSection.jsx";
import SelectGradePopup from "../common/SelectGradePopup.jsx";
import BookSessionPopup from "../bookSessionPopup";
// import PackageSubscription from "../PackageSubscription/index.jsx";
const HomePage = () => {
  useEffect(() => {
    analytics.page();
  }, []);
  return (
    <div className=" w-screen">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      {/* <Download /> */}
      <SixthSection />
      {/* <Download /> */}

      <SeventhSection />
      <EigthSection />
      <NinthSection />

      <Footer />
      <LoginPopup />
      <SelectGradePopup />
      {/* <PackageSubscrption /> */}
      <BookSessionPopup />
    </div>
  );
};

export default HomePage;
