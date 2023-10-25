"use client";
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import views1 from './../../../../../public/images/views-1.webp'
import expand from './../../../../../public/images/expand_more.svg'
import styles from './../../css/styles.module.css'

const CourseCard = ({ title, img, classes, views, desc, price, live, point1, point2, isRecommended, ref2 }) => {
    return (
        <div className={styles.ccMain} ref={ref2}>
            <div className={styles.relative}>
                <Image src={img} alt="course" className={styles.ccImg} />
                {isRecommended &&
                    <div className={styles.ccImgRec} style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }

                <div className={styles.ccImgMain}>
                    <div className={styles.ccImgText}>
                        <div className={styles.ccImgTextTitle}>{title}</div>
                        <div className={styles.ccImgViewsDiv}>
                            <Image src={views1} alt="classes" width={30} />
                            <Image src={views1} alt="classes" width={30} className={styles.ccImgView2} />
                            <div className={styles.ccImgViews}>{views}</div>
                        </div>
                    </div>
                    <div className={styles.ccClass}>{classes}</div>
                </div>
            </div>
            <div className={styles.ccTitle}>{title}</div>
            <div className={styles.ccDesc}>{desc}</div>
            <div className={styles.ccHl}></div>
            <div className={styles.ccFooter}>
                <div className={styles.ccStarting}>starting at <span className={styles.black}>₹{price}/month</span></div>
                {!live && <div className={styles.ccMore}>see more <Image src={expand} width={7} alt={'expand'} className={styles.cc90} /></div>}
            </div>
            {live && <>
                <div className={styles.ccP1}>
                    <Image src={classesImg} alt="classes" width={20} />
                    {point1}
                </div>
                <div className={styles.ccP2}>
                    <Image src={recordings} alt="recordings" width={25} />
                    {point2}
                </div>
            </>}
        </div>
    )
}

export default CourseCard