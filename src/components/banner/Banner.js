import './banner.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Banner() {
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/about') {
            setAboutPage(true)
        };
    }, [])

    return (
        <section className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    )
}
