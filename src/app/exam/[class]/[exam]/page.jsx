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
import Study from '@/components/examPage/Study'
import Revise from '@/components/examPage/Revise'
import Masterclasses from '@/components/examPage/Masterclasses';
import Scholarship from '@/components/examPage/Scholarship'
import Books from '@/components/examPage/Books'
import Faculty from '@/components/examPage/Faculty'
import PackageSubscription from '@/components/PackageSubscription'

const ExamPage = ({ params }) => {
    return (
        <div className='poppins'>
            <Header />
            <PackageSubscription />
            <LandingExam classFor={params.class} examFor={params.exam} />
            <Promise classFor={params.class} examFor={params.exam} />
            <Courses classFor={params.class} examFor={params.exam} />
            <Books classFor={params.class} examFor={params.exam} />
            <Scholarship classFor={params.class} examFor={params.exam} />
            <Faculty classFor={params.class} examFor={params.exam} />
            <Masterclasses classFor={params.class} examFor={params.exam} />
            <Revise classFor={params.class} examFor={params.exam} />
            <Study classFor={params.class} examFor={params.exam} />
            <Rankers classFor={params.class} examFor={params.exam} />
            <School classFor={params.class} examFor={params.exam} />
            <Download classFor={params.class} examFor={params.exam} />
            <Footer />
        </div>
    )
}

export default ExamPage;
