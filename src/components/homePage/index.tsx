"use client";
import React, { useEffect } from "react";
import Header from "../header.jsx";
import Footer from "../homePage/footer.jsx";
import FirstSection from "./firstSection.jsx";
import SecondSection from "./secondSection.jsx";
import ThirdSection from "./thirdSection.jsx";
import FourthSection from "./fourthSection.jsx";
import FifthSection from "./fifthSection.jsx";
import SixthSection from "./sixthSection.jsx";
import SeventhSection from "./seventhSection.jsx";
import Download from "@/components/examPage/Download/index.js";
import analytics from "../../utils/analytics.jsx";
import LoginPopup from "../LoginPopup";
import SelectGradePopup from "../common/SelectGradePopup.jsx";
import PackageSummary from "../PackageSubscription/PackageSummary.jsx";
import PackageSubscription from "../PackageSubscription/index.jsx";
const HomePage = () => {
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
      {/* <PackageSubscription /> */}
      <SelectGradePopup />
    </div>
  );
};

export default HomePage;
