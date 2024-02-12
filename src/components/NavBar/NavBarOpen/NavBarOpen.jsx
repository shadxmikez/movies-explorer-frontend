import './NavBarOpen.css';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

const { homePathname } = ROUTES;

export default function NavBarOpen({ onOpenNavBar, isLoggedIn, }) {
	const location = useLocation();
	return (
		<button className={`navbar-open ${location.pathname === homePathname && !isLoggedIn && 'navbar-open_active'}`}
			onClick={onOpenNavBar} type='button'></button>
	);
}
