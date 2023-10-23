import Image from 'next/image'
import green from './../../../../public/images/green-girl.webp'
import cap from './../../../../public/images/cap.svg'
import star from './../../../../public/images/star-big.svg'
import './styles.css'

import { Button } from '@mui/material'

const Scholarship = () => {
	return (
		<div className='sch-wrapper'>
			<div className="sch-main">
				<div className='sch-img'>
					<Image src={cap} alt='cap' width={120} height={0} className='sch-cap' />
					<Image src={green} alt='green' width={600} height={0} className='sch-girl' />
					<div className='sch-btn-1-wrapper'>
						<Button variant='contained' disableElevation fullWidth color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
					<div className='sch-lvl-1'>
						<div className='sch-lvl-2'>
							<div className='sch-lvl-3'></div>
						</div>
					</div>
				</div>
				<div className='sch-text'>
					<div className='sch-title'>get up to <span className='sch-high'>50% scholarship</span></div>
					<div className='sch-desc'>over <span className='sch-high-2'>500+</span> students awarded scholarships worth of <span className='sch-high-2'>₹50L</span></div>
					<div className='sch-btn-2-wrapper'>
						<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
							apply to scholarships
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scholarship