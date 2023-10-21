"use client";
import Image from "next/image"
import yellow from "./../../../../public/images/yellow-guy.webp"
import check from './../../../../public/images/check-icon.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import { Button } from "@mui/material"
import './styles.css'

const School = ({ classFor, examFor }) => {
	return (
		<div className="school-main">
			<div className="school-head-m">study for {examFor?.toUpperCase() ?? 'JEE'} at school with <span className="blue">IL schools!</span></div>
			<div className="school-img-div">
				<Image src={yellow} alt="yellow" className="school-img" />
			</div>
			<div className="school-right">
				<div className="school-head">study for {examFor?.toUpperCase() ?? 'JEE'} at school with <div className="blue">IL schools!</div></div>
				<div className="school-pts">
					<div className='school-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' school-pt-text '>test your skills</div>
					</div>
					<div className='school-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' school-pt-text '>expertly crafted questions</div>
					</div>
					<div className='school-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' school-pt-text '>progress analysis</div>
					</div>
				</div>
				<div className="school-btn-wrapper">
					<Button fullWidth variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }} className="">
						find my school
						<Image src={arrow} alt='arrow' width={15} height={0} className='school-btn-arrow' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default School