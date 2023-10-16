"use client";
import lastYear from './../../../../public/images/last-year.svg'
import sample from './../../../../public/images/sample.svg'
import revision from './../../../../public/images/revision.svg'
import solved from './../../../../public/images/solved.svg'
import popular from './../../../../public/images/popular.svg'
import formulas from './../../../../public/images/formulas.svg'
import arrow from './../../../../public/images/arrow-r-blue.svg'
import Image from 'next/image'

const Study = () => {
    const items = [
        { img: lastYear, title: 'past year papers', alt: 'last year' },
        { img: sample, title: 'sample papers', alt: 'sample' },
        { img: revision, title: 'revision notes', alt: 'revision' },
        { img: solved, title: 'solved questions', alt: 'solved' },
        { img: popular, title: 'popular books', alt: 'popular' },
        { img: formulas, title: 'formulas', alt: 'formulas' },
    ]
    return (
        <div className="w-full px-4 lg:px-10 py-8 lg:py-10 bg-white">
            <div className='text-5xl font-bold text-[#080E14] lg:text-center mb-8'>free <span className='text-[#007BFF]'>study material</span></div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-0 lg:px-56'>
                {items.map((item, index) => (
                    <div key={index} className='p-8 bg-[#D4E9FF] rounded-2xl text-xl lg:text-2xl font-bold cursor-pointer hover:bg-[#C4E0FF] hover:shadow-[0px_4px_15px_0px_#007BFF40] transition-all duration-300'>
                        <Image src={item?.img} alt={item?.alt} className='mb-4 lg:mb-8 w-[3.5rem] lg:w-[5rem]' />
                        {item?.title}
                    </div>
                ))}
            </div>
            <div className='text-center text-[#007BFF] mt-8 text-lg font-semibold flex justify-center cursor-pointer'>
                view all study material
                <Image src={arrow} alt='arrow' width={15} height={0} className='ms-2' />
            </div>
        </div>
    )
}

export default Study