"use client";
import Image from "next/image"
import loc from './../../../../../public/images/location-icon.svg'
import air from './../../../../../public/images/crown-air-icon.svg'

const ResultCard = ({ result, ref2 }) => {
	return (
		<div className="relative snap-center" ref={ref2}>
			<div className="absolute flex font-bold px-4 py-2 z-10 pb-10 left-0 top-0 rounded-t-xl gap-2 text-black" style={{ backgroundColor: result.color}}>
				<Image src={air} alt="air" width={20} height={0} />
				<div>AIR {result.air} <span>•</span> score {result.score}</div>
			</div>
			<div className="p-2 flex rounded-xl bg-white mt-10 shadow-[0px_4px_20px_0px_#0083E833] w-[20rem] min-w-[20rem] relative mb-4 gap-4 z-20">
				<div>
					<Image src={result.image} alt={result.name} width={120} height={0} className="w-[90px] lg:w-[120px] aspect-square" />
				</div>
				<div className="p-4 flex flex-col">
					<div className="text-[#080E14] text-lg font-bold">{result.name}</div>
					<div className="flex">
						<Image src={loc} alt="location" width={20} height={0} />
						<div className="text-[#6B6E72] text-sm">{result.city}</div>
					</div>
					<div className="text-[#FF7A00] mt-auto">NEET 2022</div>

				</div>
			</div>
		</div>
	)
}

export default ResultCard