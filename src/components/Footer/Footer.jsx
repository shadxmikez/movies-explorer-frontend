import './Footer.css';
import React from 'react';
import { FOOTER } from '../../utils/constants';

const {
	footerTitle,
	footerYears,
	footerLinkYandex,
	footerLinkGithub } = FOOTER;

export default function Footer() {
	return (
		<footer className='footer'>
			<p className='footer__title'>{footerTitle}</p>
			<div className='footer__container'>
				<nav className='footer__navigation'>
					<ul className='footer__content'>
						<li className='footer__list'>
							<a className='footer__link '
								target='_blank'
								rel='noopener noreferrer'
								href='https://praktikum.yandex.ru/'>{footerLinkYandex}</a>
						</li>
						<li className='footer__list'>
							<a className='footer__link'
								target='_blank'
								rel='noopener noreferrer'
								href='https://github.com/'>{footerLinkGithub}</a>
						</li>
					</ul>
				</nav>
				<p className='footer__years'>{footerYears}</p>
			</div>
		</footer>
	)
}