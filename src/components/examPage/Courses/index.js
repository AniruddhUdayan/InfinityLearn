"use client";
import { Button, Tab, Tabs, radioClasses } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import LiveCourseCard from "./LiveCourseCard"
import liveCourse from './../../../../public/images/live-course-1.webp'
import CourseCard from "./CourseCard"
import greenGirl from './../../../../public/images/rc-green-girl.webp'
import expand from './../../../../public/images/expand_more.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import Image from "next/image"

const Courses = () => {
    const [tabValue, setTabValue] = useState(0)
    const recordedRef = useRef(null)
    const crashRef = useRef(null)
    const recordedEleRef = useRef(null)
    const crashEleRef = useRef(null)

    const recordedCourses = [
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
    ]
    const crashCourses = [
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
        {title: 'complete recordings', img: greenGirl, classes: 'IITJEE CLASS 11', views: '1.2k', desc: 'Full Course Coverage, Revision and Test Series', price: '1,660'},
    ]

    const scrollRecordedLeft = () => {
        recordedRef.current.scrollTo({left: recordedRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollRecordedRight = () => {
        recordedRef.current.scrollTo({left: -recordedRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollCrashLeft = () => {
        crashRef.current.scrollTo({left: crashRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollCrashRight = () => {
        crashRef.current.scrollTo({left: -crashRef.current.scrollWidth, behavior: 'smooth'})
    }

    useEffect(() => {
        const temp = ( parent, child ) => {
            if (window.innerWidth >= 1024) return
            const interval = setInterval(() => {
                if (parent.current.scrollLeft + 1 >= parent.current.scrollWidth - parent.current.offsetWidth) {
                    parent.current.scrollTo({left: 0, behavior: 'smooth'})
                } else if (parent.current.scrollLeft == 0) {
                    if (child.current.offsetWidth < parent.current.offsetWidth / 2){
                        parent.current.scrollTo({
                            left: parent.current.scrollLeft + child.current.offsetWidth/2,
                            behavior: "smooth",
                        })	
                    } else {
                        parent.current.scrollTo({
                            left: parent.current.scrollLeft + child.current.offsetWidth,
                            behavior: "smooth",
                        })
                    }
                } else {
                    parent.current.scrollTo({
                        left: parent.current.scrollLeft + child.current.offsetWidth,
                        behavior: "smooth",
                    })
                }
            }, 3000)
            return () => clearInterval(interval)    
        }
        temp(recordedRef, recordedEleRef)
        temp(crashRef, crashEleRef)
    }, [])

    return (
        <div className="p-4 lg:p-10 bg-[#F1F2F6]">
            <div className="lg:text-center font-bold text-5xl mb-10 text-[#080E14] mt-8 lg:mt-0">courses recommended by <span className="text-[#007BFF]">toppers</span></div>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="flex justify-start mb-10" themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'center' } }}>
                <Tab label="all" className="" themeColor='yellow' />
                <Tab label="live courses" className="" themeColor='yellow' />
                <Tab label="recorded" className="" themeColor='yellow' />
                <Tab label="crash courses" className="" themeColor='yellow' />
            </Tabs>

            <div className="mb-6">
                <div className="text-3xl font-bold text-[#080E14] mb-4">live courses</div>
                <div className="hidden lg:block"><LiveCourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} /></div>
                <div className="lg:hidden"><CourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} live={true} views={'1.3k'} /></div>
            </div>
            <div>
                <div className="text-3xl font-bold text-[#080E14] flex justify-between mt-6">
                    recorded courses
                    <div className="hidden lg:flex gap-2">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedRight} >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className="flex overflow-x-auto lg:overflow-hidden gap-4 py-4 no-scrollbar -ms-4 px-4 snap-x lg:snap-none" ref={recordedRef}>
                    {recordedCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={recordedEleRef} />)}
                </div>
            </div>
            <div>
                <div className="text-3xl font-bold text-[#080E14] flex justify-between mt-6">
                    crash courses
                    <div className="hidden lg:flex gap-2">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashRight} >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className="flex overflow-x-auto lg:overflow-hidden gap-4 py-4 no-scrollbar -ms-4 px-4 snap-x lg:snap-none" ref={crashRef}>
                    {crashCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={crashEleRef} />)}
                </div>
            </div>
            <div className="my-8 text-center">
                <Button variant="contained" className="w-full lg:w-auto flex gap-2 " sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
                    book free counselling session
                    <Image src={arrow} alt="arrow" width={15} className="" />
                </Button>
            </div>
        </div>
    )
}

export default Courses