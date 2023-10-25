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
import { setComponentToShow, setIsPopupShow } from "@/store/BookSession/BookSessionPopup";
import { useDispatch, useSelector } from "react-redux";
import styles from './../css/styles.module.css'

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
        <div className={styles.coursesMain}>
            <div className={styles.coursesHead}>courses recommended by <span className={styles.blue}>toppers</span></div>
            <Tabs variant="scrollable" value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className={styles.coursesTabs} themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'center' } }}>
                <Tab label="all" themeColor='yellow' />
                <Tab label="live courses" themeColor='yellow' />
                <Tab label="recorded" themeColor='yellow' />
                <Tab label="crash courses" themeColor='yellow' />
            </Tabs>

            <div className={styles.coursesMain2}>
                <div className={styles.coursesHead2}>live courses</div>
                <div className={`${styles.coursesHeadDesc} ${styles.coursesLiveDesc}`}>Get Access to the best online classes for JEE Preparation</div>
                <div className={styles.lgOnly}><LiveCourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} /></div>
                <div className={styles.lgNot}><CourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} live={true} views={'1.3k'} /></div>
            </div>
            <div>
                <div className={`${styles.coursesHead2} ${styles.coursesRecorded}`}>
                    recorded courses
                    <div className={styles.coursesBtns}>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedRight} >
                            <Image src={expand} alt="expand" width={10} className={styles.rotate180} />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollRecordedLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className={styles.coursesHeadDesc}>Experience the most engaging lectures anytime, anywhere</div>
                <div className={styles.coursesCourses} ref={recordedRef}>
                    {recordedCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={recordedEleRef} />)}
                </div>
            </div>
            <div>
                <div className={`${styles.coursesHead2} ${styles.coursesRecorded}`}>
                    crash courses
                    <div className={styles.coursesBtns}>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashRight} >
                            <Image src={expand} alt="expand" width={10} className={styles.rotate180} />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollCrashLeft} >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className={styles.coursesHeadDesc}>Crash Courses that cover complete IIT-JEE Syllabus</div>
                <div className={styles.coursesCourses} ref={crashRef}>
                    {crashCourses.map((course, index) => <CourseCard key={index} title={course.title} img={course.img} classes={course.classes} views={course.views} desc={course.desc} price={course.price} ref2={crashEleRef} />)}
                </div>
            </div>
            <div className={styles.coursesBtnWrapper}>
                <Button onClick={bookSessionPopup} variant="contained" className={styles.coursesBtn} sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
                    book free counselling session
                    <Image src={arrow} alt="arrow" width={15}  />
                </Button>
            </div>
        </div>
    )
}

export default Courses