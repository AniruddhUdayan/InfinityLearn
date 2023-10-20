"use client";
// import LandingExam from "../../components/LandingExam"
import LandingExam from "@/components/examPage/LandingExam";
import Header from "@/components/header/header.jsx";
import Footer from "@/components/footer";
import Download from "@/components/examPage/Download";
import School from "@/components/examPage/School";
import Promise from "@/components/examPage/Promise";
import Rankers from "@/components/examPage/Rankers";
import Courses from "@/components/examPage/Courses";
import Study from "@/components/examPage/Study";
import Revise from "@/components/examPage/Revise";
import Masterclasses from "@/components/examPage/Masterclasses";
import Scholarship from "@/components/examPage/Scholarship";
import Books from "@/components/examPage/Books";
import Faculty from "@/components/examPage/Faculty";

const ExamPage = () => {
  return (
    <div className="poppins">
      <Header />
      <LandingExam />
      <Promise />
      <Courses />
      <Books />
      <Scholarship />
      <Faculty />
      <Masterclasses />
      <Revise />
      <Study />
      <Rankers />
      <School />
      <Download />
      <Footer />
    </div>
  );
};

export default ExamPage;
