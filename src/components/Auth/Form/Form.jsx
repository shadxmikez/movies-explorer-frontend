import './Form.css';
import React from 'react';

const defaultEding = true;

export default function Form({ onSubmit, name, path, auth, buttonTxt, children, eding = defaultEding }) {

	return (
		<form onSubmit={onSubmit} name={name} className={`form form_path_${path}`}>
			{children}
			<div className={`form__content ${path !== 'profile' ? `form__content_${auth}` : ''} `}>
				{eding && (
					<button className={`form__button ${path === 'profile' ? 'form__button_profile' : ''}`}
						type='submit'>{buttonTxt}</button>
				)}
			</div>
		</form>
	)
}

