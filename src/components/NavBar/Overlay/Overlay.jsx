import './Overlay.css';

export default function Overlay({ isOpen, children }) {
	return <div className={`overlay ${isOpen ? 'overlay_opened' : ''}`}>{children}</div>;
}

