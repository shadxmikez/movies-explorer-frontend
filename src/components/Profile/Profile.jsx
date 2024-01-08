import './Profile.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Auth/Form/Form';


export default function Profile({ logout, onSave }) {
	const [name, setName] = React.useState('Виталий');
	const [email, setEmail] = React.useState('pochta@yandex.ru');
	const [change, setChange] = React.useState(false);
	const navigate = useNavigate();

	const handleChange = () => setChange(true);

	const handleUpdate = (evt) => {
		evt.preventDefault();
		onSave({ name, email });
		setChange(false);
	};

	const handleLogout = (evt) => {
		evt.preventDefault();
		logout();
		navigate('/');
	}

	return (
		<main>
			<section className='profile'>
				<h1 className='profile__title'>Привет, {name}!</h1>
				<Form
					path='profile'
					buttonTxt='Сохранить'
					eding={change}
					onSubmit={handleUpdate}
				>
					<div className='profile__container'>
						<label htmlFor='name' className='profile__label'>
							<p className='profile__subtitle'>Имя</p>
							<input
								id='name'
								name='name'
								value={name}
								type='text'
								onChange={(evt) => setName(evt.target.value)}
								className="profile__input"
								placeholder='Введите свое имя'
								disabled={!change}
								required
							>
							</input>
						</label>
						<label htmlFor="email" className="profile__label">
							<p className='profile__subtitle'>E-mail</p>
							<input
								id='email'
								name='email'
								type='email'
								value={email}
								onChange={(evt) => setEmail(evt.target.value)}
								className="profile__input"
								placeholder='Введите почту'
								disabled={!change}
								required
							>
							</input>
						</label>
					</div>
				</Form>
				{!change && (
					<ul className='profile__list'>
						<li>
							<Link className='profile__link' onClick={handleChange}>Редактировать</Link>
						</li>
						<li>
							<Link className='profile__link profile__link-logout' onClick={handleLogout}>Выйти из аккаунта</Link>
						</li>
					</ul>
				)}
			</section>
		</main>
	)
}
