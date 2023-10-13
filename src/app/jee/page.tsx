import LandingExam from '@/components/examPage/LandingExam'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Download from '@/components/examPage/Download'
import School from '@/components/examPage/School'
import Promise from '@/components/examPage/Promise'
import Rankers from '@/components/examPage/Rankers'
import Courses from '@/components/examPage/Courses'
import Study from '@/components/examPage/Study'
import Revise from '@/components/examPage/Revise'
import Masterclasses from '@/components/examPage/Masterclasses';
import { Metadata } from 'next';
export const metadata:Metadata = {
  title:"IIT JEE 2023 Preparation, Live Classes & Self Learn - Infinity Learn",
  description:"Do you want to score well in the upcoming JEE 2023 Mains and Advanced? Join the Infinity Learn JEE course. Get the latest study material, previous year papers, and revision strategy essential for IIT JEE 2023.",
  keywords:"jee 2023, jee main 2023 exam date, neet 2022 question paper, jee course, how to crack jee mains, jee mains paper pattern, 2022 neet question paper, 2021 neet question paper, jee advanced 2023 syllabus, jee advanced syllabus, jee mains mock test, jee advanced 2023",
  openGraph:{
    title: "IIT JEE 2023 Preparation, Live Classes & Self Learn - Infinity Learn",
    description:"Do you want to score well in the upcoming JEE 2023 Mains and Advanced? Join the Infinity Learn JEE course. Get the latest study material, previous year papers, and revision strategy essential for IIT JEE 2023.",
    type:"website",
    siteName:"Infinity Learn",
  }
};
const JeePage = () => {
    return (
        <div className='poppins'>
            <Header />
            <LandingExam />
            <Promise />
            <Courses />
            <Masterclasses />
            <Revise />
            <Study />
            <Rankers />
            <School />
            <Download />
            <Footer /> 
        </div>
    )
}

export default JeePage;
