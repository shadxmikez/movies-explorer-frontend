import './NavBar.css';
import Overlay from './Overlay/Overlay';
import { NavLink } from 'react-router-dom';
import NavBarIcon from './NavBarIcon/NavBarIcon';
import NavBarClose from './NavBarClose/NavBarClose';
import {
	MOVIE_CONSTANTS_TITLE,
	SAVED_FILMS_TITLE,
	HOMEPAGE_TITLE,
	ROUTES
} from '../../utils/constants';

const {
	homePathname,
	moviesPathname,
	savedMoviesPathname } = ROUTES;

export default function NavBar({ isOpen, onClose }) {

	function handleClick() {
		onClose();
	}

	return (
		<Overlay isOpen={isOpen}>
			<NavBarClose onClose={onClose} />
			<aside className={`navbar ${isOpen ? 'navbar_opened' : ''}`}>
				<ul className='navbar__content'>
					<li>
						<NavLink to={homePathname} onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>{HOMEPAGE_TITLE}</NavLink>
					</li>
					<li>
						<NavLink to={moviesPathname} onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>{MOVIE_CONSTANTS_TITLE}</NavLink>
					</li>
					<li>
						<NavLink to={savedMoviesPathname} onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>{SAVED_FILMS_TITLE}</NavLink>
					</li>
				</ul>
				<NavBarIcon />
			</aside>
		</Overlay>
	)
}