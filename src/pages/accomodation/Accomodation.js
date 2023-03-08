import './accomodation.css'
import data from '../../data/data'
import Header from '../../components/header/Header'
import NotFound from '../notFound/NotFound'
import Carrousel from '../../components/carrousel/Carrousel'
import Collapse from '../../components/collapse/Collapse'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'

export default function Accomodation() {
    const {accomodationNumber} = useParams();
    const accomodation = data.find(accomodation => accomodation.id === accomodationNumber);

    if (!accomodation) {
            console.log(accomodation)
                return < NotFound />
                };

    const name = accomodation.host.name;
    const rating = accomodation.rating;
    const description = accomodation.description;
    const equipment = accomodation.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });

    return (
        <>
        <Header />
        <Carrousel imageSlider={accomodation.pictures}/>
        <main className='accomodation'>
            <div className='accomodation_content'>
                <div className='accomodation_content_info'>
                    <h1>{accomodation.title}</h1>
                    <span>{accomodation.location}</span>
                    <div className='button_flex'>
                        {accomodation.tags.map((tag, index) => {
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
            </div>
            <div className='accomodation_collapse'>
                <div className='accomodation_collapse_item'>
                    <Collapse title={'Description'} content={description}/>
                </div>
                <div className='accomodation_collapse_item'>
                    <Collapse title={'Equipement'} content={equipment} />
                </div>
            </div>
        </main>
        <Footer />  
        </>
    )
}