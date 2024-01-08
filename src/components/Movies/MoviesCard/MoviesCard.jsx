import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard(card) {

	const { pathname } = useLocation();
	const saveMoviesDuration = `movies-card__duration ${pathname === '/saved-movies' ? 'movies-card__duration-size' : ''
		}`;

	return (
		<li className='movies-card'>
			<img className='movies-card__image' alt={card.name} src={card.image} />
			<div className='movies-card__content'>
				<p className='movies-card__title'>{card.name}</p>
				<button className={`movies-card__button_${card.button}`}
					type='button'
					aria-label='Лайк'
					onClick={card.onButton}
				></button>
			</div>
			<div className='movies-card__container'>
				<p className={saveMoviesDuration}> {(card.duration / 60) | 0}ч {card.duration % 60}м</p>
			</div>
		</li>
	)
}