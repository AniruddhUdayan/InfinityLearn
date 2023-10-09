import Image from 'next/image'
import star from './../../../../public/images/star-badge.svg'
import ResultCard from './ResultCard'
import rs1 from './../../../../public/images/result-guy-1.svg'
import rs2 from './../../../../public/images/result-guy-2.svg'
import rs3 from './../../../../public/images/result-guy-3.svg'
import starBig from './../../../../public/images/star-big.svg'
import { Button, Chip } from '@mui/material'

const Rankers = () => {
    return (
        <>
            <div className="lg:px-36 py-10">
                <div className="bg-[#00364E] py-10 lg:rounded-2xl text-white relative mb-10">
                    <Image src={starBig} alt="star" width={100} height={0} className="absolute top-0 lg:left-[10rem] right-0 lg:right-none transform -translate-x-1/2" />
                    <div className="font-bold text-5xl lg:text-center mb-8 px-4">top <span className="text-[#FCDE5A]">rankers</span></div>
                    <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-10 px-4">
                        <div className="flex gap-2 items-center">
                            <Image src={star} alt="star" width={20} />
                            31 Infinity Learners in top 100
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={star} alt="star" width={20} />
                            234 Infinity Learners in top 1000
                        </div>
                    </div>
                    <div className='px-6 lg:px-20 overflow-y-auto no-scrollbar flex gap-8 mt-10'>
                        <ResultCard result={{ image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
                        <ResultCard result={{ image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' }} />
                        <ResultCard result={{ image: rs3, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
                        <ResultCard result={{ image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
                        <ResultCard result={{ image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' }} />
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row gap-6 items-start px-4 lg:px-0'>
                    <div className='w-full lg:w-[40%] flex flex-col items-start'>
                        <div className='text-5xl font-bold mb-4 leading-[3.5rem]'>help us find the <span className='text-[#007BFF]'>ideal course</span> for you</div>
                        <div className='mb-4'>select at least <strong>5 preferences</strong></div>
                        <div className=' hidden lg:block text-center mt-4'>
                            <Button variant='contained' color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}} className='mt-auto self-center'>
                                view 5 courses
                            </Button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] flex flex-wrap gap-5 justify-start'>
                        <Chip label="visual learner" variant="contained" color='yellow' />
                        <Chip label="maximum revision" variant="outlined" color='black' />
                        <Chip label="mcq solver" variant="outlined" color='black' />
                        <Chip label="solo learner" variant="outlined" color='black' />
                        <Chip label="theoretical" variant="contained" color='yellow' />
                        <Chip label="need a schedule!" variant="outlined" color='black' />
                        <Chip label="learning should be fun" variant="outlined" color='black' />
                        <Chip label="group study" variant="outlined" color='black' />
                        <Chip label="physical books needed" variant="contained" color='yellow' />
                        <Chip label="serious student" variant="outlined" color='black' />
                        <Chip label="faculty interaction" variant="outlined" color='black' />
                        <Chip label="daily classes" variant="contained" color='yellow' />
                        <Chip label="board + competitive" variant="outlined" color='black' />
                        <Chip label="synced with school" variant="contained" color='yellow' />
                        <Chip label="weekend classes" variant="outlined" color='black' />
                        <Chip label="other" variant="outlined" color='black' />
                    </div>
                    <div className='lg:hidden self-stretch'>
                        <Button variant='contained' fullWidth color='primary' sx={{ borderRadius: '0.5rem' }} className=''>
                            view 5 courses
                        </Button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Rankers