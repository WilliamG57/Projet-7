import './footer.css'
import Logo from '../../assets/logoFooter.png'

export default function Footer() {
	return (
		<footer className='footer'>
			<img src={Logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}