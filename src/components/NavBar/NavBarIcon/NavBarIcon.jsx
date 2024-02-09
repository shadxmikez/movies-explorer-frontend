import './NavBarIcon.css';
import { NavLink } from 'react-router-dom';
import { ACCOUNT_TITLE, ROUTES } from '../../../utils/constants';

const { profilePathname } = ROUTES;

export default function NavBarIcon() {

	return (
		<NavLink to={profilePathname} className='navbar__profile'>
			<div className='navbar-icon'>
				<p className='navbar-icon__decription'>{ACCOUNT_TITLE}</p>
				<span className='navbar-icon__link'></span>
			</div>
		</NavLink>
	)
}
