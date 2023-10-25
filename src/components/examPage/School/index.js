"use client";
import Image from "next/image"
import yellow from "./../../../../public/images/yellow-guy.webp"
import check from './../../../../public/images/check-icon.svg'
import arrow from './../../../../public/images/arrow-tr-white.svg'
import { Button } from "@mui/material"
import styles from './../css/styles.module.css'

const School = ({ classFor, examFor }) => {
	return (
		<div className={styles.schoolMain}>
			<div className={styles.schoolHeadM}>study for {examFor?.toUpperCase() ?? 'JEE'} at school with <span className={styles.blue}>IL schools!</span></div>
			<div className={styles.schoolImgDiv}>
				<Image src={yellow} alt="yellow" className={styles.schoolImg} />
			</div>
			<div className={styles.schoolRight}>
				<div className={styles.schoolHead}>study for {examFor?.toUpperCase() ?? 'JEE'} at school with <div className={styles.blue}>IL schools!</div></div>
				<div className={styles.schoolPts}>
					<div className={styles.schoolPt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.schoolPtText}>test your skills</div>
					</div>
					<div className={styles.schoolPt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.schoolPtText}>expertly crafted questions</div>
					</div>
					<div className={styles.schoolPt}>
						<Image src={check} alt="check" width={20} height={0} />
						<div className={styles.schoolPtText}>progress analysis</div>
					</div>
				</div>
				<div className={styles.schoolBtnWrapper}>
					<Button fullWidth variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', paddingX: '4rem', fontWeight: '600' }}>
						find my school
						<Image src={arrow} alt='arrow' width={15} height={0} className={styles.schoolBtnArrow} />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default School