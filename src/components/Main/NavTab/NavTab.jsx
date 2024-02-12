import './NavTab.css';
import { NAV_TAB } from '../../../utils/constants';

const {
	navTabAboutProject,
	navTabTechs,
	navTabAboutMe,
	anchorAboutProject,
	anchorTechs,
	anchorAboutMe
} = NAV_TAB;

export default function NavTab() {
	return (
		<nav className='navtab'>
			<ul className='navtab__content'>
				<li className='navtab__content-list'>
					<a className='navtab__link' href={anchorAboutProject}> {navTabAboutProject} </a>
				</li>
				<li className='navtab__content-list'>
					<a className='navtab__link' href={anchorTechs}> {navTabTechs} </a>
				</li>
				<li className='navtab__content-list'>
					<a className='navtab__link' href={anchorAboutMe}> {navTabAboutMe} </a>
				</li>
			</ul>
		</nav >
	)
}