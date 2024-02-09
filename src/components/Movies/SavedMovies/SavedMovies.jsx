import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useCallback, useEffect, useState } from 'react';
import {
	SHORT_TIME_DURATION,
	SAVEDMOVIES_CONSTANTS,
	DELETE_BUTTON_CONSTANTS
} from '../../../utils/constants';

export default function SavedMovies({ savedMovies, onDeleteMovie }) {
	const [savedSearchMovies, setSavedSearchMovies] = useState('');
	const [sortedMovies, setSortedMovies] = useState(savedMovies);
	const [isVerifed, setIsVerifed] = useState(false);
	const [firstEntry, setFirstEntry] = useState(true);

	const newFiltredArray = useCallback((search, isVerifed, movies) => {
		const filteredMovies = movies.filter((movie) => {
			const searchByName = movie.nameRU.toLowerCase().includes(search.toLowerCase());
			return isVerifed
				? searchByName && movie.duration <= SHORT_TIME_DURATION
				: searchByName;
		});
		setSortedMovies(filteredMovies);
	}, []);

	useEffect(() => {
		if (savedMovies.length === 0) {
			setFirstEntry(true);
		} else {
			setFirstEntry(false);
		}
		newFiltredArray(savedSearchMovies, isVerifed, savedMovies);
	}, [newFiltredArray, savedMovies, isVerifed, savedSearchMovies]);

	function getFilms(search) {
		newFiltredArray(search, isVerifed, savedMovies);
		setFirstEntry(false);
		setSavedSearchMovies(search);
	}

	return (
		<main className={SAVEDMOVIES_CONSTANTS}>
			<SearchForm
				moviesData={savedMovies}
				savedSearchMovies={savedSearchMovies}
				isVerifed={isVerifed}
				getFilms={getFilms}
				newFiltredArray={newFiltredArray}
				setIsVerifed={setIsVerifed}
				firstEntry={firstEntry}
			/>
			<MoviesCardList
				name={SAVEDMOVIES_CONSTANTS}
				cards={sortedMovies}
				onDeleteMovie={onDeleteMovie}
				button={DELETE_BUTTON_CONSTANTS}
			/>
		</main>
	)
}

