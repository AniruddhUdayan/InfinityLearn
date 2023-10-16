"use client";
import attention from './../../../../public/images/personalised-attention.svg'
import teachers from './../../../../public/images/best-teachers.svg'
import focus from './../../../../public/images/focus.svg'
import study from './../../../../public/images/study-material.svg'
import Image from 'next/image'

const Promise = () => {
    return (
        <div className="bg-white py-6 lg:py-10 px-4 lg:px-56">
            <div className="bg-[#D4E9FF] rounded-xl py-10 px-4">
                <div className="text-3xl font-bold text-[#080E14] text-center mb-10">the <span className="text-[#007BFF]">infinity</span> promise</div>
                <div className='grid grid-cols-2 lg:grid-cols-4 font-bold text-lg '>
                    <div className='flex flex-col gap-4 items-center p-6 text-center border-[#99CAFF] border-e-[1px] border-b-[1px] lg:border-b-[0px]'>
                        <Image src={attention} alt="attention" width={45} />
                        personalized attention
                    </div>
                    <div className='flex flex-col gap-4 items-center p-6 text-center border-[#99CAFF] lg:border-e-[1px] border-b-[1px] lg:border-b-[0px]'>
                        <Image src={teachers} alt="attention" width={45} />
                        {"india's best teachers"}
                    </div>
                    <div className='flex flex-col gap-4 items-center p-6 text-center border-[#99CAFF]' style={{ borderWidth: '0px 1px 0px 0px' }}>
                        <Image src={focus} alt="attention" width={45} />
                        focused doubt resolution
                    </div>
                    <div className='flex flex-col gap-4 items-center p-6 text-center'>
                        <Image src={study} alt="attention" width={45} />
                        sri chaitanya study material
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promise