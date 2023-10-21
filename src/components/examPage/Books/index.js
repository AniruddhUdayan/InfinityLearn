import expand from './../../../../public/images/expand_more.svg'
import check from './../../../../public/images/check-icon.svg'
import Image from 'next/image'
import book from './../../../../public/images/book.webp'
import bookM from './../../../../public/images/book.webp'
import { Button } from '@mui/material'
import './styles.css'

const Books = ({ classFor, examFor }) => {
    return (
        <div className="books-main">
            <div className="books-head"><span className="blue">Comprehensive</span> Sri Chaitanya books for {examFor?.toUpperCase() ?? 'JEE'}</div>
            <div className="books-flex">
                <div className='books-book'>
                    <Image src={book} alt='book' width={400} height={0} className='lg-only' />
                    <Image src={bookM} alt='book' height={0} className='lg-not w-full' />
                    <div className="books-btns">
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} className="rotate-180" />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className="w-auto" sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className='books-text-main'>
                    <div className='books-text-title'>{examFor?.toUpperCase() ?? 'JEE'} Maths class 11<span className='books-no-1'> (12 Books)</span></div>
                    <div className='books-no-2'>(12 Books)</div>
                    <div className='books-price-text'>
                        <div className='books-price-text-1'>₹12,000</div>
                        <div className='books-price-text-2'>(-20%)</div>
                        <div className='books-price-text-3'>₹15,000</div>
                    </div>
                    <div className='books-special '>SPECIAL PRICE! <span className='books-special-more'>offer ends 21st august</span></div>
                    <div className="books-pts">
                        <div className='books-pt'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=''>based on the latest {examFor?.toUpperCase() ?? 'JEE'} pattern</div>
                        </div>
                        <div className='books-pt'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=''>Concise Theory + Practice Questions</div>
                        </div>
                        <div className='books-pt'>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div className=''>Topic-wise Detailed MCQs for revision</div>
                        </div>
                    </div>
                    <Button variant="outlined" color="black" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className="books-btn">
                        view sample
                    </Button>
                    <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className="books-btn">
                        purchase
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Books