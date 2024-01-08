import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavBar from '../NavBar/NavBar';
import NavBarOpen from '../NavBar/NavBarOpen/NavBarOpen';


export default function Header({ isLoggedIn, onOpenNavBar, onCloseNavBar, isNavBarOpen }) {
	const { pathname } = useLocation();

	let header = 'header';
	if (pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') {
		header += ' header__movies';
	}

	return (
		<header className={header}>
			<div className='header__container main-content'>
				<Logo />
				<Navigation isLoggedIn={isLoggedIn} />
				<NavBarOpen onOpenNavBar={onOpenNavBar} isLoggedIn={isLoggedIn} />
				<NavBar isOpen={isNavBarOpen} onClose={onCloseNavBar} />
			</div>
		</header>
	)
}
