import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import {
	SHORT_TIME_DURATION,
	MOVIE_CONSTANTS,
	SHORTS_CONSTANTS,
	ALLMOVIES_CONSTANTS,
	GETFILMS_ERROR,
	MOVIES_CONSTANTS
} from '../../utils/constants';


export default function Movie({ onAddMovie, savedMovies, name }) {
	const [savedSearchMovies, setSavedSearchMovies] = useState('');
	const [sortedMovies, setSortedMovies] = useState([]);
	const [isVerifed, setIsVerifed] = useState(false);
	const [firstEntry, setFirstEntry] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [allMovies, setAllMovies] = useState([]);
	const [serverError, setServerError] = useState(false);

	const getFilms = (search) => {
		if (allMovies.length === 0) {
			setIsLoading(true);
			MoviesApi.getMovies()
				.then((res) => {
					setAllMovies(res);
					setServerError(false);
					setFirstEntry(false);
					newFiltredArray(search, isVerifed, res);
				})
				.catch((error) => {
					setServerError(true);
					console.error(`${GETFILMS_ERROR} ${error}`);
				})
				.finally(() => setIsLoading(false));
		} else {
			newFiltredArray(search, isVerifed, allMovies);
		}
	};

	const newFiltredArray = useCallback((search, isVerifed, movies) => {
		setSavedSearchMovies(search);
		localStorage.setItem(MOVIE_CONSTANTS, JSON.stringify(search));
		localStorage.setItem(SHORTS_CONSTANTS, JSON.stringify(isVerifed));
		localStorage.setItem(ALLMOVIES_CONSTANTS, JSON.stringify(movies));
		setSortedMovies(
			movies.filter((movie) => {
				const searchByName =
					movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
					movie.nameEN.toLowerCase().includes(search.toLowerCase());
				return isVerifed
					? searchByName && movie.duration <= SHORT_TIME_DURATION
					: searchByName;
			})
		);
	}, []);

	useEffect(() => {
		if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
			const search = JSON.parse(localStorage.movie || ' ');
			const isVerifed = JSON.parse(localStorage.shorts) || false;
			const movies = JSON.parse(localStorage.allmovies) || [];
			setFirstEntry(false);
			setSavedSearchMovies(search);
			setIsVerifed(isVerifed);
			setAllMovies(movies);
			newFiltredArray(search, isVerifed, movies);
			setServerError(false);
		}
	}, [newFiltredArray]);

	return (
		<main className={MOVIES_CONSTANTS}>
			<SearchForm
				name={name}
				getFilms={getFilms}
				firstEntry={firstEntry}
				moviesData={allMovies}
				savedSearchMovies={savedSearchMovies}
				isVerifed={isVerifed}
				setIsVerifed={setIsVerifed}
				newFiltredArray={newFiltredArray}
			/>
			<MoviesCardList
				name={MOVIES_CONSTANTS}
				savedMovies={savedMovies}
				onAddMovie={onAddMovie}
				cards={sortedMovies}
				isLoading={isLoading}
				firstEntry={firstEntry}
				serverError={serverError}
			/>
		</main>
	)
}