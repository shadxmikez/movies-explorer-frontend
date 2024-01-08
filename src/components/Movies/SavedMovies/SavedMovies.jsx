import './SavedMovies.css';
import saveMovies from '../../../utils/saveMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
	return (
		<main className='saved-movies'>
			<SearchForm />
			<MoviesCardList listMovies={saveMovies} button='delete' />
		</main>
	)
}

