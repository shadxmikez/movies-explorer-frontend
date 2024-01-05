import './NavBarOpen.css';
import { useLocation } from 'react-router-dom';


export default function NavBarOpen({ onOpenNavBar, isLoggedIn, }) {
	const location = useLocation();
	return (
		<button className={`navbar-open ${location.pathname === '/' && !isLoggedIn && 'navbar-open_active'}`}
			onClick={onOpenNavBar} type='button'></button>
	);
}
