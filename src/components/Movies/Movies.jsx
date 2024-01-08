import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesButton from './MoviesButton/MoviesButton';

export default function Movie({ listMovies }) {
	return (
		<main className='movies'>
			<SearchForm />
			<MoviesCardList listMovies={listMovies} />
			<MoviesButton />
		</main>
	)
}