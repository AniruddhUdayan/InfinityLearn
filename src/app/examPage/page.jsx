"use client";
// import LandingExam from "../../components/LandingExam"
import LandingExam from '@/components/examPage/LandingExam'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Download from '@/components/examPage/Download'
import School from '@/components/examPage/School'
import Promise from '@/components/examPage/Promise'
import Rankers from '@/components/examPage/Rankers'

const ExamPage = () => {
    return (
        <>
            <Header />
            <LandingExam />
            <Promise />
            <Rankers />
            <School />
            <Download />
            <Footer /> 
        </>
    )
}

export default ExamPage;
