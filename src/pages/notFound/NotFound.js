import './notFound.css'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='notFound'>
            <Header />
            <div className='notFound_info'>
                <h1 className='notFound_info_title'>404</h1>
                <p className='notFound_info_content'>Oups! La page que vous demandez n'existe pas</p>
            </div>
            <Link className='notFound_info_home' to='/'>Retounez sur la page d'acccueil</Link>
        </div>
    )
}