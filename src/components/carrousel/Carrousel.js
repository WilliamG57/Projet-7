import './carrousel.css'
import ArrowLeft from '../../assets/leftArrow.png'
import ArrowRight from '../../assets/rightArrow.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current + 1)
        if(current === imageSlider.length - 1)
        setCurrent(0)
    }

    const prevSlide = () => {
        setCurrent(current - 1)
        if(current === 0)
            setCurrent(imageSlider.length -1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[current]})`}} className='carrousel'>
            {imageSlider.length > 1 &&
            <>
                <img className='carrousel_arrow carrousel_arrow_left' src={ArrowLeft} onClick={prevSlide} alt='' />
                <img className='carrousel_arrow carrousel_arrow_right' src={ArrowRight} onClick={nextSlide} alt='' />
                <p className='slider_number'>{current + 1} / {imageSlider.length}</p>
            </>
            }
        </section>
    )
}