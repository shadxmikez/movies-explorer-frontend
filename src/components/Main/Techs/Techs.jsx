import './Techs.css';
import { TECHS } from '../../../utils/constants';

const {
	techsTitle,
	techsSubtitle,
	techsDescription,
	techsHTML,
	techsCSS,
	techsJS,
	techsReact,
	techsGit,
	techsExpress,
	techsMongoDB } = TECHS;

export default function Techs() {
	return (
		<section id='techs' className='techs main-content'>
			<div className='techs__container '>
				<h2 className='techs__title main-title'>{techsTitle}</h2>
				<h4 className='techs__subtitle'>{techsSubtitle}</h4>
				<p className='techs__description'>{techsDescription}</p>
				<ul className='techs__list'>
					<li className='techs__list-menu'>{techsHTML}</li>
					<li className='techs__list-menu'>{techsCSS}</li>
					<li className='techs__list-menu'>{techsJS}</li>
					<li className='techs__list-menu'>{techsReact}</li>
					<li className='techs__list-menu'>{techsGit}</li>
					<li className='techs__list-menu'>{techsExpress}</li>
					<li className='techs__list-menu'>{techsMongoDB}</li>
				</ul>
			</div>
		</section>

	)
}
