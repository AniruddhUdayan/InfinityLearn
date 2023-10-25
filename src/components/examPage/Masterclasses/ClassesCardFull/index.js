"use client";
import Image from "next/image"
import play from './../../../../../public/images/play-icon.svg'
import flag from './../../../../../public/images/blue-flag.svg'
import live from './../../../../../public/images/live-icon.svg'
import watchingIcon from './../../../../../public/images/watching-icon.svg'
import watchers from './../../../../../public/images/watchers.svg'
import styles from './../../css/styles.module.css'

const ClassesCardFull = ({ img, sub, title, desc, started, by, byImg, isLive, watching, time, fullwidth, ref2 }) => {
    return (
        <div className={`${styles.mccMain} ` + (fullwidth ? styles.mccMainFull : styles.mccMainNotfull)} ref={ref2}>
            <div className={styles.relative}>
                <Image src={img} alt="main" className={styles.wFull} />
                {isLive && (
                    <Image src={play} alt="play" className={styles.mccPlay} />
                )}
                {isLive && (
                    <div className={styles.mccLiveWrapper}>
                        <Image src={live} alt="live" />
                        <div className={styles.mccLiveText}>Live</div>
                    </div>                
                )}
                <div className={styles.mccImg} style={{
                    backgroundImage: `url(${flag.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundSize: 'fit'
                }}>
                    <Image src={isLive ? watchingIcon : watchers} alt="watching" />
                    <div className={styles.mccLiveText}>{watching}{isLive && ' watching now'}</div>
                </div>
            </div>
            <div className={styles.mccText}>
                <div className={styles.mccSub}>{sub}</div>
                <div className={`${styles.mccTitle} ` + (fullwidth ? styles.mccTitleFull : "")}>{title}</div>
                {fullwidth && <div className={styles.mccDesc}>{desc}</div>}
                <div className={`${styles.mccStarted} ` + (fullwidth ? styles.mccStartedFull : '')}>{started}{time && <span className="mcc-time">, {time}</span>}</div>
                <div className={styles.mccHl}></div>
                <div className={`${styles.mccBy} ` + (fullwidth ? styles.mccByFull : '')}>
                    <Image src={byImg} alt="teacher" width={40} height={40} />
                    by <span className={styles.mccBold}>{by}</span>
                </div>
            </div>
        </div>
    )
}

export default ClassesCardFull