"use client";
import Image from "next/image"
import yellow from "./../../../../public/images/yellow-guy.webp"
import check from './../../../../public/images/check-icon.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import { Button } from "@mui/material"

const School = ({ classFor, examFor }) => {
	return (
		<div className="p-4 lg:p-16 py-8 lg:py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center bg-[#D4E9FF] text-[#080E14]">
			<div className="text-4xl lg:text-5xl font-bold lg:hidden leading-[3.5rem]">study for {examFor?.toUpperCase() ?? 'JEE'} at school with <div className="text-[#007BFF]">IL schools!</div></div>
			<div className="flex justify-center lg:justify-end items-center">
				<Image src={yellow} alt="yellow" className="aspect-square" />
			</div>
			<div className="flex flex-col gap-10">
				<div className="text-4xl lg:text-5xl font-bold hidden lg:block leading-[3.5rem]">study for {examFor?.toUpperCase() ?? 'JEE'} at school with <div className="text-[#007BFF]">IL schools!</div></div>
				<div className="flex flex-col gap-4 hidden lg:flex">
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>test your skills</div>
					</div>
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>expertly crafted questions</div>
					</div>
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>progress analysis</div>
					</div>
				</div>
				<div className="self-stretch">
					<Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }} className="w-full lg:w-auto">
						find my school
						<Image src={arrow} alt='arrow' width={15} height={0} className='ms-2' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default School