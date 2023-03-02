import './accomodation.css'
import data from '../../data/data'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'

export default function Accomodation() {
    const {accomodationNumber} = useParams()
    const accomodation = data.find(accomodation => accomodation.id === accomodationNumber);
    return (
        <div>{accomodation.id}</div>
    )
}