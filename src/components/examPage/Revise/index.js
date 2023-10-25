"use client";
import { Button } from '@mui/material'
import check from './../../../../public/images/check-icon.svg'
import Image from "next/image"
import p1 from './../../../../public/images/revise-1.webp'
import p2 from './../../../../public/images/revise-2.webp'
import p3 from './../../../../public/images/revise-3.webp'
import star from './../../../../public/images/star-big-blue.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import styles from './../css/styles.module.css'

const Revise = ({ classFor, examFor }) => {
    return (
        <div className={styles.reviseMain}>
            <Image src={star} alt="star" className={styles.reviseStar} />
            <div className={styles.reviseHead}>Revise syllabus with <span className={styles.yellow}>Sri Chaitanya Test Series for {examFor?.toUpperCase() ?? 'JEE'}</span></div>
            <div className={styles.reviseGrid}>
                <div className={styles.reviseList}>
					<div className={styles.revisePt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.revisePtText}>test your concepts</div>
					</div>
					<div className={styles.revisePt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.revisePtText}>expertly crafted questions</div>
					</div>
					<div className={styles.revisePt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.revisePtText}>track your progress</div>
					</div>
				</div>
                <div className={styles.reviseRight}>
                    <div className={styles.reviseR1}>
                        <Image src={p1} alt="check" className={styles.reviseAvatar1} />
                        <Image src={p2} alt="check" className={styles.reviseAvatarRest} />
                        <Image src={p3} alt="check" className={styles.reviseAvatarRest} />
                        <div className={styles.reviseAvatarText}>
                            <div className={styles.reviseBold}>32.4k students</div>
                            <div>revise with IL mock tests</div>
                        </div>
                    </div>
                    <div className={styles.reviseBtnWrapper}>
                        <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600'}} className={styles.reviseBtn}>
                            explore test series
                            <Image src={arrow} alt='arrow' width={15} height={0} className={styles.reviseBtnImg} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revise