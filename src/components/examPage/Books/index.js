import expand from './../../../../public/images/expand_more.svg'
import check from './../../../../public/images/check-icon.svg'
import Image from 'next/image'
import book from './../../../../public/images/book.webp'
import bookM from './../../../../public/images/book.webp'
import { Button } from '@mui/material'
import styles from './../css/styles.module.css'
import { useDispatch } from 'react-redux'
import { setIsPopupShow, setComponentToShow } from '@/store/PackageSubscription/PackageSubscriptionPopup'

const Books = ({ classFor, examFor }) => {

    const dispatch = useDispatch()

    const showPackageSubscriptionPopup = () => {
        dispatch(setIsPopupShow(true))
        dispatch(setComponentToShow('duration'))
    }

    return (
        <div className={styles.booksMain}>
            <div className={styles.booksHead}><span className={styles.blue}>Comprehensive</span> Sri Chaitanya books for {examFor?.toUpperCase() ?? 'JEE'}</div>
            <div className={styles.booksFlex}>
                <div className={styles.booksBook}>
                    <Image src={book} alt='book' width={400} height={0} className={styles.lgOnly} />
                    <Image src={bookM} alt='book' height={0} className={`${styles.lgNot} ${styles.wFull}`} />
                    <div className={styles.booksBtns}>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} className={styles.rotate180} />
                        </Button>
                        <Button variant="contained" color="lightBlue" disableElevation className={styles.wAuto} sx={{ borderRadius: '0.5rem', minWidth: 0, aspectRatio: '1/1' }}  >
                            <Image src={expand} alt="expand" width={10} />
                        </Button>
                    </div>
                </div>
                <div className={styles.booksTextMain}>
                    <div className={styles.booksTextTitle}>{examFor?.toUpperCase() ?? 'JEE'} Maths class 11<span className='books-no-1'> (12 Books)</span></div>
                    <div className={styles.booksNo2}>(12 Books)</div>
                    <div className={styles.booksPriceText}>
                        <div className={styles.booksPriceText1}>₹12,000</div>
                        <div className={styles.booksPriceText2}>(-20%)</div>
                        <div className={styles.booksPriceText3}>₹15,000</div>
                    </div>
                    <div className={styles.booksSpecial}>SPECIAL PRICE! <span className='books-special-more'>offer ends 21st august</span></div>
                    <div className={styles.booksPts}>
                        <div className={styles.booksPt}>
                            <Image src={check} alt="check" width={20} height={0} />
                            <div>based on the latest {examFor?.toUpperCase() ?? 'JEE'} pattern</div>
                        </div>
                        <div className={styles.booksPt}>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div>Concise Theory + Practice Questions</div>
                        </div>
                        <div className={styles.booksPt}>
                            <Image src={check} alt="check" width={20} height={0} className='' />
                            <div>Topic-wise Detailed MCQs for revision</div>
                        </div>
                    </div>
                    <Button variant="outlined" color="black" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className={styles.booksBtn}>
                        view sample
                    </Button>
                    <Button onClick={showPackageSubscriptionPopup} variant="contained" color="primary" disableElevation sx={{ borderRadius: '0.5rem', fontWeight: '600'}} className={styles.booksBtn}>
                        purchase
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Books