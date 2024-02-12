import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';
import { ABOUT_PROJECT } from '../../../utils/constants';

const {
	aboutProjectMainTitle,
	aboutProjectSubtitleLeft,
	aboutProjectDescriptionLeft,
	aboutProjectSubtitleRight,
	aboutProjectDescriptionRight,
	aboutProjectWeeksTitleLeft,
	aboutProjectWeeksSubtitleLeft,
	aboutPojectWeeksTitleRight,
	aboutProjectWeeksSubtitleRight
} = ABOUT_PROJECT;

export default function AboutProject() {
	return (
		<section id='about-project' className='about-project main-content'>
			<MainTitle>{aboutProjectMainTitle}</MainTitle>
			<ul className='about-project__list'>
				<li>
					<p className='about-project__subtitle'>{aboutProjectSubtitleLeft}</p>
					<p className='about-project__description'>{aboutProjectDescriptionLeft}</p>
				</li>
				<li>
					<p className='about-project__subtitle'>{aboutProjectSubtitleRight}</p>
					<p className='about-project__description'>{aboutProjectDescriptionRight}</p>
				</li>
			</ul>
			<div className='about-project__weeks'>
				<div className='about-project__weeks-container'>
					<p className='about-project__weeks-title'>{aboutProjectWeeksTitleLeft}</p>
					<p className='about-project__weeks-subtitle'>{aboutProjectWeeksSubtitleLeft}</p>
				</div>
				<div className='about-project__weeks-container'>
					<p className='about-project__weeks-title'>{aboutPojectWeeksTitleRight}</p>
					<p className='about-project__weeks-subtitle'>{aboutProjectWeeksSubtitleRight}</p>
				</div>
			</div>
		</section>
	)
}
