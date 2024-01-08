import './Navigation.css';
import NavBarIcon from '../NavBar/NavBarIcon/NavBarIcon';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navigationManager = (pathname) => `navigation ${moviesPagePathname(pathname) ? 'navigation__signin-movie' : ''}`;

function moviesPagePathname(pathname) {
	const moviePages = ['/movies', '/saved-movies', '/profile'];
	return moviePages.includes(pathname);
}

function homePagePathname(pathname, isLoggedIn) {
	return pathname === '/' && isLoggedIn;
}

const activeNavLink = (isActive, homePage) => `navigation__container-movies-nl ${homePage ? 'navigation__container-movies-nl_menu' : ''}${isActive ? 'navigation__container-movies-nl_active' : ''}`;

export default function Navigation({ isLoggedIn }) {
	const { pathname } = useLocation();
	const homePageButtonMovies = (pathname === '/' && isLoggedIn) || moviesPagePathname(pathname);

	return (
		<nav className={navigationManager(pathname, isLoggedIn)}>
			<ul className='navigation__container'>
				{homePageButtonMovies && (
					<li>
						<ul className='navigation__container-movies'>
							<li>
								<NavLink to="/movies" className={({ isActive }) => activeNavLink(isActive, false)}>Фильмы</NavLink>
							</li>
							<li>
								<NavLink to="/saved-movies" className={({ isActive }) => activeNavLink(isActive, homePagePathname(pathname, isLoggedIn))}>Сохранённые фильмы</NavLink>
							</li>
							<li className="navigation__container-movies-item navigation__container-movies-icon">
								<NavBarIcon />
							</li>
						</ul>
					</li>
				)}
				{!isLoggedIn && (
					<li>
						<ul className='navigation__container-auth'>
							<li>
								<Link to='/signup' className={`navigation__link ${pathname === '/' ? 'navigation__link-active' : ''}`}>Регистрация</Link>
							</li>
							<li>
								<Link to="/signin" className={`navigation__link navigation__signin ${pathname === '/' ? 'navigation__link-active' : ''}`}>Войти</Link>
							</li>
						</ul>
					</li>
				)}
			</ul>
		</nav>
	)
}
