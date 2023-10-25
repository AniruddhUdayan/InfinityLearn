"use client";
import Image from "next/image"
import loc from './../../../../../public/images/location-icon.svg'
import air from './../../../../../public/images/crown-air-icon.svg'
import styles from './../../css/styles.module.css'

const ResultCard = ({ result, ref2 }) => {
	return (
		<div className={styles.rcMain} ref={ref2}>
			<div className={styles.rcAirWrapper} style={{ backgroundColor: result.color}}>
				<Image src={air} alt="air" width={20} height={0} />
				<div>AIR {result.air} <span>•</span> score {result.score}</div>
			</div>
			<div className={styles.rcActual}>
				<div>
					<Image src={result.image} alt={result.name} width={120} height={0} className={styles.rcImg} />
				</div>
				<div className={styles.rcText}>
					<div className={styles.rcName}>{result.name}</div>
					<div className={styles.rcLocWrapper}>
						<Image src={loc} alt="location" width={20} height={0} />
						<div className={styles.rcLoc}>{result.city}</div>
					</div>
					<div className={styles.rcCourse}>NEET 2022</div>
				</div>
			</div>
		</div>
	)
}

export default ResultCard