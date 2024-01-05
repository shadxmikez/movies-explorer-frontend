import './Login.css';
import Auth from '../Auth/Auth';
import React from 'react';


export default function Login({ onSubmit }) {
	const [userEmail, setUserEmail] = React.useState('pochta@yandex.ru');
	const [userPassword, setUserPassword] = React.useState('12345');


	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ userEmail, userPassword });
	};

	return (
		<main className='login'>
			<Auth
				heading='Рады видеть!'
				name='login'
				path='login'
				auth='login'
				buttonTxt='Войти'
				defaultText='Ещё не зарегистрированы?'
				link='/signup'
				linkTxt='Регистрация'
				onSubmit={handleSubmit}
			>
				<label className='login__label' htmlFor='email'>E-mail</label>
				<input className='login__input'
					id='email'
					name='email'
					type='email'
					placeholder='Введите почту'
					value={userEmail || ""}
					onChange={e => setUserEmail(e.target.value)}
					required
				/>
				<span className='login__error'></span>
				<label className='login__label' htmlFor='password'>Пароль</label>
				<input className='login__input'
					id='password'
					name='password'
					type='password'
					value={userPassword || ""}
					onChange={e => setUserPassword(e.target.value)}
					placeholder='Введите пароль'
					required
				/>
				<span className='login__error'></span>
			</Auth>
		</main >
	)
}