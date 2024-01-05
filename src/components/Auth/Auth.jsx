import './Auth.css';
import Logo from '../Header/Logo/Logo';
import Form from './Form/Form';
import { Link } from 'react-router-dom';

export default function Auth(props) {
	return (
		<section className='auth'>
			<Logo />
			<h3 className='auth__title'>{props.heading}</h3>
			<Form onSubmit={props.onSubmit} name={props.name} path={props.path} auth={props.auth} buttonTxt={props.buttonTxt}>{props.children}</Form>
			<div className='auth__content'>
				<p className='auth__question'>{props.defaultText}</p>
				<Link to={props.link} className='auth__link'>{props.linkTxt}</Link>
			</div>
		</section>
	)
}

