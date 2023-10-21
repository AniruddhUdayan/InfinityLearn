"use client";
import { Button } from '@mui/material'
import check from './../../../../public/images/check-icon.svg'
import Image from "next/image"
import p1 from './../../../../public/images/revise-1.webp'
import p2 from './../../../../public/images/revise-2.webp'
import p3 from './../../../../public/images/revise-3.webp'
import star from './../../../../public/images/star-big-blue.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import './styles.css'

const Revise = ({ classFor, examFor }) => {
    return (
        <div className="revise-main">
            <Image src={star} alt="star" className='revise-star' />
            <div className="revise-head">Revise syllabus with <span className="yellow">Sri Chaitanya Test Series for {examFor?.toUpperCase() ?? 'JEE'}</span></div>
            <div className="revise-grid">
                <div className="revise-list">
					<div className='revise-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>test your concepts</div>
					</div>
					<div className='revise-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>expertly crafted questions</div>
					</div>
					<div className='revise-pt'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>track your progress</div>
					</div>
				</div>
                <div className='revise-right'>
                    <div className='revise-r-1'>
                        <Image src={p1} alt="check" className='revise-avatar-1' />
                        <Image src={p2} alt="check" className='revise-avatar-rest' />
                        <Image src={p3} alt="check" className='revise-avatar-rest' />
                        <div className='revise-avatar-text'>
                            <div className='revise-bold'>32.4k students</div>
                            <div className=''>revise with IL mock tests</div>
                        </div>
                    </div>
                    <div className='revise-btn-wrapper'>
                        <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600'}} className="revise-btn">
                            explore test series
                            <Image src={arrow} alt='arrow' width={15} height={0} className='revise-btn-img' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revise