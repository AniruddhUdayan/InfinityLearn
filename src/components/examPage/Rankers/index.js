"use client";
import Image from 'next/image'
import star from './../../../../public/images/star-badge.svg'
import ResultCard from './ResultCard'
import rs1 from './../../../../public/images/result-guy-1.webp'
import rs2 from './../../../../public/images/result-guy-2.webp'
import rs3 from './../../../../public/images/result-guy-3.webp'
import starBig from './../../../../public/images/star-big.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import { Button, Chip } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import styles from './../css/styles.module.css'
const Rankers = () => {
    const [selectedTags, setSelectedTags] = useState([ 'visual learner', 'theoretical', 'physical books needed', 'daily classes', 'synced with school' ])
    const allTags = ['visual learner', 'maximum revision', 'mcq solver', 'solo learner', 'theoretical', 'need a schedule', 'learning should be fun', 'group study', 'physical books needed', 'serious student', 'faculty interaction', 'daily classes', 'boards + competitive', 'synced with school', 'weekend classes', 'other']
    const carousel = useRef(null)
    const carouselEle = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const results = [
        { image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' },
        { image: rs3, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' },
        { image: rs3, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' },
        { image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' },
    ]

    useEffect(() => {
		const interval = setInterval(() => {
			if (activeIndex === results.length - 1) {
				setActiveIndex(0)
				carousel.current.scrollTo({
					left: 0,
					behavior: "smooth",
				})
			} else if (activeIndex == 0) {
				setActiveIndex(activeIndex + 1)
				if (carouselEle.current.offsetWidth < carousel.current.offsetWidth / 2){
					carousel.current.scrollTo({
						left: carousel.current.scrollLeft + carouselEle.current.offsetWidth/2,
						behavior: "smooth",
					})	
				} else {
					carousel.current.scrollTo({
						left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
						behavior: "smooth",
					})
				}

			} else {
				setActiveIndex(activeIndex + 1)
				carousel.current.scrollTo({
					left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
					behavior: "smooth",
				})
			}
		}, 3000)
		return () => clearInterval(interval)
	}, [activeIndex])

    return (
        <>
            <div className={styles.resultWrapper}>
                <div className={styles.resultMain}>
                    <Image src={starBig} alt="star" width={100} height={0} className={styles.resultStar} />
                    <div className={styles.resultHead}>top <span className={styles.yellow}>rankers</span></div>
                    <div className={styles.resultPts}>
                        <div className={styles.resultPt}>
                            <Image src={star} alt="star" width={20} />
                            31 Infinity Learners in top 100
                        </div>
                        <div className={styles.resultPt}>
                            <Image src={star} alt="star" width={20} />
                            234 Infinity Learners in top 1000
                        </div>
                    </div>
                    <div className={`${styles.resultDiv} ${styles.noScrollbar}`} ref={carousel}>
                        {results?.map((result, i) => <ResultCard key={`result-${i}`} result={result} ref2={carouselEle} />)}
                    </div>
                    <div className={styles.resultIndexDiv}>
                        {Array.from({ length: results.length }, (_, index) => (
                        <div
                            key={index}
                            className={`${styles.resultIndex} ${
                            index === activeIndex
                                ? styles.active
                                : styles.inactive
                            }`}
                        ></div>
                        ))}
                    </div>
                </div>
                <div className={styles.idealMain}>
                    <div className={styles.idealLeft}>
                        <div className={styles.idealHead}>help us find the <span className={styles.blue}>ideal course</span> for you</div>
                        <div className={styles.idealSelect}>select at least <strong>5 preferences</strong></div>
                        <div className={styles.idealBtn1Wrapper}>
                            <Button variant='contained' color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}} className={styles.idealBtn1}>
                                view 5 courses
                            </Button>
                        </div>
                    </div>
                    <div className={styles.idealChips}>
                        {allTags.map((tag, i) => 
                            <Chip key={`tag-${i}`} label={tag} variant={selectedTags.includes(tag) ? 'contained' : 'outlined'} color={selectedTags.includes(tag) ? 'yellow' : 'black'} onClick={() => selectedTags.includes(tag) ? setSelectedTags(selectedTags.filter(t => t !== tag)) : setSelectedTags([...selectedTags, tag])} sx={{ fontWeight: selectedTags.includes(tag) ? '600' : '400' }} />
                        )}
                    </div>
                    <div className={styles.idealBtn2Wrapper}>
                        <Button variant='contained' fullWidth color='primary' sx={{ borderRadius: '0.5rem', fontWeight: '600' }}>
                            view 5 courses
                            <Image src={arrow} alt='arrow' width={15} height={0} className={styles.idealBtn2Arrow} />
                        </Button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Rankers