"use client";
import lastYear from './../../../../public/images/last-year.svg'
import sample from './../../../../public/images/sample.svg'
import revision from './../../../../public/images/revision.svg'
import solved from './../../../../public/images/solved.svg'
import popular from './../../../../public/images/popular.svg'
import formulas from './../../../../public/images/formulas.svg'
import arrow from './../../../../public/images/arrow-r-blue.svg'
import Image from 'next/image'
import styles from './../css/styles.module.css'

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
        <div className={styles.studyMain}>
            <div className={styles.studyHead}>free <span className={styles.blue}>study material</span></div>
            <div className={styles.studyGrid}>
                {items.map((item, index) => (
                    <div key={index} className={styles.studyCard}>
                        <Image src={item?.img} alt={item?.alt} className={styles.studyCardImg} />
                        {item?.title}
                    </div>
                ))}
            </div>
            <div className={styles.studyViewAll}>
                view all study material
                <Image src={arrow} alt='arrow' width={15} height={0} />
            </div>
        </div>
    )
}

export default Study