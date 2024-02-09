/* eslint-disable react-hooks/exhaustive-deps */
import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Auth/Form/Form';
import { useValidateForm } from '../../hooks/useValidateForm';
import CurrentUserContext from '../contexts/contexts';
import {
	OUT_ACCAUNT,
	EDIT_PROFILE,
	EMAIL_LABEL_TITLE,
	NAME_LABEL_TITLE,
	PROFILE_TITLE,
	ROUTES
} from '../../utils/constants';

const { homePathname } = ROUTES;

export default function Profile({
	handleSignOut,
	updateProfile,
	messageState: [message, setMessage]
}) {

	const [change, setChange] = useState(false);
	const currentUser = useContext(CurrentUserContext);
	const { values,
		errors,
		isFormValid,
		handleChange,
		resetForm } = useValidateForm({
			name: currentUser.name,
			email: currentUser.email,
		});

	const navigate = useNavigate();
	const isDataValidity = currentUser.name === values.name && currentUser.email === values.email;

	useEffect(() => {
		if (currentUser) {
			resetForm(currentUser, {}, true);
		}
	}, [currentUser]);

	useEffect(() => {
		setMessage({});
	}, [isFormValid, setMessage]);

	const handleEditProfileClick = () => {
		setChange(true);
		resetForm();
	};

	function handleSubmit(evt) {
		evt.preventDefault();
		updateProfile(values);
	}

	const handleInputChange = (evt) => {
		evt.preventDefault();
		setMessage({});
		handleChange(evt);
	};

	useEffect(() => {
		setChange(false);
	}, [currentUser.email, currentUser.name]);

	const handleLogoutProfile = (evt) => {
		evt.preventDefault();
		handleSignOut();
		navigate(homePathname);
	};

	return (
		<main>
			<section className='profile' id='profile' >
				<h1 className='profile__title'>{PROFILE_TITLE}, {currentUser.name}!</h1>
				<Form
					path='profile'
					auth='profile'
					name='profile'
					buttonTxt='Сохранить'
					eding={change}
					isValid={isFormValid && !isDataValidity}
					handleSubmit={handleSubmit}
					noValidate
				>
					<div className='profile__container'>
						<label htmlFor='name' className='profile__label'>
							<p className='profile__subtitle'>{NAME_LABEL_TITLE}</p>
							<input
								id='name'
								name='name'
								value={values.name || ''}
								type='text'
								onChange={handleInputChange}
								minLength='2'
								maxLength='30'
								className='profile__input'
								placeholder='Введите свое имя'
								disabled={!change}
								autoComplete={'' + Math.random()}
								required
							>
							</input>
						</label>
						<span className='profile__error'>
							{!errors && message.isItSuccessfully
								? message.showText
								: errors.name}
						</span>
						<label htmlFor='email' className='profile__label'>
							<p className='profile__subtitle'>{EMAIL_LABEL_TITLE}</p>
							<input
								id='email'
								name='email'
								type='email'
								value={values.email || ''}
								pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
								onChange={handleInputChange}
								className='profile__input'
								placeholder='Введите почту'
								minLength='2'
								maxLength='50'
								autoComplete={'' + Math.random()}
								disabled={!change}
								required
							>
							</input>
						</label>
						<span className='profile__error'>
							{!errors && message.isItSuccessfully
								? message.showText
								: errors.email}
						</span>
					</div>
					<span className='profile__error'>
						{!errors && message.isItSuccessfully
							? message.showText
							: message.showText}
					</span>
				</Form>
				{!change && (
					<ul className='profile__list'>
						<li>
							<Link
								className='profile__link'
								type={'submit'}
								onClick={handleEditProfileClick}
							>
								{EDIT_PROFILE}
							</Link>
						</li>
						<li>
							<Link className='profile__link profile__link-logout'
								onClick={handleLogoutProfile}>{OUT_ACCAUNT}</Link>
						</li>
					</ul>
				)}
			</section>
		</main>
	)
}
