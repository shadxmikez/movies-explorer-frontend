import './Auth.css';
import Logo from '../Header/Logo/Logo';
import Form from './Form/Form';
import { Link } from 'react-router-dom';

export default function Auth({
	heading,
	onSubmit,
	path,
	auth,
	buttonTxt,
	link,
	linkTxt,
	children,
	name,
	defaultText,
	isValid
}) {

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit(evt);
	};

	return (
		<section className='auth'>
			<Logo />
			<h1 className='auth__title'>{heading}</h1>
			<Form
				handleSubmit={handleSubmit}
				isValid={isValid}
				name={name}
				type={name}
				path={path}
				auth={auth}
				buttonTxt={buttonTxt}
			>
				{children}
			</Form>
			<div className='auth__content'>
				<p className='auth__question'>{defaultText}</p>
				<Link to={link} className='auth__link'>{linkTxt}</Link>
			</div>
		</section>
	)
}

