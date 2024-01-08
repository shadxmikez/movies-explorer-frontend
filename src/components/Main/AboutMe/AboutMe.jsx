import './AboutMe.css';
import MainTitle from '../MainTitle/MainTitle';
import Student from '../../../images/student.jpg';

export default function AboutMe() {
	return (
		<section id='about-me' className='about-me main-content'>
			<div className='about-me__container'>
				<MainTitle>Студент</MainTitle>
				<div className='about-me__content'>
					<div className='about-me__info'>
						<h4 className='about-me__title'>Давид</h4>
						<p className='about-me__subtitle'>Фронтенд-разработчик, 35 лет</p>
						<p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
							и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
						<a className='about-me__link' href='https://github.com/shadxmikez' target='_blank' rel='noreferrer'>Github</a>
					</div>
					<img src={Student} className='about-me__image' alt='Студент'></img>
				</div>
			</div>
		</section>
	)
}