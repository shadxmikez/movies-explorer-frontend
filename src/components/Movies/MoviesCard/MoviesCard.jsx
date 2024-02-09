import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
	API_URL_MOVIES,
	DURATION_HOURS,
	DURATION_MINUTES,
	MOVIES_CONSTANTS,
	SAVEDMOVIES_CONSTANTS,
	ROUTES
} from '../../../utils/constants';

const { savedMoviesPathname } = ROUTES;

export default function MoviesCard({
	movieData,
	name,
	onAddMovie,
	onDeleteMovie,
	isLiked
}) {

	function handleLikeClick() {
		onAddMovie({
			movieId: movieData.id,
			duration: movieData.duration,
			country: movieData.country,
			director: movieData.director,
			year: movieData.year,
			description: movieData.description,
			image: API_URL_MOVIES + movieData.image.url,
			trailerLink: movieData.trailerLink,
			nameRU: movieData.nameRU,
			nameEN: movieData.nameEN,
			thumbnail: API_URL_MOVIES + movieData.image.formats.thumbnail.url,
		});
	}

	const { pathname } = useLocation();
	const saveMoviesDuration = `movies-card__duration ${pathname === savedMoviesPathname ? 'movies-card__duration-size' : ''
		}`;

	return (
		<>
			<div className='movies-card'>
				<Link to={movieData.trailerLink} target="_blank">
					<img className='movies-card__image' alt={movieData.name} src={name === MOVIES_CONSTANTS
						? `https://api.nomoreparties.co${movieData.image.url}`
						: movieData.image} />
				</Link>
				<div className='movies-card__content'>
					<p className='movies-card__title'>{movieData.nameRU}</p>
					{name === MOVIES_CONSTANTS && (
						<button
							className={`movies-card__button_like ${isLiked ? 'movies-card__button_active' : ''}`}
							type='button'
							aria-label='Лайк'
							key={movieData.id}
							onClick={handleLikeClick}
						>
						</button>
					)}
					{name === SAVEDMOVIES_CONSTANTS && (
						<button
							key={movieData.id}
							className='movies-card__button_active movies-card__button_delete'
							type='button'
							onClick={() => onDeleteMovie(movieData._id)}
						/>
					)}
				</div>
				<div className='movies-card__container'>
					<p className={saveMoviesDuration}> {(movieData.duration / 60) | 0}{DURATION_HOURS} {movieData.duration % 60}{DURATION_MINUTES}</p>
				</div>
			</div>
		</>
	)
}




