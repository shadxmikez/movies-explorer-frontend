import './Logo.css';
import { Link } from 'react-router-dom';
import iconLogo from '../../../images/logo.svg';

export default function Logo() {
	return (
		<Link to='/'><img className='logo' alt='Логотип Киномании' src={iconLogo}></img></Link>
	);
}
