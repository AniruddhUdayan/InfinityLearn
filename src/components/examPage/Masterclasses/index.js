"use client";
import Image from "next/image"
import check from './../../../../public/images/check-icon.svg'
import main from './../../../../public/images/mc-main.svg'
import mainTeacher from './../../../../public/images/mc-teacher-1.svg'
import expand from './../../../../public/images/expand_more.svg'
import ClassesCardFull from './ClassesCardFull'
import { Button, Tab, Tabs } from "@mui/material"
import { useEffect, useRef, useState } from "react"

const Masterclasses = () => {
    const [tabValue, setTabValue] = useState(0)

    const subjectWise = {
        physics: [
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
            { img: main, sub: 'Physics', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        ],
        chemistry: [
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
        ],
        biology: [
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
            { img: main, sub: 'Biology', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'starts on wednesday', by: 'Ranjan M', byImg: mainTeacher, isLive: false, watching: '14.3k', time: 'July 5 at 1:00pm' },
        ]
    }
    const mostViewed = [
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
        { img: main, sub: 'Chemistry', title: 'organic chemistry reaction study', desc: 'Two line detailed description about the course [...]', started: 'Started 1 hour ago', by: 'Ranjan M', byImg: mainTeacher, isLive: true, watching: '14.3k' },
    ]
    const physicsRef = useRef(null)
    const chemistryRef = useRef(null)
    const biologyRef = useRef(null)
    const mostViewedRef = useRef(null)
    const physicsEleRef = useRef(null)
    const chemistryEleRef = useRef(null)
    const biologyEleRef = useRef(null)
    const mostViewedEleRef = useRef(null)
    const generalRef = useRef(null)
    const generalEleRef = useRef(null)

    const scrollPhysicsLeft = () => {
        physicsRef.current.scrollTo({left: physicsRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollPhysicsRight = () => {
        physicsRef.current.scrollTo({left: -physicsRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollChemistryLeft = () => {
        chemistryRef.current.scrollTo({left: chemistryRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollChemistryRight = () => {
        chemistryRef.current.scrollTo({left: -chemistryRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollBiologyLeft = () => {
        biologyRef.current.scrollTo({left: biologyRef.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollBiologyRight = () => {
        biologyRef.current.scrollTo({left: -biologyRef.current.scrollWidth, behavior: 'smooth'})
    }
    const scrollMostViewedLeft = () => {
        mostViewedRef.current.scrollTo({left: mostViewedRef.current.scrollWidth, behavior: 'smooth'})
    }
    
    const scrollMostViewedRight = () => {
        mostViewedRef.current.scrollTo({left: -mostViewedRef.current.scrollWidth, behavior: 'smooth'})
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
        tabValue === 0 && temp(chemistryRef, chemistryEleRef)
        tabValue === 1 && temp(physicsRef, physicsEleRef)
        tabValue === 2 && temp(biologyRef, biologyEleRef)
        temp(mostViewedRef, mostViewedEleRef)
        temp(generalRef, generalEleRef)
	}, [])

    return (
        <div className="p-4 lg:p-10 py-8 lg:py-10 bg-white">
            <div className="text-5xl font-bold text-center px-56 text-[#080E14] mb-10 hidden lg:block">remember concepts for a lifetime with <span className="text-[#007BFF]">masterclasses</span></div>
            <div className="text-4xl font-extrabold leading-[3rem] text-[#080E14] mb-6 lg:hidden">learn in depth with <span className="text-[#007BFF]">masterclasses</span></div>
            <div className="lg:px-48 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B] border-e-[1px] border-[#99CAFF]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B] border-e-[1px] border-[#99CAFF]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
            </div>
            <div className="-ms-4 my-10 flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar p-4 items-stretch" ref={generalRef}>
                <div className="lg:col-span-3 flex items-stretch lg:block">
                    <ClassesCardFull fullwidth={true} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                </div>
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} ref2={generalEleRef} />
            </div>
            <div className="font-bold text-[#080E14] text-4xl mt-4">subject wise<span className="hidden lg:inline"> videos</span></div>
            <div className="flex gap-4 justify-between">
                <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="my-4" themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'start' }, '& .MuiTab-root' : { backgroundColor: '#F1F2F6' } }}>
                    <Tab label="Chemistry" className="" themeColor='yellow' />
                    <Tab label="Physics" className="" themeColor='yellow' />
                    <Tab label="Biology" className="" themeColor='yellow' />
                </Tabs>
                <div className="hidden lg:flex gap-2 self-center ">
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, paddingY: '0.5rem' }} onClick={tabValue === 0 ? scrollChemistryRight : tabValue === 1 ? scrollPhysicsRight : scrollBiologyRight} >
                        <Image src={expand} alt="expand" width={10} className="rotate-180" />
                    </Button>
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, paddingY: '0.5rem' }} onClick={tabValue === 0 ? scrollChemistryLeft : tabValue === 1 ? scrollPhysicsLeft : scrollBiologyLeft} >
                        <Image src={expand} alt="expand" width={10} />
                    </Button>
                </div>

            </div>
            
            {
                tabValue === 0 && <div className="flex gap-4 overflow-x-auto lg:overflow-hidden no-scrollbar p-4 -ms-4" ref={chemistryRef}>
                    {subjectWise.chemistry.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={chemistryEleRef} />
                    ))}
                </div>
            }
            {
                tabValue === 1 && <div className="flex gap-4 overflow-x-auto lg:overflow-hidden no-scrollbar p-4 -ms-4" ref={physicsRef}>
                    {subjectWise.physics.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={physicsEleRef} />
                    ))}
                </div>
            }
            {
                tabValue === 2 && <div className="flex gap-4 overflow-x-auto lg:overflow-hidden no-scrollbar p-4 -ms-4" ref={biologyRef}>
                    {subjectWise.biology.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={biologyEleRef} />
                    ))}
                </div>
            }

            <div className="font-bold text-[#080E14] text-4xl mt-12 mb-4 flex justify-between">
                most viewed videos
                <div className="hidden lg:flex gap-2">
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollMostViewedRight} >
                        <Image src={expand} alt="expand" width={10} className="rotate-180" />
                    </Button>
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollMostViewedLeft} >
                        <Image src={expand} alt="expand" width={10} />
                    </Button>
                </div>
            </div>
            <div ref={mostViewedRef} className="flex gap-4 overflow-x-auto lg:overflow-hidden no-scrollbar p-4 -ms-4">
                {mostViewed.map((item, index) => (
                    <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={mostViewedEleRef} />
                ))}
            </div>
            <div className="mt-8 text-center hidden lg:block">
                <Button variant="contained" className="w-full lg:w-auto" sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
                    book free counselling session
                </Button>
            </div>
        </div>
    )
}

export default Masterclasses