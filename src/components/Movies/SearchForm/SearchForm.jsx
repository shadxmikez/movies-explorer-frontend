import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useValidateForm } from '../../../hooks/useValidateForm';
import {
	SHORTFILMS_TITLE,
	MOVIE_CONSTANTS,
	MOVIES_CONSTANTS,
	INPUT_SEARCH_FORM_VALUE
} from '../../../utils/constants';

export default function SearchForm({
	moviesData,
	name,
	firstEntry,
	setIsVerifed,
	isVerifed,
	getFilms,
	newFiltredArray,
}) {

	const [inputSearchFormValue, setInputSearchFormValue] = useState('');
	const { values, handleChange, reset } = useValidateForm();

	useEffect(() => {
		const savedSearchFormMovies = localStorage.getItem(INPUT_SEARCH_FORM_VALUE);
		if (savedSearchFormMovies && name === MOVIE_CONSTANTS) {
			reset({ searchInput: savedSearchFormMovies });
		} else {
			reset({ searchInput: '' });
		}
	}, [reset, name]);

	function pushShortsFilms() {
		setIsVerifed(!isVerifed);
		newFiltredArray(values.searchInput, !isVerifed, moviesData);
		if (name === MOVIE_CONSTANTS) {
			localStorage.setItem(INPUT_SEARCH_FORM_VALUE, values.searchInput || '');
		}
	}

	function onSubmit(evt) {
		evt.preventDefault();
		getFilms(inputSearchFormValue);
		if (inputSearchFormValue && name === MOVIES_CONSTANTS) {
			localStorage.setItem(INPUT_SEARCH_FORM_VALUE, inputSearchFormValue);
		}
	}

	return (
		<section className='search-form'>
			<form className='search-form__content' noValidate onSubmit={onSubmit}>
				<input
					id='search'
					name='search'
					type='text'
					placeholder='Фильм'
					required
					className='search-form__input'
					value={inputSearchFormValue || ''}
					onChange={(evt) => {
						setInputSearchFormValue(evt.target.value);
						handleChange(evt);
					}}
				/>
				<button type='submit' className='search-form__button'></button>
				<span className='search-form__shortfilms'>
					<input
						name='checkbox'
						id='search-form__shortfilms-input'
						type='checkbox'
						className='search-form__shortfilms-input'
						checked={isVerifed}
						onChange={pushShortsFilms}
						disabled={firstEntry}
					/>
					<label htmlFor='search-form__shortfilms-input' className='search-form__shortfilms-label search-form__shortfilms-label-active'></label>
					<label htmlFor='search-form__shortfilms-input' className='search-form__shortfilms-title'>{SHORTFILMS_TITLE}</label>
				</span>
			</form>
		</section>
	)
}