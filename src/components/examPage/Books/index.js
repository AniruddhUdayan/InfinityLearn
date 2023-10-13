import expand from './../../../../public/images/expand_more.svg'
import check from './../../../../public/images/check-icon.svg'
import Image from 'next/image'
import book from './../../../../public/images/book.svg'
import bookM from './../../../../public/images/book-m.svg'
import { Button } from '@mui/material'

const Books = () => {
    return (
        <div className="bg-white p-0 lg:p-10 py-0 lg:py-20 pb-0 lg:pb-[20rem]">
            <div className="text-5xl font-bold text-center text-[#080E14] hidden lg:block"><span className="text-[#007BFF]">Comprehensive</span> Sri Chaitanya books for JEE</div>
            <div className="text-4xl font-bold text-[#080E14] bg-[#D4E9FF] lg:bg-white px-4 pt-8 lg:p-0 lg:hidden"><span className="text-[#007BFF]">IL books</span> for NEET</div>
            <div className="flex justify-center flex-col lg:flex-row lg:mt-20 lg:gap-20">
                <div className='bg-[#D4E9FF] lg:bg-white px-12'>
                    <Image src={book} alt='book' width={400} height={0} className='hidden lg:block' />
                    <Image src={bookM} alt='book' height={0} className='lg:hidden w-full' />
                    <div className="hidden lg:flex gap-4 justify-center mt-4">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className='p-4 lg:p-6 py-8 lg:py-6 rounded-3xl flex flex-col gap-2 justify-evenly bg-[#FEF8DE80] lg:bg-[#F0F3FF]'>
                    <div className='font-semibold text-2xl lg:text-3xl'>IITJEE Maths class 11<span className='lg:hidden text-[#6B6E72] text-base font-normal'> (12 Books)</span></div>
                    <div className='text-[#6B6E72] text-xl hidden lg:block'>(12 Books)</div>
                    <div className='flex items-end gap-1'>
                        <div className='text-xl lg:text-3xl font-semibold text-[#007BFF]'>₹12,000</div>
                        <div className='text-base lg:text-lg text-[#322C12] font-semibold'>(-20%)</div>
                        <div className='text-[#52565B] line-through'>₹15,000</div>
                    </div>
                    <div className='text-[#FF7A00] text-sm'>SPECIAL PRICE! <span className='text-[#52565B]'>offer ends 21st august</span></div>
                    <div className="flex flex-col gap-4 text-[#52565B] my-4 mb-10 lg:mb-4">
                        <div className='flex gap-2'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=' lg:text-lg '>based on the latest IITJEE pattern</div>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=' lg:text-lg '>Concise Theory + Practice Questions</div>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=' lg:text-lg '>Topic-wise Detailed MCQs for revision</div>
                        </div>
                    </div>
                    <Button variant="outlined" color="black" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className="w-full lg:w-auto">
                        view sample
                    </Button>
                    <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className="w-full lg:w-auto">
                        purchase
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Books