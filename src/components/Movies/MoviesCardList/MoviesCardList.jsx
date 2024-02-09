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
	ROUTES
} from '../../../utils/constants';

const { savedMoviesPathname, moviesPathname } = ROUTES;

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
			if (windowsScreenWidth >= 1175) { // 1175 разширение
				setShowMovies(12); // сколько показывать фильмов
			}
			else if (windowsScreenWidth >= 768) {
				setShowMovies(8);
			}
			else if (windowsScreenWidth >= 480) {
				setShowMovies(5);
			}
			else {
				setShowMovies(5);
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
		if (windowsScreenWidth >= 1175) {
			setShowMovies(showMovies + 3); // при нажатие на кнопку, показывает +3 фильма
		} else if (windowsScreenWidth >= 768) {
			setShowMovies(showMovies + 2);
		} else if (windowsScreenWidth >= 480) {
			setShowMovies(showMovies + 2);
		}
		else {
			setShowMovies(showMovies + 2);
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