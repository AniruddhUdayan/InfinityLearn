"use client";
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'
import styles from './../../css/styles.module.css'
const LiveCourseCard = ({ title, desc, classes, img, price, point1, point2, isRecommended}) => {
    return (
        <div className={styles.clcMain}>
            <div className={styles.clcRel}>
                <Image src={img} alt="live course" className={styles.clcImg} />
                {isRecommended &&
                    <div className={styles.clcRec} style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }
                <div className={styles.clcImgMain}>
                    <div className={styles.clcImgTitle}>{title}</div>
                    <div className={styles.clcImgClass}>{classes}</div>
                </div>
            </div>
            <div className={styles.clcDetsMain}>
                <div className={styles.clcTitle}>{title}</div>
                <div className={styles.clcDesc}>{desc}</div>
                <div></div>
                <div className={styles.clcStarting}>starting at <span className={styles.clcPm}>₹{price}/month</span></div>
                <div className={styles.clcPoints}>
                    <div className={styles.clcPoint}>
                        <Image src={classesImg} alt="classes" width={20} />
                        {point1}
                    </div>
                    <div className={styles.clcPoint}>
                        <Image src={recordings} alt="recordings" width={25} />
                        {point2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveCourseCard