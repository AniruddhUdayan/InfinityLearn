"use client";
import { Button } from "@mui/material"
import Image from "next/image"
import arrow from './../../../../../public/images/arrow-tr-blue.svg'

const LandingCard = ({pic, rank, name, batch, ref2}) => {
  return (
		<div ref={ref2} className="landing-exam-card-main">
			<div className="landing-exam-card-details">
				<div>Rank {rank}</div>
				<div className="landing-exam-card-name">{name}</div>
				<div>{batch}</div>
				<div>
					<Button variant='contained' className="landing-exam-card-button"  disableElevation color='white' sx={{ borderRadius: '0.5rem'}}>
						know more
						<Image src={arrow} alt='arrow' width={15} height={0} />
					</Button>
				</div>
			</div>
			<div className="landing-exam-card-image">
				<Image src={pic} alt="orange" width={300} height={0} />
			</div>
		</div>
	)
}

export default LandingCard