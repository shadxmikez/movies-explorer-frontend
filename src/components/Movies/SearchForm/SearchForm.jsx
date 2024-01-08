import './SearchForm.css';

export default function SearchForm() {
	return (
		<section className='search-form'>
			<form className='search-form__content'>
				<input
					id='search'
					name='search'
					type='text'
					placeholder='Фильм'
					required
					className='search-form__input'
				/>
				<button type='submit' className='search-form__button'></button>
				<span className='search-form__shortfilms'>
					<input
						id='search-form__shortfilms-input'
						type='checkbox'
						className='search-form__shortfilms-input'
					/>
					<label htmlFor='search-form__shortfilms-input' className='search-form__shortfilms-label search-form__shortfilms-label-active'></label>
					<label htmlFor='search-form__shortfilms-input' className='search-form__shortfilms-title'>Короткометражки</label>
				</span>
			</form>
		</section>
	)
}