import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList({ listMovies, button }) {
	const moviesImageUrl = 'https://api.nomoreparties.co/';

	return (
		<section className='movies-card-list main-content'>
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