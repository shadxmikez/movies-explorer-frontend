import './Portfolio.css';

export default function Portfolio() {
	return (
		<section className='portfolio main-content'>
			<h3 className='portfolio__title'>Портфолио</h3>
			<nav className='portfolio__content'>
				<ul className='portfolio__list'>
					<li className='portfolio__item'>
						<a className='portfolio__link' href='https://shadxmikez.github.io/how-to-learn/' target='_blank' rel='noreferrer'>Статичный сайт</a>
					</li>
					<li className='portfolio__item'>
						<a className='portfolio__link' href='https://shadxmikez.github.io/russian-travel/' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
					</li>
					<li className='portfolio__item'>
						<a className='portfolio__link' href='https://shadxmikez.nomoredomainsmonster.ru' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
					</li>
				</ul>
			</nav>
		</section>

	)
}
