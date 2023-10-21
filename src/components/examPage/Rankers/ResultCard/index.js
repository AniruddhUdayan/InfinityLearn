"use client";
import Image from "next/image"
import loc from './../../../../../public/images/location-icon.svg'
import air from './../../../../../public/images/crown-air-icon.svg'

const ResultCard = ({ result, ref2 }) => {
	return (
		<div className="rc-main" ref={ref2}>
			<div className="rc-air-wrapper" style={{ backgroundColor: result.color}}>
				<Image src={air} alt="air" width={20} height={0} />
				<div>AIR {result.air} <span>•</span> score {result.score}</div>
			</div>
			<div className="rc-actual">
				<div>
					<Image src={result.image} alt={result.name} width={120} height={0} className="rc-img" />
				</div>
				<div className="rc-text">
					<div className="rc-name">{result.name}</div>
					<div className="rc-loc-wrapper">
						<Image src={loc} alt="location" width={20} height={0} />
						<div className="rc-loc">{result.city}</div>
					</div>
					<div className="rc-course">NEET 2022</div>
				</div>
			</div>
		</div>
	)
}

export default ResultCard