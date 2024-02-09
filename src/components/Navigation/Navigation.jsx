import './Navigation.css';
import NavBarIcon from '../NavBar/NavBarIcon/NavBarIcon';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
	SAVED_FILMS_TITLE,
	MOVIE_CONSTANTS_TITLE,
	SIGNUP_TITLE,
	SIGNIN_TITLE,
	ROUTES
} from '../../utils/constants';

const {
	homePathname,
	profilePathname,
	moviesPathname,
	savedMoviesPathname,
	signinPathname,
	signupPathname } = ROUTES;

const navigationManager = (pathname) => `navigation ${moviesPagePathname(pathname) ? 'navigation__signin-movie' : ''}`;

function moviesPagePathname(pathname) {
	const moviePages = [moviesPathname, savedMoviesPathname, profilePathname];
	return moviePages.includes(pathname);
}

function homePagePathname(pathname, isLoggedIn) {
	return pathname === homePathname && isLoggedIn;
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
								<NavLink to={moviesPathname} className={({ isActive }) => activeNavLink(isActive, false)}>{MOVIE_CONSTANTS_TITLE}</NavLink>
							</li>
							<li>
								<NavLink to={savedMoviesPathname} className={({ isActive }) => activeNavLink(isActive, homePagePathname(pathname, isLoggedIn))}>{SAVED_FILMS_TITLE}</NavLink>
							</li>
							<li className='navigation__container-movies-item navigation__container-movies-icon'>
								<NavBarIcon />
							</li>
						</ul>
					</li>
				)}
				{!isLoggedIn && (
					<li>
						<ul className='navigation__container-auth'>
							<li>
								<Link to={signupPathname} className={`navigation__link ${pathname === '/' ? 'navigation__link-active' : ''}`}>{SIGNUP_TITLE}</Link>
							</li>
							<li>
								<Link to={signinPathname} className={`navigation__link navigation__signin ${pathname === '/' ? 'navigation__link-active' : ''}`}>{SIGNIN_TITLE}</Link>
							</li>
						</ul>
					</li>
				)}
			</ul>
		</nav>
	)
}
