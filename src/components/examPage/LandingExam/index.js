"use client";
import LandingCard from "./LandingCard"
import orange from './../../../../public/images/orange-girl-1.webp'
import date from './../../../../public/images/date-icon.svg'
import pcb from './../../../../public/images/pcb-icon.svg'
import people from './../../../../public/images/people-icon.svg'
import dateB from './../../../../public/images/date-icon-blue.svg'
import pcbB from './../../../../public/images/pcb-icon-blue.svg'
import peopleB from './../../../../public/images/people-icon-blue.svg'
import arrowR from './../../../../public/images/arrow-r-white.svg'
import arrowRB from './../../../../public/images/arrow-r-blue.svg'
import arrowTRB from './../../../../public/images/arrow-tr-black.svg'
import arrowTRY from './../../../../public/images/arrow-tr.svg'
import Image from "next/image"
import { Button } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setComponentToShow } from "./../../../store/modalToShow";
import { showOverlayMode } from "./../../../store/mobVeriSlice";
import { setIsPopupShow } from "@/store/BookSession/BookSessionPopup";
import styles from './../css/styles.module.css'

const LandingExam = ({ classFor, examFor }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const carousel = useRef(null)
	const carouselEle = useRef(null)
	const showOverlay = useSelector((state) => state.mobileVerification.showOverlay);
	const isPopupShow = useSelector((state) => state.bookSessionPopup.isPopupShow);	
	const dispatch = useDispatch();

	const [carouselPaused, setCarouselPaused] = useState(false)
	
	const banners = [
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor?.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor?.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor?.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor?.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor?.toUpperCase() ?? 'JEE')+' 2024' },
	]

	const startLearning = async () => {
		console.log("start learning");
		dispatch(setComponentToShow("SendOtp"));
		dispatch(showOverlayMode(!showOverlay));
	};

	const bookSessionPopup = async () => {
		console.log("book session");
		dispatch(setComponentToShow("SendOtp"));
		dispatch(setIsPopupShow(!isPopupShow));
	}
	
	useEffect(() => {
		const interval = setInterval(() => {
			if (!carouselPaused){
				if (activeIndex === banners.length - 1) {
					setActiveIndex(0)
					carousel.current.scrollTo({
						left: 0,
						behavior: "smooth",
					})
				} else if (activeIndex == 0) {
					setActiveIndex(activeIndex + 1)
					if (carouselEle.current.offsetWidth < carousel.current.offsetWidth / 2){
						carousel.current.scrollTo({
							left: carousel.current.scrollLeft + carouselEle.current.offsetWidth/2,
							behavior: "smooth",
						})	
					} else {
						carousel.current.scrollTo({
							left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
							behavior: "smooth",
						})
					}
	
				} else {
					setActiveIndex(activeIndex + 1)
					carousel.current.scrollTo({
						left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
						behavior: "smooth",
					})
				}	
			}
		}, 3000)
		return () => clearInterval(interval)
	}, [activeIndex, carouselPaused])

	const onMouseEnter = () => {
		console.log("paused");
		setCarouselPaused(true)
	}

	const onMouseLeave = () => {
		console.log("un paused");
		setCarouselPaused(false)
	}
	
	return (
		<div className={styles.landingExamMain}>
			<div className={styles.landingExamClass}>
				<Button variant="contained" color="white" fullWidth sx={{
					justifyContent: 'space-between',
				}}>
					class {classFor ?? 12}+ | {examFor?.toUpperCase() ?? 'JEE'}
				</Button>
			</div>
			<div className={styles.mdNot}>
				<Button variant="contained" color="white" sx={{
					justifyContent: 'space-between',
					zIndex: '-10',
					margin: '0.5rem 1rem'
				}}>
					class {classFor ?? 12}+ | {examFor?.toUpperCase() ?? 'JEE'}
				</Button>
			</div>
			
			<div ref={carousel} className={`${styles.landingExamCarousel} ${styles.noScrollbar}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{banners.map((banner, index) => (
					<LandingCard key={index} pic={banner.pic} rank={banner.rank} name={banner.name} batch={banner.batch} ref2={carouselEle} />
				))}
			</div>
			<div className={styles.landingExamCarouselIndexContainer}>
				{Array.from({ length: banners.length }, (_, index) => (
				<div
					key={index}
					className={`${styles.landingExamCarouselIndex} ${
					index === activeIndex
						? styles.active
						: styles.inactive
					}`}
				></div>
				))}
			</div>

			<div className={styles.landingExamPadding}>
				<div className={styles.landingExamHead}>
					{parseInt(classFor) <= 10 ? 'The foundation that gives you an advantage over others to crack ' : 'The preparation that helped thousands to crack '}
					{examFor?.toUpperCase() === 'JEE' ? 'IIT-JEE' : examFor.toUpperCase()}
					{parseInt(classFor) <= 10 ? <>. <span className={styles.landingExamYellow}>Start early, Start right!</span></> : <>. Now, <span className={styles.landingExamYellow}>it's your turn</span></>}
				</div>
				<div className={styles.landingExamDesc}><span className={styles.landingExamDescHigh}>{examFor?.toUpperCase() ?? 'JEE'}</span> is the most competitive entrance examination in India. Offering the best online class experience, our targeted batch covers all essential subjects.</div>
				<div className={styles.landingExamGrid}>
					<div className={styles.landingExamPoints}>
						<div className={styles.landingExamPoint}>
							<Image src={pcb} alt='pcb' width={32} height={0} className={styles.lgOnly} />
							<Image src={pcbB} alt='pcb' width={32} height={0} className={styles.lgNot} />
							<span>Biology, Physics, Chemistry</span>
						</div>
						<div className={styles.landingExamPoint}>
							<Image src={date} alt='date' width={32} height={0} className={styles.lgOnly} />
							<Image src={dateB} alt='date' width={32} height={0} className={styles.lgNot} />
							<span>date of {examFor?.toUpperCase() ?? 'JEE'} 2024 to be announced</span>
						</div>
						<div className={styles.landingExamPoint}>
							<Image src={people} alt='date' width={32} height={0} className={styles.lgOnly} />
							<Image src={peopleB} alt='date' width={32} height={0} className={styles.lgNot} />
							<span>18 lakh + {examFor?.toUpperCase() ?? 'JEE'} applicants | 1.1 lakh seats</span>
						</div>
					</div>
					<div className={styles.landingExamButtons}>
						<Button onClick={startLearning} variant='outlined' className={styles.landingExamStart} disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem',
							fontWeight: '600'
						}}>
							start learning for free 
							<Image src={arrowTRY} alt='arrow' width={15} height={0} />
						</Button>
						<Button onClick={bookSessionPopup} variant='contained' className={styles.landingExamBookFree}  disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem',
							fontWeight: '600'
						}}>
							book free counselling session
							<Image src={arrowTRB} alt='arrow' width={15} height={0} />
						</Button>
					</div>
				</div>
				<div className={styles.landingExamDetails}>
					{examFor?.toUpperCase() === 'NEET' ? 'JEE' : 'NEET'} details
					<Image src={arrowR} alt='arrow' width={12} height={0} className={styles.lgOnly} />
					<Image src={arrowRB} alt='arrow' width={12} height={0} className={styles.lgNot} />
				</div>
			</div>
		</div>
	)
}

export default LandingExam