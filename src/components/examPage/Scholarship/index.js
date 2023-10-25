import Image from 'next/image'
import green from './../../../../public/images/green-girl.webp'
import cap from './../../../../public/images/cap.svg'
import star from './../../../../public/images/star-big.svg'
import styles from './../css/styles.module.css'

import { Button } from '@mui/material'

const Scholarship = () => {
	return (
		<div className={styles.schWrapper}>
			<div className={styles.schMain}>
				<div className={styles.schImg}>
					<Image src={cap} alt='cap' width={120} height={0} className={styles.schCap} />
					<Image src={green} alt='green' width={600} height={0} className={styles.schGirl} />
					<div className={styles.schBtn1Wrapper}>
						<Button variant='contained' disableElevation fullWidth color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
					<div className={styles.schLvl1}>
						<div className={styles.schLvl2}>
							<div className={styles.schLvl3}></div>
						</div>
					</div>
				</div>
				<div className={styles.schText}>
					<div className={styles.schTitle}>get up to <span className={styles.schHigh}>50% scholarship</span></div>
					<div className={styles.schDesc}>over <span className={styles.schHigh2}>500+</span> students awarded scholarships worth of <span className='sch-high-2'>₹50L</span></div>
					<div className={styles.schBtn2Wrapper}>
						<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scholarship