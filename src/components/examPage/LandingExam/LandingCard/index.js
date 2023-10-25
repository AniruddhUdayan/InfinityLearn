"use client";
import { Button } from "@mui/material"
import Image from "next/image"
import arrow from './../../../../../public/images/arrow-tr-blue.svg'
import styles from './../../css/styles.module.css'

const LandingCard = ({pic, rank, name, batch, ref2}) => {
  return (
		<div ref={ref2} className={styles.landingExamCardMain}>
			<div className={styles.landingExamCardDetails}>
				<div>Rank {rank}</div>
				<div className={styles.landingExamCardName}>{name}</div>
				<div>{batch}</div>
				<div>
					<Button variant='contained' className={styles.landingExamCardButton} disableElevation color='white' sx={{ borderRadius: '0.5rem'}}>
						know more
						<Image src={arrow} alt='arrow' width={15} height={0} />
					</Button>
				</div>
			</div>
			<div className={styles.landingExamCardImage}>
				<Image src={pic} alt="orange" width={300} height={0} />
			</div>
		</div>
	)
}

export default LandingCard