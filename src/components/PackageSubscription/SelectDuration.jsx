import { Container } from "react-bootstrap";
import React, { useState } from 'react'
import recc from './../../../public/images/recc.svg'
import minus from './../../../public/images/minus.svg'
import plus from './../../../public/images/plus.svg'
import Image from "next/image";
import check from './../../../public/images/check-icon.svg'

const DurationCard = ({ duration, price, emi, total, totalBefore, isRecommended, save, selected, onClick }) => {
  return (
    <div className={`dc ${selected ? 'selected' : ''}`} onClick={onClick}>
      {isRecommended && <Image src={recc} alt='recc' className="dc-recc" />}
      <div className="dc-main">
        <div className="dc-left">
          <div className="dc-time">
            {duration} <span className="dc-years">years</span>
          </div>
          <div className="dc-save">
            save {save}
          </div>
        </div>
        <div>
          <div className="dc-ppm">
            ₹ {price} <span className="dc-ppm-span">/month</span>
          </div>
          <div className="dc-emi">
            &nbsp;
            {emi && <>EMI starts with <span className="dc-emi-span">₹ {emi}</span></>}
          </div>
          <div className="dc-total">
            total <span className="dc-total-span">₹{total}</span>
          </div>
          <div className="dc-total-before">
            ₹{totalBefore}
          </div>
        </div>
      </div>
    </div>
  )
}

const AddOnCard = ({ title, price, selected, points, onClick }) => {
  return (
    <div className="ac-main">
      <div className="ac-top">
        <div className="ac-top-right">
          <div className="ac-title">
            {title}
          </div>
          <div className="ac-price">
            + ₹{price}
          </div>
        </div>
      </div>
      <div className="ac-hl"></div>
      <div className="ac-bot">
        {points?.map((point, index) => (
          <div className="ac-pt" key={index}>
            <Image src={check} alt='check' className="ac-pt-img" />
            <div>{point}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SelectDuration = () => {
  const [durationExpanded, setDurationExpanded] = useState(false)
  const [addOnsExpanded, setAddOnsExpanded] = useState(false)
  const [selectedDuration, setSelectedDuration] = useState(1)

  return (
    <Container>
      <div className='dur-main'>
        <div className='dur-head-div'>
          <div>select duration</div>
          <div className="dur-head-btn" onClick={() => setDurationExpanded(!durationExpanded)}>
            <Image src={durationExpanded ? minus : plus} alt='duration' />
          </div>
        </div>
        {durationExpanded && 
          <div className="dur-cards">
            <DurationCard duration='1' price='3,750' emi='1,750' total='90,000' totalBefore='120,000' isRecommended={true} save={'43%'} selected={selectedDuration === 1} onClick={() => setSelectedDuration(1)} />
            <DurationCard duration='1' price='3,750' emi='' total='90,000' totalBefore='120,000' isRecommended={false} save={'43%'} selected={selectedDuration === 2} onClick={() => setSelectedDuration(2)} />
          </div>        
        }
        <div className='dur-head-div'>
          <div>select add ons</div>
          <div className="dur-head-btn" onClick={() => setAddOnsExpanded(!addOnsExpanded)}>
            <Image src={addOnsExpanded ? minus : plus} alt='addOn' />
          </div>
        </div>
        {addOnsExpanded && 
          <div className="dur-cards">
            <AddOnCard title='books' price={'4,580'} points={[
              '24 books for biology, chemistry and physics',
              'designed by experts',
              'mcqs + subjective questions',
              'one line text',
              'one line text'
            ]} 
            selected={false} onClick={() => {}}
            />
          </div>
        }
      </div>
    </Container>
  )
}

export default SelectDuration
