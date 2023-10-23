"use client";
import Image from "next/image"
import flag from './../../../../../public/images/green-flag.svg'
import classesImg from './../../../../../public/images/lc-classes.svg'
import recordings from './../../../../../public/images/lc-recordings.svg'

const LiveCourseCard = ({ title, desc, classes, img, price, point1, point2, isRecommended}) => {
    return (
        <div className="clc-main">
            <div className="clc-rel">
                <Image src={img} alt="live course" className="clc-img" />
                {isRecommended &&
                    <div className="clc-rec" style={{
                        backgroundImage: `url(${flag.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                        recommended by rankers
                    </div>
                }
                <div className="clc-img-main">
                    <div className="clc-img-title">{title}</div>
                    <div className="clc-img-class">{classes}</div>
                </div>
            </div>
            <div className="clc-dets-main">
                <div className="clc-title">{title}</div>
                <div className="clc-desc">{desc}</div>
                <div></div>
                <div className="clc-starting">starting at <span className="clc-pm">₹{price}/month</span></div>
                <div className="clc-points">
                    <div className="clc-point">
                        <Image src={classesImg} alt="classes" width={20} />
                        {point1}
                    </div>
                    <div className="clc-point">
                        <Image src={recordings} alt="recordings" width={25} />
                        {point2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveCourseCard