"use client";
import attention from './../../../../public/images/personalised-attention.svg'
import teachers from './../../../../public/images/best-teachers.svg'
import focus from './../../../../public/images/focus.svg'
import study from './../../../../public/images/study-material.svg'
import Image from 'next/image'
import './styles.css'

const Promise = () => {
    return (
        <div className="promise-wrapper">
            <div className="promise-main">
                <div className="promise-head">the <span className="promise-blue">infinity</span> promise</div>
                <div className='promise-grid'>
                    <div className='promise-item promise-border-1'>
                        <Image src={attention} alt="attention" width={45} />
                        personalized attention
                    </div>
                    <div className='promise-item promise-border-2'>
                        <Image src={teachers} alt="attention" width={45} />
                        {"india's best teachers"}
                    </div>
                    <div className='promise-item promise-border-3'>
                        <Image src={focus} alt="attention" width={45} />
                        focused doubt resolution
                    </div>
                    <div className='promise-item'>
                        <Image src={study} alt="attention" width={45} />
                        sri chaitanya study material
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promise