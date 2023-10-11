import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'
import Image from "next/image"
import views1 from './../../../../../public/images/views-1.svg'

const CourseCard = ({ title, img, classes, views, desc, price, live, point1, point2 }) => {
    return (
        <div className="p-2 lg:p-4 bg-white shadow-[0px_4px_15px_0px_#007BFF40] rounded-2xl flex flex-col min-w-full lg:min-w-[33%] ">
            <div className="relative">
                <Image src={img} alt="course" className="w-full" />
                <div className="w-2/3 h-full absolute top-0 left-0 ps-4 flex flex-col gap-4">
                    <div className="text-white font-bold text-3xl mt-8">{title}</div>
                    <div className="flex items-center">
                        <Image src={views1} alt="classes" width={30} />
                        <Image src={views1} alt="classes" width={30} className="-ms-[0.5rem]" />
                        <div className="ms-2 text-white">{views}</div>
                    </div>
                    <div className="text-[#FF6B00] bg-white px-2 py-1 mt-auto self-start text-sm rounded-t-lg">{classes}</div>
                </div>
            </div>
            <div className="font-bold text-2xl mt-4">{title}</div>
            <div className="text-[#52565B] text-sm ">{desc}</div>
            <div className="h-[1px] w-full my-4 bg-[#99CAFF]"></div>
            <div className="flex justify-between gap-4 items-center">
                <div className="text-[#52565B]">starting at <span className="text-[#00254C] font-bold">₹{price}/month</span></div>
                {!live && <div className="text-[#007BFF] text-sm">see more</div>}
            </div>
            {live && <>
                <div className="flex gap-2 text-sm my-2">
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