import LandingCard from "./LandingCard"
import orange from './../../../../public/images/orange-girl-1.svg'
import date from './../../../../public/images/date-icon.svg'
import pcb from './../../../../public/images/pcb-icon.svg'
import people from './../../../../public/images/people-icon.svg'
import dateB from './../../../../public/images/date-icon-blue.svg'
import pcbB from './../../../../public/images/pcb-icon-blue.svg'
import peopleB from './../../../../public/images/people-icon-blue.svg'
import Image from "next/image"
import { Button } from "@mui/material"

const LandingExam = () => {
	return (
		<div className="w-full text-[#EFEFEF] bg-[#007BFF] mt-[4.8rem] lg:mt-0">
			<div className="overflow-x-auto no-scrollbar flex gap-4 py-8 px-4">
				<LandingCard pic={orange} rank='1' name='Anamika Rai' batch='IIT JEE 2024' />
				<LandingCard pic={orange} rank='1' name='Anamika Rai' batch='IIT JEE 2024' />
				<LandingCard pic={orange} rank='1' name='Anamika Rai' batch='IIT JEE 2024' />
			</div>
			<div className=" py-0 lg:py-8">
				<div className="px-4 lg:px-36 text-5xl lg:text-7xl font-bold text-white">power up your <span className="text-[#FCDE5A]">IITJEE PREP</span> with Infinity Learn</div>
				<div className="px-4 lg:px-36 py-4 text-lg"><span className="text-[#FCDE5A]">NEET</span> (national entrance cum eligibility test) is an important medical entrance examination conducted in India.</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
					<div className="flex flex-col px-4 lg:px-36 bg-white lg:bg-transparent text-[#080E14] lg:text-[#efefef] order-last lg:order-none">
						<div className='flex items-center gap-3 mt-4'>
							<Image src={pcb} alt='pcb' width={32} height={0} className='hidden lg:block' />
							<Image src={pcbB} alt='pcb' width={32} height={0} className='lg:hidden' />
							<span >Biology, Physics, Chemistry</span>
						</div>
						<div className='flex items-center gap-3 mt-4'>
							<Image src={date} alt='date' width={32} height={0} className='hidden lg:block' />
							<Image src={dateB} alt='date' width={32} height={0} className='lg:hidden' />
							<span>date of NEET 2024 to be announced</span>
						</div>
						<div className='flex items-center gap-3 mt-4'>
							<Image src={people} alt='date' width={32} height={0} className='hidden lg:block' />
							<Image src={peopleB} alt='date' width={32} height={0} className='lg:hidden' />
							<span>18 lakh + NEETpplicants | 1.1 lakh seats</span>
						</div>
					</div>
					<div className="px-8 lg:px-20 flex flex-col gap-4">
						<Button variant='outlined' disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem'
						}}>
							start learning for free
						</Button>
						<Button variant='contained' disableElevation color='yellow' fullWidth sx={{
							borderRadius: '0.5rem'
						}}>
							book free counselling session
						</Button>
					</div>
				</div>
				<div className="text-center mb-4 lg:mb-0 text-[#007BFF] pt-4 lg:text-white bg-white lg:bg-transparent">JEE details</div>
			</div>
		</div>
	)
}

export default LandingExam