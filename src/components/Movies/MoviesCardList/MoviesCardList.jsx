import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ listMovies, button }) {
	const moviesImageUrl = 'https://api.nomoreparties.co/';

	const { pathname } = useLocation();
	const saveMovies = `movies-card-list main-content ${pathname === '/saved-movies' ? 'movies-card-list_size-padding' : ''
		}`;

	return (
		<section className={saveMovies}>
			<ul className="movies-card-list__movies">
				{listMovies.map((card) => {
					return (
						<MoviesCard
							image={`${moviesImageUrl}${card.image.url}`}
							key={card.id}
							name={card.nameRU}
							duration={card.duration}
							button={button || (card.id >= 22 && card.id <= 80 ? 'like' : 'active')}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default MoviesCardList;