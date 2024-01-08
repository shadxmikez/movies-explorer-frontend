import './NavBarClose.css';

export default function NavBarClose({ onClose }) {
	return <button onClick={onClose} type='button' className='navbar-close'></button>
}