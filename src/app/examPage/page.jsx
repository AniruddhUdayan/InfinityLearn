"use client";
// import LandingExam from "../../components/LandingExam"
import LandingExam from '@/components/examPage/LandingExam'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Download from '@/components/examPage/Download'
import School from '@/components/examPage/School'
import Promise from '@/components/examPage/Promise'
import Rankers from '@/components/examPage/Rankers'
import Courses from '@/components/examPage/Courses'

const ExamPage = () => {
    return (
        <>
            <Header />
            <LandingExam />
            <Promise />
            <Courses />
            <Rankers />
            <School />
            <Download />
            <Footer /> 
        </>
    )
}

export default ExamPage;
