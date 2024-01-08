import './Register.css';
import Auth from '../Auth/Auth';
import React from 'react';

export default function Register({ onSubmit }) {
	const [userEmail, setUserEmail] = React.useState('pochta@yandex.ru');
	const [userPassword, setUserPassword] = React.useState('12345');
	const [userName, setUserName] = React.useState('Виталий');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit({ userEmail, userPassword, userName });
	};

	return (
		<main className='register'>
			<Auth
				heading='Добро пожаловать!'
				name='register'
				path='register'
				auth='register'
				buttonTxt='Зарегистрироваться'
				defaultText='Уже зарегистрированы?'
				link='/signin'
				linkTxt='Войти'
				onSubmit={handleSubmit}
			>
				<label className='register__label' htmlFor="name">Имя</label>
				<input className='register__input'
					id='name'
					name='name'
					type='text'
					value={userName || ""}
					onChange={e => setUserName(e.target.value)}
					placeholder='Введите свое имя'
					required
				/>
				<span className="register__error"></span>
				<label className='register__label' htmlFor="email">E-mail</label>
				<input className='register__input'
					id='email'
					name='email'
					type='email'
					value={userEmail || ""}
					onChange={e => setUserEmail(e.target.value)}
					placeholder='Введите свою почту'
					required
				/>
				<span className="register__error"></span>
				<label className='register__label' htmlFor="password">Пароль</label>
				<input className='register__input'
					id='password'
					name='password'
					type='password'
					value={userPassword || ""}
					onChange={e => setUserPassword(e.target.value)}
					placeholder='Придумайте пароль'
					required
				/>
				<span className="register__error">Что-то пошло не так...</span>
			</Auth>
		</main>
	)
}
