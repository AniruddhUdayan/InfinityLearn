import Image from "next/image";
import styles from './../../css/styles.module.css'

const FacultyCard = ({ ref2, name, image, headline, subject, usp }) => {
	return (
		<div ref={ref2} className={styles.fcWrapper}>
			<div className={styles.fcMain}>
				<Image src={image} alt={name} width={350} height={0} className={styles.fcImg} />
				<div className={styles.fcName}>{name}</div>
				<div className={styles.fcHeadline}>{headline}</div>
				<div className={styles.fcFlex}>
					<div className={styles.fcPt1}>{subject}</div>
					<div className={styles.fcPt2}>{usp}</div>
				</div>
			</div>
		</div>
	)
}

export default FacultyCard;