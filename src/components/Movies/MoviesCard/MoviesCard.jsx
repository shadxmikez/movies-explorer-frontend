import './MoviesCard.css';

export default function MoviesCard(card) {

	return (
		<ul className='movies-card'>
			<li>
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
					<p className='movies-card__duration'> {(card.duration / 60) | 0}ч {card.duration % 60}м</p>
				</div>
			</li>
		</ul>
	)
}