"use client"
// import LandingExam from "../../components/LandingExam"
import LandingExam from '@/components/examPage/LandingExam'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Download from '@/components/examPage/Download'
import School from '@/components/examPage/School'

const ExamPage = () => {
    return (
        <>
            <Header />
            <LandingExam />
            <School />
            <Download />
            <Footer /> 
        </>
    )
}

export default ExamPage