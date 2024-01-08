import './NavBar.css';
import Overlay from './Overlay/Overlay';
import { NavLink } from 'react-router-dom';
import NavBarIcon from './NavBarIcon/NavBarIcon';
import NavBarClose from './NavBarClose/NavBarClose';

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
						<NavLink to='/' onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>Главная</NavLink>
					</li>
					<li>
						<NavLink to='/movies' onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>Фильмы</NavLink>
					</li>
					<li>
						<NavLink to='/saved-movies' onClick={handleClick} className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link-active' : ''}`}>Сохранённые фильмы</NavLink>
					</li>
				</ul>
				<NavBarIcon />
			</aside>
		</Overlay>
	)
}