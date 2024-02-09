import './Register.css';
import Auth from '../Auth/Auth';
import React from 'react';
import { useValidateForm } from '../../hooks/useValidateForm';
import {
	EMAIL_LABEL_TITLE,
	PASSWORD_LABEL_TITLE,
	NAME_LABEL_TITLE,
	ROUTES
} from '../../utils/constants';

const { signinPathname } = ROUTES;

export default function Register({ onRegister }) {

	const {
		values,
		errors,
		isFormValid,
		handleChange } = useValidateForm({
			email: '',
			password: '',
			name: '',
		})

	function inputDataChange(evt) {
		handleChange(evt);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onRegister({
			name: values.name,
			email: values.email,
			password: values.password,
		});
	}

	return (
		<main className='register'>
			<Auth
				heading='Добро пожаловать!'
				name='register'
				path='register'
				auth='register'
				buttonTxt='Зарегистрироваться'
				defaultText='Уже зарегистрированы?'
				link={signinPathname}
				linkTxt='Войти'
				onSubmit={handleSubmit}
				isValid={isFormValid}
			>
				<label className='register__label' htmlFor='name'>{NAME_LABEL_TITLE}</label>
				<input className={`register__input ${!isFormValid && errors.name && 'register__input_invalid'}`}
					id='name'
					name='name'
					type='text'
					value={values.name || ''}
					onChange={inputDataChange}
					placeholder='Введите свое имя'
					autoComplete={'' + Math.random()}
					minLength='2'
					maxLength='30'
					required
				/>
				<span
					className={`register__error ${!isFormValid && errors.name ? 'register__error_active' : ''
						}`}
				>
					{errors.name || ''}
				</span>
				<label className='register__label' htmlFor='email'>{EMAIL_LABEL_TITLE}</label>
				<input className={`register__input ${!isFormValid && errors.email && 'register__input_invalid'}`}
					id='email'
					name='email'
					type='email'
					pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
					value={values.email || ''}
					onChange={inputDataChange}
					placeholder='Введите свою почту'
					autoComplete={'' + Math.random()}
					required
				/>
				<span
					className={`register__error ${!isFormValid && errors.email ? 'register__error_active' : ''
						}`}
				>
					{errors.email || ''}
				</span>
				<label className='register__label' htmlFor='password'>{PASSWORD_LABEL_TITLE}</label>
				<input className='register__input'
					id='password'
					name='password'
					type='password'
					value={values.password || ''}
					onChange={inputDataChange}
					placeholder='Придумайте пароль'
					autoComplete={'' + Math.random()}
					required
				/>
				<span
					className={`register__error ${!isFormValid && errors.password ? 'register__error_active' : ''
						}`}
				>
					{errors.password || ''}
				</span>
			</Auth>
		</main>
	)
}
