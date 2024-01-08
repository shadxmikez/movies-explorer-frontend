import './NavBarIcon.css';
import { NavLink } from 'react-router-dom';

export default function NavBarIcon() {

	return (
		<NavLink to='/profile' className='navbar__profile'>
			<div className='navbar-icon'>
				<p className='navbar-icon__decription'>Аккаунт</p>
				<span className="navbar-icon__link"></span>
			</div>
		</NavLink>
	)
}
