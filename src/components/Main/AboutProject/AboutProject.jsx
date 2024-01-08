import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';

export default function AboutProject() {
	return (
		<section id='about-project' className='about-project main-content'>
			<MainTitle>О проекте</MainTitle>
			<ul className='about-project__list'>
				<li>
					<p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
					<p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</li>
				<li>
					<p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
					<p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</li>
			</ul>
			<div className='about-project__weeks'>
				<div className='about-project__weeks-container'>
					<p className='about-project__weeks-title'>1 неделя</p>
					<p className='about-project__weeks-subtitle'>Back-end</p>
				</div>
				<div className='about-project__weeks-container'>
					<p className='about-project__weeks-title'>4 недели</p>
					<p className='about-project__weeks-subtitle'>Front-end</p>
				</div>
			</div>
		</section>
	)
}
