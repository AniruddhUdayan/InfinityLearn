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
import './styles.css'
import { setComponentToShow, setIsPopupShow } from "@/store/BookSession/BookSessionPopup";
import { useDispatch, useSelector } from "react-redux";

const Courses = () => {
    const [tabValue, setTabValue] = useState(0)
    const recordedRef = useRef(null)
    const crashRef = useRef(null)
    const recordedEleRef = useRef(null)
    const crashEleRef = useRef(null)
	const isPopupShow = useSelector((state) => state.bookSessionPopup.isPopupShow);	

    const dispatch = useDispatch();

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

	const bookSessionPopup = async () => {
		console.log("book session");
		dispatch(setComponentToShow("SendOtp"));
		dispatch(setIsPopupShow(!isPopupShow));
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
        <div className="courses-main">
            <div className="courses-head">courses recommended by <span className="blue">toppers</span></div>
            <Tabs variant="scrollable" value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="courses-tabs" themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'center' } }}>
                <Tab label="all" className="" themeColor='yellow' />
                <Tab label="live courses" className="" themeColor='yellow' />
                <Tab label="recorded" className="" themeColor='yellow' />
                <Tab label="crash courses" className="" themeColor='yellow' />
            </Tabs>

            <div className="courses-main-2">
                <div className="courses-head-2 courses-live">live courses</div>
                <div className="lg-only"><LiveCourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} /></div>
                <div className="lg-not"><CourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} live={true} views={'1.3k'} /></div>
            </div>
            <div>
                <div className="courses-head-2 courses-recorded">
                    recorded courses
                    <div className="courses-btns">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedRight} >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className="courses-courses" ref={recordedRef}>
                    {recordedCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={recordedEleRef} />)}
                </div>
            </div>
            <div>
                <div className="text-3xl font-bold text-[#080E14] flex justify-between mt-6">
                    crash courses
                    <div className="courses-btns">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashRight} >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className="courses-courses" ref={crashRef}>
                    {crashCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={crashEleRef} />)}
                </div>
            </div>
            <div className="courses-btn-wrapper">
                <Button onClick={bookSessionPopup} variant="contained" className="courses-btn " sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
                    book free counselling session
                    <Image src={arrow} alt="arrow" width={15} className="" />
                </Button>
            </div>
        </div>
    )
}

export default Courses