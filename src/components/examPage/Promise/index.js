"use client";
import attention from './../../../../public/images/personalised-attention.svg'
import teachers from './../../../../public/images/best-teachers.svg'
import focus from './../../../../public/images/focus.svg'
import study from './../../../../public/images/study-material.svg'
import Image from 'next/image'
import styles from './../css/styles.module.css'

const Promise = () => {
    return (
        <div className={styles.promiseWrapper}>
            <div className={styles.promiseMain}>
                <div className={styles.promiseHead}>the <span className={styles.promiseBlue}>infinity</span> promise</div>
                <div className={styles.promiseGrid}>
                    <div className={`${styles.promiseItem} ${styles.promiseBorder1}`}>
                        <Image src={attention} alt="attention" width={45} />
                        personalized attention
                    </div>
                    <div className={`${styles.promiseItem} ${styles.promiseBorder2}`}>
                        <Image src={teachers} alt="attention" width={45} />
                        {"india's best teachers"}
                    </div>
                    <div className={`${styles.promiseItem} ${styles.promiseBorder3}`}>
                        <Image src={focus} alt="attention" width={45} />
                        focused doubt resolution
                    </div>
                    <div className={styles.promiseItem}>
                        <Image src={study} alt="attention" width={45} />
                        sri chaitanya study material
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promise