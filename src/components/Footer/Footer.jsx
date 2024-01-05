import './Footer.css';
import React from 'react';

export default function Footer() {
	return (
		<footer className='footer'>
			<p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className='footer__container'>
				<nav className='footer__navigation'>
					<ul className='footer__content'>
						<li className='footer__list'>
							<a className='footer__link ' target="_blank" rel="noopener noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
						</li>
						<li className='footer__list'>
							<a className='footer__link' target="_blank" rel="noopener noreferrer" href="https://github.com/">Github</a>
						</li>
					</ul>
				</nav>
				<p className='footer__years'>© 2023</p>
			</div>
		</footer>
	)
}