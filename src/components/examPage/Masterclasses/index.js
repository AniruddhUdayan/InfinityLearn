"use client";
import Image from "next/image"
import check from './../../../../public/images/check-icon.svg'
import main from './../../../../public/images/mc-main.webp'
import mainTeacher from './../../../../public/images/mc-teacher-1.webp'
import expand from './../../../../public/images/expand_more.svg'
import ClassesCardFull from './ClassesCardFull'
import { Button, Tab, Tabs } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import './styles.css'

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
        <div className="mc-main">
            <div className="mc-head">remember concepts for a lifetime with <span className="blue">masterclasses</span></div>
            <div className="mc-head-m">learn in depth with <span className="blue">masterclasses</span></div>
            <div className="mc-pts">
                <div className="mc-pt mc-pt-border">
                    <Image src={check} alt="check" className="mc-pt-img" />
                    Advanced sessions for specific topics
                </div>
                <div className="mc-pt mc-pt-border">
                    <Image src={check} alt="check" className="mc-pt-img" />
                    Advanced sessions for specific topics
                </div>
                <div className="mc-pt">
                    <Image src={check} alt="check" className="mc-pt-img" />
                    Advanced sessions for specific topics
                </div>
            </div>
            <div className="mc-live no-scrollbar" ref={generalRef}>
                <div className="mc-live-1">
                    <ClassesCardFull fullwidth={true} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                </div>
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} ref2={generalEleRef} />
            </div>
            <div className="mc-subhead">subject wise<span className="mc-videos"> videos</span></div>
            <div className="mc-tabs-wrapper">
                <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} themeColor='yellow' sx={{ marginY: '1rem', '& .MuiTabs-flexContainer' : { justifyContent: 'start' }, '& .MuiTab-root' : { backgroundColor: '#F1F2F6' } }}>
                    <Tab label="Chemistry" className="" themeColor='yellow' />
                    <Tab label="Physics" className="" themeColor='yellow' />
                    <Tab label="Biology" className="" themeColor='yellow' />
                </Tabs>
                <div className="mc-btns-wrapper ">
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, paddingY: '0.5rem' }} onClick={tabValue === 0 ? scrollChemistryRight : tabValue === 1 ? scrollPhysicsRight : scrollBiologyRight} >
                        <Image src={expand} alt="expand" width={10} className="rotate-180" />
                    </Button>
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, paddingY: '0.5rem' }} onClick={tabValue === 0 ? scrollChemistryLeft : tabValue === 1 ? scrollPhysicsLeft : scrollBiologyLeft} >
                        <Image src={expand} alt="expand" width={10} />
                    </Button>
                </div>

            </div>
            
            {
                tabValue === 0 && <div className="mc-cards no-scrollbar" ref={chemistryRef}>
                    {subjectWise.chemistry.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={chemistryEleRef} />
                    ))}
                </div>
            }
            {
                tabValue === 1 && <div className="mc-cards no-scrollbar" ref={physicsRef}>
                    {subjectWise.physics.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={physicsEleRef} />
                    ))}
                </div>
            }
            {
                tabValue === 2 && <div className="mc-cards no-scrollbar" ref={biologyRef}>
                    {subjectWise.biology.map((item, index) => (
                        <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={biologyEleRef} />
                    ))}
                </div>
            }

            <div className="mc-most-viewed">
                most viewed videos
                <div className="mc-btns-wrapper">
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollMostViewedRight} >
                        <Image src={expand} alt="expand" width={10} className="rotate-180" />
                    </Button>
                    <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollMostViewedLeft} >
                        <Image src={expand} alt="expand" width={10} />
                    </Button>
                </div>
            </div>
            <div ref={mostViewedRef} className="mc-cards no-scrollbar">
                {mostViewed.map((item, index) => (
                    <ClassesCardFull key={index} fullwidth={false} img={item.img} sub={item.sub} title={item.title} desc={item.desc} started={item.started} by={item.by} byImg={item.byImg} isLive={item.isLive} watching={item.watching} time={item.time} ref2={mostViewedEleRef} />
                ))}
            </div>
            <div className="mc-btn-wrapper">
                <Button variant="contained" className="mc-btn" sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
                    book free counselling session
                </Button>
            </div>
        </div>
    )
}

export default Masterclasses