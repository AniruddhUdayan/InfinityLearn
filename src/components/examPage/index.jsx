"use client"
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
const ExamPage = () => {
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

export default ExamPage;
