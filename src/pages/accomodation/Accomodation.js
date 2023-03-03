import './accomodation.css'
import data from '../../data/data'
import Header from '../../components/header/Header'
import Slider from '../../components/carrousel/Carrousel'
import Collapse from '../../components/collapse/Collapse'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'

export default function Accomodation() {
    const [imageSlider, setImageSlider] = useState([]);
    const {accomodationNumber} = useParams();
    const accomodation = data.find(data => data.id === accomodationNumber);

    useEffect(() => {
        const accomodation = data.find(data => data.id === accomodationNumber);
        setImageSlider(accomodation.pictures);
    }, [accomodationNumber]);

    const name = accomodation.host.name;
    const rating = accomodation.rating;
    const description = accomodation.description;
    const equipment = accomodation.equipments;

    return (
        <>
        <Header />
        <Slider imageSlider={imageSlider}/>
        <main className='accomodation'>
            <div className='accomodation_content'>
                <div className='accomodation_content_info'>
                    <h1>{accomodation.title}</h1>
                    <p>{accomodation.location}</p>
                </div>
                <div> {accomodation.tags.map((tag, index) => {
                    return (
                        <button key={index}>{tag}</button>
                    )
                })}
                </div>
            </div>
            <div className='accomodation_content_host'>
                <div>
                    <div className='accomodation_content_host_name'>
                        <span>{name}</span>
                    </div>
                    <img src={accomodation.host.picture} alt='' />
                </div>
                <div className='accomodation_content_host_rating'>
                    {[1, 2, 3, 4, 5].map((rate, index) => {
                        const ratingValue = index + 1;
                        return (
                            <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt='rate' />
                        )
                    })
                    }
                </div>
            </div>
        </main>
        <div>{accomodation.id}</div>
        </>
    )
}