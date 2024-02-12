import './Login.css';
import Auth from '../Auth/Auth';
import React from 'react';
import { useValidateForm } from '../../hooks/useValidateForm';
import { EMAIL_LABEL_TITLE, PASSWORD_LABEL_TITLE, ROUTES } from '../../utils/constants';

const { signupPathname } = ROUTES;

export default function Login({ onLogin }) {

	const {
		values,
		errors,
		isFormValid,
		handleChange } = useValidateForm({
			email: '',
			password: '',
		});

	function handleInputChange(evt) {
		handleChange(evt);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onLogin({
			email: values.email,
			password: values.password,
		});
	}

	return (
		<main className='login'>
			<Auth
				heading='Рады видеть!'
				name='login'
				path='login'
				auth='login'
				buttonTxt='Войти'
				defaultText='Ещё не зарегистрированы?'
				link={signupPathname}
				linkTxt='Регистрация'
				onSubmit={handleSubmit}
				autoComplete={'' + Math.random()}
				isValid={isFormValid}
				noValidate
			>
				<label className='login__label' htmlFor='email'>{EMAIL_LABEL_TITLE}</label>
				<input className={`login__input ${!isFormValid && errors.email && 'login__input_invalid'}`}
					id='email'
					name='email'
					type='email'
					placeholder='Введите почту'
					value={values.email ? values.email : ''}
					autoComplete={'' + Math.random()}
					onChange={handleInputChange}
					pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
					required
				/>
				<span
					className={`login__error ${!isFormValid && errors.email ? 'login__error_active' : ''
						}`}
				>
					{errors.email || ''}
				</span>
				<label className='login__label' htmlFor='password'>{PASSWORD_LABEL_TITLE}</label>
				<input className={`login__input ${!isFormValid && errors.password && 'login__input_invalid'}`}
					id='password'
					name='password'
					type='password'
					minLength='4'
					maxLength='30'
					value={values.password ? values.password : ''}
					onChange={handleInputChange}
					placeholder='Введите пароль'
					required
				/>
				<span
					className={`login__error ${!isFormValid && errors.password ? 'login__error_active' : ''
						}`}
				>
					{errors.password || ''}
				</span>
			</Auth>
		</main >
	)
}