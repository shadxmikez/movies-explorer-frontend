import './Portfolio.css';
import { PORTFOLIO } from '../../../utils/constants';

const {
	portfolioTitle,
	portfolioStatic,
	portfolioResponsive,
	portfolioLanding } = PORTFOLIO;

export default function Portfolio() {
	return (
		<section className='portfolio main-content'>
			<h3 className='portfolio__title'>{portfolioTitle}</h3>
			<nav className='portfolio__content'>
				<ul className='portfolio__list'>
					<li className='portfolio__item'>
						<a className='portfolio__link'
							href='https://shadxmikez.github.io/how-to-learn/'
							target='_blank'
							rel='noreferrer'>{portfolioStatic}</a>
					</li>
					<li className='portfolio__item'>
						<a className='portfolio__link'
							href='https://shadxmikez.github.io/russian-travel/'
							target='_blank'
							rel='noreferrer'>{portfolioResponsive}</a>
					</li>
					<li className='portfolio__item'>
						<a className='portfolio__link'
							href='https://shadxmikez.nomoredomainsmonster.ru'
							target='_blank'
							rel='noreferrer'>{portfolioLanding}</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}
