"use client";
import lastYear from './../../../../public/images/last-year.svg'
import sample from './../../../../public/images/sample.svg'
import revision from './../../../../public/images/revision.svg'
import solved from './../../../../public/images/solved.svg'
import popular from './../../../../public/images/popular.svg'
import formulas from './../../../../public/images/formulas.svg'
import arrow from './../../../../public/images/arrow-r-blue.svg'
import './styles.css'
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
        <div className="study-main">
            <div className='study-head'>free <span className='blue'>study material</span></div>
            <div className='study-grid'>
                {items.map((item, index) => (
                    <div key={index} className='study-card'>
                        <Image src={item?.img} alt={item?.alt} className='study-card-img' />
                        {item?.title}
                    </div>
                ))}
            </div>
            <div className='study-view-all'>
                view all study material
                <Image src={arrow} alt='arrow' width={15} height={0} className='' />
            </div>
        </div>
    )
}

export default Study