import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import {
	RESIZE_WINDOW,
	ERROR_SHOW_MOVIES,
	FOUND_NOTHING_MOVIES,
	START_SEARCH_MOVIES,
	NOT_SAVED_MOVIES,
	HANDLE_BUTTON_SHOW_MORE,
	SAVEDMOVIES_CONSTANTS,
	MOVIES_CONSTANTS,
	ROUTES,
	SCREEN_RESOLUTION,
	NUMBER_OF_FILMS_SHOWN
} from '../../../utils/constants';

const { savedMoviesPathname, moviesPathname } = ROUTES;
const { desktopResolution, tabletResolution, mobileResolution } = SCREEN_RESOLUTION;
const {
	showDesktopCards,
	showTabletCards,
	showMobileCards,
	handleShowMoreDesktop,
	hadleShowMoreTablet
} = NUMBER_OF_FILMS_SHOWN;

function MoviesCardList({
	name,
	cards,
	isLoading,
	firstEntry,
	onAddMovie,
	onDeleteMovie,
	savedMovies,
	serverError
}) {

	const { pathname } = useLocation();
	const [showMovies, setShowMovies] = useState(0);

	const saveMovies = `movies-card-list main-content ${pathname === savedMoviesPathname ? 'movies-card-list_size-padding' : ''
		}`;

	function onLiked(movieData) {
		if (name === SAVEDMOVIES_CONSTANTS) {
			return true;
		}
		const like = Array.isArray(savedMovies) && savedMovies.some(
			(savedMovie) => savedMovie.movieId === movieData.id
		);
		return like;
	}

	useEffect(() => {
		const showCards = () => {
			const windowsScreenWidth = window.innerWidth;
			if (windowsScreenWidth >= desktopResolution) { // 1175 разширение
				setShowMovies(showDesktopCards); // сколько показывать фильмов
			}
			else if (windowsScreenWidth >= tabletResolution) {
				setShowMovies(showTabletCards);
			}
			else if (windowsScreenWidth >= mobileResolution) {
				setShowMovies(showMobileCards);
			}
			else {
				setShowMovies(showMobileCards);
			}
		};
		showCards();
		window.addEventListener(RESIZE_WINDOW, showCards);
		return () => {
			window.removeEventListener(RESIZE_WINDOW, showCards);
		};
	}, [cards]);

	const handleButtonShowMore = () => {
		const windowsScreenWidth = window.innerWidth;
		if (windowsScreenWidth >= desktopResolution) {
			setShowMovies(showMovies + handleShowMoreDesktop); // при нажатие на кнопку, показывает +3 фильма
		} else if (windowsScreenWidth >= tabletResolution) {
			setShowMovies(showMovies + hadleShowMoreTablet);
		} else if (windowsScreenWidth >= mobileResolution) {
			setShowMovies(showMovies + hadleShowMoreTablet);
		}
		else {
			setShowMovies(showMovies + hadleShowMoreTablet);
		}
	};

	return (
		<section className={saveMovies}>
			<ul className='movies-card-list__movies'>
				{isLoading ? (
					<Preloader />
				) : name === MOVIES_CONSTANTS && cards.length !== 0 ? (
					cards.slice(0, showMovies).map((movieData) => {
						return (
							<li key={movieData.id}>
								<MoviesCard
									movieData={movieData}
									name={name}
									onAddMovie={onAddMovie}
									isLiked={onLiked(movieData)}
								/>
							</li>
						);
					})
				) : name === SAVEDMOVIES_CONSTANTS && cards.length !== 0 ? (
					cards.map((movieData) => {
						return (
							<li key={movieData._id}>
								<MoviesCard
									movieData={movieData}
									name={name}
									onDeleteMovie={onDeleteMovie}
								/>
							</li>
						);
					})
				) : serverError ? (
					<span className='movies-card-list__error'>
						{ERROR_SHOW_MOVIES}
					</span>
				) : !firstEntry && pathname === moviesPathname ? (
					<span className='movies-card-list__error'>
						{FOUND_NOTHING_MOVIES}
					</span>
				) : pathname === moviesPathname ? (
					<span className='movies-card-list__error'>
						{START_SEARCH_MOVIES}
					</span>
				) : (
					<span className='movies-card-list__error'>
						{NOT_SAVED_MOVIES}
					</span>
				)}
			</ul>
			{name === MOVIES_CONSTANTS && !firstEntry && showMovies < cards.length && (
				<div className='movies__content'>
					<button
						className='movies__button'
						type='button'
						onClick={handleButtonShowMore}
					>
						{HANDLE_BUTTON_SHOW_MORE}
					</button>
				</div>
			)}
		</section>
	);
}

export default MoviesCardList;