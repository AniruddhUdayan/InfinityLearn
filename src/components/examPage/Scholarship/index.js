import Image from 'next/image'
import green from './../../../../public/images/green-girl.webp'
import cap from './../../../../public/images/cap.svg'
import star from './../../../../public/images/star-big.svg'

import { Button } from '@mui/material'

const Scholarship = () => {
	return (
		<div className='bg-[#F1F2F6] lg:-mb-24 '>
			<div className="bg-[#00364E] text-[#CECFD0] px-4 pt-8 lg:pt-0 lg:px-10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden lg:mx-20 lg:rounded-2xl lg:overflow-visible lg:transform lg:-translate-y-1/2">
				<div className='p-2 lg:p-4 pb-0 lg:pb-0 flex justify-end flex-col items-center relative order-last lg:order-none'>
					<Image src={cap} alt='cap' width={120} height={0} className='-mb-8 z-10 w-[80px] lg:w-[120px] lg:hidden' />
					<Image src={green} alt='green' width={600} height={0} className='z-10 w-[355px] lg:w-[600px] static lg:absolute aspect-[13/10]' />
					<div className='mb-6 lg:hidden z-10 self-stretch'>
						<Button variant='contained' disableElevation fullWidth color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
					<div className='h-full absolute flex flex-col justify-end lg:hidden'>
						<div className='overflow-hidden h-[15rem] -ms-[30%] lg:ms-0'>
							<div className='bg-[#004463] w-[25rem] lg:w-[40rem] aspect-square rounded-full'></div>
						</div>
					</div>
				</div>
				<div className='p-0 lg:p-10 flex flex-col gap-4 lg:gap-8'>
					<div className='text-4xl lg:text-5xl text-white font-bold leading-[3rem] lg:leading-[4rem]'>get up to <span className='text-[#FCDE5A]'>50% scholarship</span></div>
					<div className='lg:text-xl'>over <span className='text-white font-bold'>500+</span> students awarded scholarships worth of <span className='text-white font-bold'>₹50L</span></div>
					<div className='mt-2 hidden lg:block'>
						<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scholarship