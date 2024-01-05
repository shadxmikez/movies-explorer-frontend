import './Techs.css';
import MainTitle from '../MainTitle/MainTitle';

export default function Techs() {
	return (
		<section id='techs' className='techs'>
			<div className='techs__container main-content'>
				<MainTitle>Технологии</MainTitle>
				<h4 className='techs__subtitle'>7 технологий</h4>
				<p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<ul className='techs__list'>
					<li className='techs__list-menu'>HTML</li>
					<li className='techs__list-menu'>CSS</li>
					<li className='techs__list-menu'>JS</li>
					<li className='techs__list-menu'>React</li>
					<li className='techs__list-menu'>Git</li>
					<li className='techs__list-menu'>Express.js</li>
					<li className='techs__list-menu'>MongoDB</li>
				</ul>
			</div>
		</section>

	)
}
