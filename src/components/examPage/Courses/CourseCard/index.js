"use client";
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import views1 from './../../../../../public/images/views-1.webp'
import expand from './../../../../../public/images/expand_more.svg'

const CourseCard = ({ title, img, classes, views, desc, price, live, point1, point2, isRecommended, ref2 }) => {
    return (
        <div className="p-2 lg:p-4 bg-white shadow-[0px_4px_15px_0px_#007BFF40] rounded-2xl flex flex-col min-w-full lg:min-w-[calc(33%-0.25rem)] snap-center" ref={ref2}>
            <div className="relative">
                <Image src={img} alt="course" className="w-full aspect-[4/3]" />
                {isRecommended &&
                    <div className="absolute top-[0.5rem] -left-[1px] px-6 py-2 flex items-center text-white" style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }

                <div className="w-2/3 h-full absolute top-0 left-0 ps-4 flex flex-col gap-4 justify-center">
                    <div className='flex flex-col grow justify-center gap-4 lg:gap-8'>
                        <div className="text-white font-bold text-3xl mt-8">{title}</div>
                        <div className="flex items-center">
                            <Image src={views1} alt="classes" width={30} />
                            <Image src={views1} alt="classes" width={30} className="-ms-[0.8rem]" />
                            <div className="ms-2 text-white text-sm font-bold">{views}</div>
                        </div>
                    </div>
                    <div className="text-[#FF6B00] bg-white px-2 py-1 mt-auto self-start text-sm rounded-t-lg font-semibold">{classes}</div>
                </div>
            </div>
            <div className="font-bold text-2xl mt-6 mb-2">{title}</div>
            <div className="text-[#52565B] text-sm ">{desc}</div>
            <div className="h-[1px] w-full my-6 bg-[#99CAFF]"></div>
            <div className="flex justify-between gap-4 mb-3 items-center">
                <div className="text-[#52565B] text-lg">starting at <span className="text-[#00254C]">₹{price}/month</span></div>
                {!live && <div className="text-[#007BFF] text-sm">see more <Image src={expand} width={7} alt={'expand'} className='rotate-90 inline-block ms-2' /></div>}
            </div>
            {live && <>
                <div className="flex gap-2 text-sm mt-2 text-[#52565B] mb-4">
                    <Image src={classesImg} alt="classes" width={20} />
                    {point1}
                </div>
                <div className="flex gap-2 text-sm">
                    <Image src={recordings} alt="recordings" width={25} />
                    {point2}
                </div>
            </>}
        </div>
    )
}

export default CourseCard