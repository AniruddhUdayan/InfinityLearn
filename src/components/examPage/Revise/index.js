import { Button } from '@mui/material'
import check from './../../../../public/images/check-icon.svg'
import Image from "next/image"
import p1 from './../../../../public/images/revise-1.svg'
import p2 from './../../../../public/images/revise-2.svg'
import p3 from './../../../../public/images/revise-3.svg'
import star from './../../../../public/images/star-big-blue.svg'

const Revise = () => {
    return (
        <div className="p-4 lg:p-10 py-8 lg:py-10 bg-[#00364E] text-white relative">
            <Image src={star} alt="star" className='absolute top-0 left-40' />
            <div className="text-4xl lg:text-5xl font-bold lg:text-center lg:px-36 leading-[3.5rem] lg:mt-8">Revise syllabus with <span className="text-[#FCDE5A]">Sri Chaitanya Test Series for JEE</span></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:px-48">
                <div className="flex flex-col gap-4 flex">
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>test your concepts</div>
					</div>
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>expertly crafted questions</div>
					</div>
					<div className='flex gap-2'>
						<Image src={check} alt="check" width={20} height={0} className='' />
						<div className=' lg:text-lg '>track your progress</div>
					</div>
				</div>
                <div className='flex flex-col justify-center gap-4 mt-6 lg:mt-0'>
                    <div className='flex items-center'>
                        <Image src={p1} alt="check" className='w-[3rem]' />
                        <Image src={p2} alt="check" className='-ms-6 w-[3rem]' />
                        <Image src={p3} alt="check" className='-ms-6 w-[3rem]' />
                        <div className='flex flex-col gap-2 ms-4'>
                            <div className='font-bold'>32.4k students</div>
                            <div className=''>revise with IL mock tests</div>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem'}} className="w-full lg:w-auto">
                            explore test series
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revise