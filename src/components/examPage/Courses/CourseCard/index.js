"use client";
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import views1 from './../../../../../public/images/views-1.webp'
import expand from './../../../../../public/images/expand_more.svg'

const CourseCard = ({ title, img, classes, views, desc, price, live, point1, point2, isRecommended, ref2 }) => {
    return (
        <div className="cc-main" ref={ref2}>
            <div className="relative">
                <Image src={img} alt="course" className="cc-img" />
                {isRecommended &&
                    <div className="cc-img-rec" style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }

                <div className="cc-img-main">
                    <div className='cc-img-text'>
                        <div className="cc-img-text-title">{title}</div>
                        <div className="cc-img-views-div">
                            <Image src={views1} alt="classes" width={30} />
                            <Image src={views1} alt="classes" width={30} className="cc-img-view-2" />
                            <div className="cc-img-views">{views}</div>
                        </div>
                    </div>
                    <div className="cc-class">{classes}</div>
                </div>
            </div>
            <div className="cc-title">{title}</div>
            <div className="cc-desc">{desc}</div>
            <div className="cc-hl"></div>
            <div className="cc-footer">
                <div className="cc-starting">starting at <span className="black">₹{price}/month</span></div>
                {!live && <div className="cc-more">see more <Image src={expand} width={7} alt={'expand'} className='cc-90' /></div>}
            </div>
            {live && <>
                <div className="cc-p1">
                    <Image src={classesImg} alt="classes" width={20} />
                    {point1}
                </div>
                <div className="cc-p2">
                    <Image src={recordings} alt="recordings" width={25} />
                    {point2}
                </div>
            </>}
        </div>
    )
}

export default CourseCard