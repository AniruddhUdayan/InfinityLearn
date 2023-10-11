import { Button, Tab, Tabs, radioClasses } from "@mui/material"
import { useState } from "react"
import LiveCourseCard from "./LiveCourseCard"
import liveCourse from './../../../../public/images/live-course-1.svg'
import CourseCard from "./CourseCard"
import greenGirl from './../../../../public/images/rc-green-girl.svg'

const Courses = () => {
    const [tabValue, setTabValue] = useState(0)
    return (
        <div className="p-4 lg:p-10 bg-[#F1F2F6]">
            <div className="text-center font-bold text-5xl mb-6 text-[#080E14]">courses for <span className="text-[#007BFF]">you</span></div>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="flex justify-start mb-10" themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'center' } }}>
                <Tab label="all" className="" themeColor='yellow' />
                <Tab label="live courses" className="" themeColor='yellow' />
                <Tab label="recorded" className="" themeColor='yellow' />
                <Tab label="crash courses" className="" themeColor='yellow' />
            </Tabs>

            <div className="mb-10">
                <div className="text-3xl font-bold text-[#080E14] mb-4">live courses</div>
                <div className="hidden lg:block"><LiveCourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} /></div>
                <div className="lg:hidden"><CourseCard title={'IITJEE rankers course'} desc={'Full Course Coverage, Revision and Test Series'} classes={'CLASS 11, 12 & 12+'} img={liveCourse} price={'1,660'} point1={'1000+ hrs of Live Classes'} point2={'3000+ hrs of recorded content'} isRecommended={true} live={true} views={'1.3k'} /></div>
            </div>
            <div>
                <div className="text-3xl font-bold text-[#080E14]">recorded courses</div>
                <div className="flex overflow-x-auto gap-4 py-4 no-scrollbar">
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                </div>
            </div>
            <div>
                <div className="text-3xl font-bold text-[#080E14] mt-4">crash courses</div>
                <div className="flex overflow-x-auto gap-4 py-4 no-scrollbar">
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                    <CourseCard title={'complete recordings'} img={greenGirl} classes={'IITJEE CLASS 11'} views={'1.2k'} desc={'Full Course Coverage, Revision and Test Series'} price={'1,660'} />
                </div>
            </div>
            <div className="my-8 text-center">
                <Button variant="contained" className="w-full lg:w-auto" sx={{ borderRadius: '0.5rem', paddingX: '4rem' }}>
                    book free counselling session
                </Button>
            </div>
        </div>
    )
}

export default Courses