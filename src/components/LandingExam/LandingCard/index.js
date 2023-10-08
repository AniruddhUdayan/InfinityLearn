import { Button } from "@mui/material"
import Image from "next/image"

const LandingCard = ({pic, rank, name, batch}) => {
  return (
		<div className="min-w-[25rem] lg:min-w-[50rem] border border-[#FCDE5A] border-[4px] grid grid-cols-2 gap-8 rounded-2xl text-white">
			<div className="p-4 lg:p-12 flex flex-col gap-1 lg:gap-4 justify-end">
				<div>Rank {rank}</div>
				<div className="text-3xl lg:text-4xl font-bold">{name}</div>
				<div>{batch}</div>
				<div>
					<Button variant='contained' disableElevation color='white' sx={{ borderRadius: '0.5rem'}}>
						know more
					</Button>
				</div>
			</div>
			<div className="flex justify-center">
				<Image src={pic} alt="orange" width={300} height={0} />
			</div>
		</div>
	)
}

export default LandingCard