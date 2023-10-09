import phone from './../../../../public/images/phone.svg'
import apple from './../../../../public/images/apple.svg'
import android from './../../../../public/images/android.svg'
import check from './../../../../public/images/check-icon.svg'
import Image from 'next/image'
import { Button, Input, InputBase } from '@mui/material'

const Download = () => {
	return (
		<>
			<div className="w-full flex flex-col lg:flex-row justify-center bg-[#F1F2F6] pt-8 lg:pt-16 px-4 lg:px-16 pb-0 gap-8 text-[#080E14]">
				<div className='flex flex-col gap-2 lg:gap-8 w-full lg:w-6/12 px-0 lg:px-10'>
					<div className='font-bold text-4xl lg:text-5xl text-[#007BFF] mb-4 leading-[2.5rem] lg:leading-[3.6rem]'>best study material, <span className='text-[#080E14]'>now at your finger tips!</span></div>
					<div className='flex gap-2'>
						<Image src='/images/checklist1.png' alt="check" width={40} height={40}  />
						<div className='text-[#6B6E72] text-lg flex items-center'>live classes</div>
					</div>
					<div className='flex gap-2'>
						<Image src='/images/checklist1.png' alt="check" width={40} height={40}  />
						<div className='text-[#6B6E72] text-lg flex items-center'>progress tracking</div>
					</div>
					<div className='flex gap-2'>
						<Image src='/images/checklist1.png' alt="check" width={40} height={40}  />
						<div className='text-[#6B6E72] text-lg flex items-center'>diverse question banks</div>
					</div>
					<div className='hidden lg:block'>
						<div className='text-xl font-bold'>download the app</div>
						<div className='flex gap-4 mt-2'>
							<Image src={apple} alt='apple' width={150} height={0} />
							<Image src={android} alt='android' width={150} height={0} />
						</div>
					</div>
				</div>
				<Image src={phone} alt='phone' width={400} height={0} className='lg:-mb-[2px]'/>
				<div className='lg:hidden mb-4'>
					<div className='text-2xl text-center mb-4 font-bold'>download the app</div>
					<div className='grid grid-cols-2 gap-0 mt-2'>
						<Image src={apple} alt='apple' width={150} height={0} className='w-full' />
						<Image src={android} alt='android' width={150} height={0} className='w-full' />
					</div>
				</div>

			</div>
			<div className='bg-[#00364E] flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center w-full p-4 py-8 lg:p-20 text-[#FFFFFF]'>
				<div className='w-full lg:w-5/12 '>
					<div className='font-bold text-4xl lg:text-5xl mb-4 leading-[2.5rem] lg:leading-[3.6rem]'>book a <span className='text-[#FCDE5A]'>demo session</span></div>
					<div className='lg:text-lg'>{"access to India's best teachers with a record of producing top rankers year on year."}</div>
				</div>
				<div className='flex flex-col gap-2 justify-center'>
					<div className='mb-1 items-stretch flex'>
						<div className='rounded-s-2xl rounded-e-none bg-white px-4 py-2 text-[#080E14] pe-2 flex justify-center items-center'>+91</div>
						<input placeholder='enter your mobile number' className='bg-[#FFFFFF] rounded-none px-4 py-2 outline-none border-none text-[#080E14] min-w-0 grow lg:grow-0' />
						<Button variant='contained' disableElevation className='px-1 lg:px-4 py-2' sx={{ borderRadius: '0px 1rem 1rem 0' }}>book now</Button>
					</div>
					<div className='hidden lg:block'>we will send an otp for verification</div>
				</div>
			</div>
		</>
	)
}

export default Download