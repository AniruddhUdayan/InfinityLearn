import FacultyCard from "./FacultyCard"
import faculty1 from './../../../../public/images/faculty1.svg'
import faculty2 from './../../../../public/images/faculty2.svg'
import faculty3 from './../../../../public/images/faculty3.svg'
import { Button } from "@mui/material"

const Faculty = () => {
	return (
		<div className="bg-[#F3F3F3] p-4 lg:p-10 py-6 lg:py-10 w-full">
			<div className="text-4xl lg:text-5xl font-bold text-start lg:text-center text-[#080E14]">study with india's <span>best teachers</span></div>
			<div className="flex gap-4 mt-6 lg:mt-10 justify-start lg:justify-center no-scrollbar w-full overflow-x-scroll">
				<FacultyCard name='Prerana AR' image={faculty1} headline='10+ Years Teaching | NIT Nagpur' subject='Maths' usp='Taught 64 NEET Toppers' />
				<FacultyCard name='Prerana AR' image={faculty2} headline='10+ Years Teaching | NIT Nagpur' subject='Maths' usp='Taught 64 NEET Toppers' />
				<FacultyCard name='Prerana AR' image={faculty3} headline='10+ Years Teaching | NIT Nagpur' subject='Maths' usp='Taught 64 NEET Toppers' />
			</div>
			<div className="text-center mt-4 lg:mt-10">
				<Button variant='outlined' className="w-full lg:w-auto" disableElevation color='black' sx={{ fontWeight: 'bold', borderRadius: '0.5rem', paddingX: '4rem' }} >
					meet the teachers
				</Button>
			</div>
		</div>
	)
}

export default Faculty