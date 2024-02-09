import './Form.css';
import React from 'react';

const defaultEding = true;

export default function Form({
	handleSubmit,
	isValid,
	name,
	isLoading,
	path,
	auth,
	buttonTxt,
	children,
	eding = defaultEding }) {

	return (
		<form
			onSubmit={handleSubmit}
			name={name}
			className={`form form_path_${path}`}>
			{children}
			<div className={`form__content ${path !== 'profile' ? `form__content_${auth}` : ''} `}>
				{eding && (
					<button
						className={`form__button ${isValid || isLoading ? '' : 'form__button_disabled'
							}`}
						type='submit'
						disabled={!isValid || isLoading}
						noValidate
					>
						{buttonTxt}
					</button>
				)}
			</div>
		</form>
	)
}

