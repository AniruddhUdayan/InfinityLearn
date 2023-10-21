"use client";
import Image from "next/image"
import play from './../../../../../public/images/play-icon.svg'
import flag from './../../../../../public/images/blue-flag.svg'
import live from './../../../../../public/images/live-icon.svg'
import watchingIcon from './../../../../../public/images/watching-icon.svg'
import watchers from './../../../../../public/images/watchers.svg'

const ClassesCardFull = ({ img, sub, title, desc, started, by, byImg, isLive, watching, time, fullwidth, ref2 }) => {
    return (
        <div className={`mcc-main ` + (fullwidth ? 'mcc-main-full' : 'mcc-main-notfull')} ref={ref2}>            
            <div className={`relative`}>
                <Image src={img} alt="main" className="w-full" />
                {isLive && (
                    <Image src={play} alt="play" className="mcc-play" />
                )}
                {isLive && (
                    <div className="mcc-live-wrapper">
                        <Image src={live} alt="live" />
                        <div className="mcc-live-text">Live</div>
                    </div>                
                )}
                <div className="mcc-img" style={{
                    backgroundImage: `url(${flag.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundSize: 'fit'
                }}>
                    <Image src={isLive ? watchingIcon : watchers} alt="watching" />
                    <div className="mcc-live-text">{watching}{isLive && ' watching now'}</div>
                </div>
            </div>
            <div className="mcc-text">
                <div className="mcc-sub">{sub}</div>
                <div className={"mcc-title " + (fullwidth ? " mcc-title-full" : "")}>{title}</div>
                {fullwidth && <div className="mcc-desc">{desc}</div>}
                <div className={"mcc-started " + (fullwidth ? 'mcc-started-full' : '')}>{started}{time && <span className="mcc-time">, {time}</span>}</div>
                <div className="mcc-hl"></div>
                <div className={"mcc-by " + (fullwidth ? 'mcc-by-full' : '')}>
                    <Image src={byImg} alt="teacher" width={40} height={40} className="" />
                    by <span className="mcc-bold">{by}</span>
                </div>
            </div>
        </div>
    )
}

export default ClassesCardFull