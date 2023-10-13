"use client";
import lastYear from './../../../../public/images/last-year.svg'
import sample from './../../../../public/images/sample.svg'
import revision from './../../../../public/images/revision.svg'
import solved from './../../../../public/images/solved.svg'
import popular from './../../../../public/images/popular.svg'
import formulas from './../../../../public/images/formulas.svg'
import Image from 'next/image'

const Study = () => {
    return (
        <div className="w-full px-4 lg:px-10 py-8 lg:py-10 bg-white">
            <div className='text-5xl font-bold text-[#080E14] lg:text-center mb-8'>free <span className='text-[#007BFF]'>study material</span></div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-0 lg:px-56'>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={lastYear} alt='last year' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    past year papers
                </div>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={sample} alt='sample' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    sample papers
                </div>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={revision} alt='revision' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    revision notes
                </div>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={solved} alt='solved' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    solved questions
                </div>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={popular} alt='polpular' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    popular books
                </div>
                <div className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold'>
                    <Image src={formulas} alt='formulas' className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                    formulas
                </div>
            </div>
            <div className='text-center text-[#007BFF] mt-8'>view all study material</div>
        </div>
    )
}

export default Study