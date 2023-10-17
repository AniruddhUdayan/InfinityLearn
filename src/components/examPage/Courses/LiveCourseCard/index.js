"use client";
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'

const LiveCourseCard = ({ title, desc, classes, img, price, point1, point2, isRecommended}) => {
    return (
        <div className="p-4 bg-white shadow-[0px_4px_15px_0px_#007BFF40] rounded-2xl my-2 flex ">
            <div className="w-[45%] relative">
                <Image src={img} alt="live course" className="w-full aspect-[5/3]" />
                {isRecommended &&
                    <div className="absolute top-[0.5rem] -left-[1px] px-6 py-2 flex items-center" style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }
                <div className="w-2/3 h-full absolute ps-10 top-0 left-0 flex flex-col justify-center items-start gap-4">
                    <div className="text-white text-3xl font-bold">{title}</div>
                    <div className="bg-white text-[#FF6B00] text-sm px-2 rounded-md">{classes}</div>
                </div>
            </div>
            <div className="w-[55%] p-6 flex flex-col gap-4">
                <div className="text-2xl font-bold text-[#080E14]">{title}</div>
                <div className="text-[#6B6E72]">{desc}</div>
                <div></div>
                <div className="text-[#52565B]">starting at <span className="font-bold text-lg text-[#00254C]">₹{price}/month</span></div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Image src={classesImg} alt="classes" width={20} />
                        {point1}
                    </div>
                    <div className="flex gap-2">
                        <Image src={recordings} alt="recordings" width={25} />
                        {point2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveCourseCard