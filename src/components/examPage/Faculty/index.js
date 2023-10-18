import expand from './../../../../public/images/expand_more.svg'
import FacultyCard from "./FacultyCard"
import faculty1 from './../../../../public/images/faculty1.webp'
import faculty2 from './../../../../public/images/faculty2.webp'
import faculty3 from './../../../../public/images/faculty3.webp'
import { Button, LinearProgress } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const Faculty = ({ classFor, examFor }) => {
	const [progress, setProgress] = useState(0)
	const carousel = useRef(null)
	const carouselEle = useRef(null)

	const faculties = [
		{name: 'Prerana AR', image: faculty1, headline: '10+ Years Teaching | NIT Nagpur', subject: 'Maths', usp: 'Taught 64 NEET Toppers'},
		{name: 'Prerana AR', image: faculty2, headline: '10+ Years Teaching | NIT Nagpur', subject: 'Maths', usp: 'Taught 64 NEET Toppers'},
		{name: 'Prerana AR', image: faculty3, headline: '10+ Years Teaching | NIT Nagpur', subject: 'Maths', usp: 'Taught 64 NEET Toppers'},
		{name: 'Prerana AR', image: faculty1, headline: '10+ Years Teaching | NIT Nagpur', subject: 'Maths', usp: 'Taught 64 NEET Toppers'},
	]

	const normalise = (value) => ((value - 0) * 100) / (faculties.length - 0);

	useEffect(() => {
		if (window.innerWidth >= 1024) return
		const interval = setInterval(() => {
			if (progress === faculties.length - 1) {
				setProgress(0)
				carousel.current.scrollTo({
					left: 0,
					behavior: "smooth",
				})
			} else if (progress === 0) {
				setProgress(progress + 1)
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
				setProgress(progress + 1)
				carousel.current.scrollTo({
					left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
					behavior: "smooth",
				})
			}
		}, 3000)
		return () => clearInterval(interval)
	}, [progress])
	
	const scrollFacultiesLeft = () => {
        carousel.current.scrollTo({left: carousel.current.scrollWidth, behavior: 'smooth'})
    }

    const scrollFacultiesRight = () => {
        carousel.current.scrollTo({left: -carousel.current.scrollWidth, behavior: 'smooth'})
    }

	return (
		<div className="bg-[#F3F3F3] p-4 lg:p-10 py-6 lg:py-10 w-full">
			<div className="text-4xl lg:text-5xl font-bold text-[#080E14] flex justify-between">
				<span>study with india's <span className='text-[#007BFF]'>best {examFor?.toUpperCase() ?? 'JEE'} teachers</span></span>
				<div className="hidden lg:flex gap-2">
					<Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollFacultiesRight} >
						<Image src={expand} alt="expand" width={10} className="rotate-180" />
					</Button>
					<Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0 }} onClick={scrollFacultiesLeft} >
						<Image src={expand} alt="expand" width={10} />
					</Button>
				</div>
			</div>
			<div className='flex lg:hidden gap-2 items-center mt-2'>
				<div>01</div>
				<LinearProgress variant="determinate" value={normalise(progress+1)} className='w-1/2' />
				<div>{faculties?.length}</div>
			</div>
			<div ref={carousel} className="flex gap-4 mt-6 lg:mt-10 justify-start no-scrollbar w-full overflow-x-scroll snap-x lg:snap-none">
				{faculties.map((f, i) => (
					<FacultyCard ref2={carouselEle} key={i} name={f?.name} image={f?.image} headline={f?.headline} subject={f?.subject} usp={f?.usp} />
				))}
			</div>
			<div className="text-center mt-4 lg:mt-10 text-[#007BFF] ">
				explore all
			</div>
		</div>
	)
}

export default Faculty