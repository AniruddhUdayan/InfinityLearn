"use client";
import LandingCard from "./LandingCard"
import orange from './../../../../public/images/orange-girl-1.svg'
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

const LandingExam = ({ classFor, examFor }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const carousel = useRef(null)
	const carouselEle = useRef(null)
	const banners = [
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor.toUpperCase() ?? 'JEE')+' 2024' },
		{ pic : orange, rank : '1', name : 'Anamika Rai', batch : (examFor.toUpperCase() ?? 'JEE')+' 2024' },
	]
  
	useEffect(() => {
		const interval = setInterval(() => {
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
		}, 3000)
		return () => clearInterval(interval)
	}, [activeIndex])
	
	return (
		<div className="w-full text-[#EFEFEF] bg-[#007BFF] mt-[4.8rem] md:mt-0">

			<div ref={carousel} className="overflow-x-auto no-scrollbar flex gap-4 py-8 pb-4 px-4 snap-x">
				{banners.map((banner, index) => (
					<LandingCard key={index} pic={banner.pic} rank={banner.rank} name={banner.name} batch={banner.batch} ref2={carouselEle} />
				))}
			</div>
			<div className=" flex justify-center">
				{Array.from({ length: banners.length }, (_, index) => (
				<div
					key={index}
					className={` h-1 rounded-full mx-1 lg:mx-2 b ${
					index === activeIndex
						? "active w-10 lg:w-16 bg-white "
						: " bg-[#76B8FF] w-6 lg:w-10"
					}`}
				></div>
				))}
			</div>

			<div className=" py-0 lg:py-8">
				<div className="px-4 lg:px-36 text-5xl lg:text-7xl font-extrabold text-white leading-[3.8rem] my-8">power up your <span className="text-[#FCDE5A]">{examFor.toUpperCase() ?? 'JEE'} PREP</span> with Infinity Learn</div>
				<div className="px-4 lg:px-36 py-4 text-lg text-[#D7D7D7]"><span className="text-white lg:text-[#FCDE5A] font-bold lg:font-normal">{examFor.toUpperCase() ?? 'JEE'}</span> is the most competitive entrance examination in India. Offering the best online class experience, our targeted batch covers all essential subjects.</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
					<div className="flex flex-col px-4 lg:px-36 bg-white lg:bg-transparent text-[#080E14] lg:text-[#efefef] order-last lg:order-none font-semibold">
						<div className='flex items-center gap-3 mt-4'>
							<Image src={pcb} alt='pcb' width={32} height={0} className='hidden lg:block' />
							<Image src={pcbB} alt='pcb' width={32} height={0} className='lg:hidden' />
							<span>Biology, Physics, Chemistry</span>
						</div>
						<div className='flex items-center gap-3 mt-4'>
							<Image src={date} alt='date' width={32} height={0} className='hidden lg:block' />
							<Image src={dateB} alt='date' width={32} height={0} className='lg:hidden' />
							<span>date of {examFor.toUpperCase() ?? 'JEE'} 2024 to be announced</span>
						</div>
						<div className='flex items-center gap-3 mt-4'>
							<Image src={people} alt='date' width={32} height={0} className='hidden lg:block' />
							<Image src={peopleB} alt='date' width={32} height={0} className='lg:hidden' />
							<span>18 lakh + {examFor.toUpperCase() ?? 'JEE'} applicants | 1.1 lakh seats</span>
						</div>
					</div>
					<div className="px-8 lg:px-20 flex flex-col gap-4 mt-6 lg:mt-0">
						<Button variant='outlined' className="flex gap-2 items-center order-last lg:order-none" disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem',
							fontWeight: '600'
						}}>
							start learning for free 
							<Image src={arrowTRY} alt='arrow' width={15} height={0} />
						</Button>
						<Button variant='contained' className="flex gap-2 items-center"  disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem',
							fontWeight: '600'
						}}>
							book free counselling session
							<Image src={arrowTRB} alt='arrow' width={15} height={0} />
						</Button>
					</div>
				</div>
				<div className="cursor-pointer font-semibold flex gap-2 justify-center mb-4 lg:mb-0 text-[#007BFF] pt-4 lg:text-white bg-white lg:bg-transparent">
					{examFor.toUpperCase() === 'NEET' ? 'JEE' : 'NEET'} details
					<Image src={arrowR} alt='arrow' width={12} height={0} className="hidden lg:block" />
					<Image src={arrowRB} alt='arrow' width={12} height={0} className="lg:hidden" />
				</div>
			</div>
		</div>
	)
}

export default LandingExam