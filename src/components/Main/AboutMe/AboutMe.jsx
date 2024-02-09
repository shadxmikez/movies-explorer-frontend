import './AboutMe.css';
import MainTitle from '../MainTitle/MainTitle';
import Student from '../../../images/student.jpg';
import { ABOUT_ME } from '../../../utils/constants';

const {
	aboutMeMainTitle,
	aboutMeTitle,
	aboutMeSubtitle,
	aboutMeDescription,
	aboutMeLink } = ABOUT_ME;

export default function AboutMe() {
	return (
		<section id='about-me' className='about-me main-content'>
			<div className='about-me__container'>
				<MainTitle>{aboutMeMainTitle}</MainTitle>
				<div className='about-me__content'>
					<div className='about-me__info'>
						<h4 className='about-me__title'>{aboutMeTitle}</h4>
						<p className='about-me__subtitle'>{aboutMeSubtitle}</p>
						<p className='about-me__description'>{aboutMeDescription}</p>
						<a className='about-me__link'
							href='https://github.com/shadxmikez'
							target='_blank'
							rel='noreferrer'>{aboutMeLink}</a>
					</div>
					<img src={Student} className='about-me__image' alt='Студент'></img>
				</div>
			</div>
		</section>
	)
}