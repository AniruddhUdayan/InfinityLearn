"use client";
import Image from "next/image"
import play from './../../../../../public/images/play-icon.svg'
import flag from './../../../../../public/images/blue-flag.svg'
import live from './../../../../../public/images/live-icon.svg'
import watchingIcon from './../../../../../public/images/watching-icon.svg'
import watchers from './../../../../../public/images/watchers.svg'

const ClassesCardFull = ({ img, sub, title, desc, started, by, byImg, isLive, watching, time, fullwidth}) => {
    return (
        <div className={`grid p-4 shadow-[0px_4px_15px_0px_#007BFF40] rounded-xl gap-4 min-w-[20rem] ` + (fullwidth ? 'w-full grid-cols-1 lg:grid-cols-2' : 'w-auto grid-cols-1')}>
            <div className={`relative `}>
                <Image src={img} alt="main" className="w-full" />
                {isLive && (
                    <Image src={play} alt="play" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2rem]" />
                )}
                {isLive && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#FF0001] rounded-md px-2 py-1">
                        <Image src={live} alt="live" />
                        <div className="text-white text-sm">Live</div>
                    </div>                
                )}
                <div className="absolute top-4 left-0 flex items-center gap-2 px-2 py-1 pe-4" style={{
                    backgroundImage: `url(${flag.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundSize: 'fit'
                }}>
                    <Image src={isLive ? watchingIcon : watchers} alt="watching" />
                    <div className="text-white text-sm">{watching}{isLive && ' watching now'}</div>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
                <div className="text-[#FF6B00] text-sm px-2 py-1 bg-[#FFE4CC] border rounded-md border-[#FF7A00]">{sub}</div>
                <div className={"font-bold " + (fullwidth ? "text-xl lg:text-4xl" : "text-xl")}>{title}</div>
                {fullwidth && <div className="text-[#52565B] text-xl hidden lg:block">{desc}</div>}
                <div className={"text-[#007BFF] " + (fullwidth ? 'lg:text-xl' : '')}>{started}{time && <span className="text-[#52565B]">, {time}</span>}</div>
                <div className="h-[1px] w-full bg-[#6DC6E1] mt-auto mb-2"></div>
                <div className={"flex gap-2 items-center " + (fullwidth ? 'lg:text-lg' : '')}>
                    <Image src={byImg} alt="teacher" width={40} height={40} className="" />
                    by <span className="font-bold">{by}</span>
                </div>
            </div>
        </div>
    )
}

export default ClassesCardFull