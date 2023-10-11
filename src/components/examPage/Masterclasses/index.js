import Image from "next/image"
import check from './../../../../public/images/check-icon.svg'
import main from './../../../../public/images/mc-main.svg'
import mainTeacher from './../../../../public/images/mc-teacher-1.svg'
import ClassesCardFull from './ClassesCardFull'
import { Button, Tab, Tabs } from "@mui/material"
import { useState } from "react"

const Masterclasses = () => {
    const [tabValue, setTabValue] = useState(0)
    return (
        <div className="p-4 lg:p-10 py-8 lg:py-10 bg-white">
            <div className="text-5xl font-bold text-center px-56 text-[#080E14] mb-10 hidden lg:block">remember concepts for a lifetime with <span className="text-[#007BFF]">masterclasses</span></div>
            <div className="text-4xl font-bold text-[#080E14] mb-6 lg:hidden">learn in depth with <span className="text-[#007BFF]">masterclasses</span></div>
            <div className="lg:px-48 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B] border-e-[1px] border-[#99CAFF]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B] border-e-[1px] border-[#99CAFF]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
                <div className="flex lg:flex-col items-center gap-4 lg:px-10 text-center text-[#52565B]">
                    <Image src={check} alt="check" className="w-[1.5rem] lg:[2rem]" />
                    Advanced sessions for specific topics
                </div>
            </div>
            <div className="-ms-4 my-10 flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar p-4 items-stretch">
                <div className="lg:col-span-3 flex items-stretch lg:block">
                    <ClassesCardFull fullwidth={true} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                </div>
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
            </div>
            <div className="font-bold text-[#080E14] text-4xl mt-4">subject wise videos</div>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="my-4" themeColor='yellow' sx={{ '& .MuiTabs-flexContainer' : { justifyContent: 'start' }, '& .MuiTab-root' : { backgroundColor: '#F1F2F6' } }}>
                <Tab label="Chemistry" className="" themeColor='yellow' />
                <Tab label="Physics" className="" themeColor='yellow' />
                <Tab label="Maths" className="" themeColor='yellow' />
            </Tabs>
            <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar p-4 -ms-4">
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
            </div>

            <div className="font-bold text-[#080E14] text-4xl mt-12 mb-4">most viewed videos</div>
            <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar p-4 -ms-4">
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='Started 1 hour ago' by='Ranjan M' byImg={mainTeacher} isLive={true} watching={'14.3k'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
                <ClassesCardFull fullwidth={false} img={main} sub='Chemistry' title='organic chemistry reaction study' desc='Two line detailed description about the course [...]' started='starts on wednesday' by='Ranjan M' byImg={mainTeacher} isLive={false} watching={'14.3k'} time={'July 5 at 1:00pm'} />
            </div>
            <div className="mt-8 text-center">
                <Button variant="contained" className="w-full lg:w-auto" sx={{ borderRadius: '0.5rem', paddingX: '4rem' }}>
                    book free counselling session
                </Button>
            </div>
        </div>
    )
}

export default Masterclasses