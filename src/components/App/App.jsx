import './App.css';
import React from 'react';
import {
	Route,
	Routes,
	useNavigate,
	useLocation
} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';

import PageNotFound from '../PageNotFound/PageNotFound';
import CurrentUserContext from '../contexts/contexts';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';

import {
	ISLOGGEDIN_CONSTANTS,
	JWT_CONSTANTS,
	MOVIES_CONSTANTS,
	SAVEDMOVIES_CONSTANTS,
	DEFAULT_TEXTS_ERROR,
	ROUTES
} from '../../utils/constants';

const {
	successfullyEditProfile,
	defaultError,
	authErrorMessage,
	errorUpdatingProfile,
	errorWhenRemovingMovie,
	loginFailed,
	registerFailed,
	errorWhenAddingMovie
} = DEFAULT_TEXTS_ERROR;

const {
	homePathname,
	profilePathname,
	moviesPathname,
	savedMoviesPathname,
	signinPathname,
	signupPathname,
	pageNotFoundPathname
} = ROUTES;

const App = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const showPathHeader = (data) => data.includes(pathname);
	const showPathFooter = (data) => data.includes(pathname);

	const [currentUser, setCurrentUser] = React.useState({});
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);
	const [profileMessage, setProfileMessage] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(false);
	const [savedMovies, setSavedMovies] = React.useState([]);

	// Эта функция получает значение, которое хранится в localStorage с ключом ISLOGGEDIN_CONSTANTS
	function getValueFromLocalStorage() {
		const isLoggedInGetValue = localStorage.getItem(ISLOGGEDIN_CONSTANTS);
		return isLoggedInGetValue;
	}

	// Эта функция сохраняет значение в localStorage
	function storeValueInLocalStorage(value) {
		localStorage.setItem(ISLOGGEDIN_CONSTANTS, value);
	}

	// Эта функция извлекает токен из localStorage
	function getTokenFromLocalStorage() {
		const savedToken = localStorage.getItem(JWT_CONSTANTS);
		return savedToken;
	}

	// Эта функция сохраняет токен в localStorage
	function saveTokenInLocalStorage(value) {
		localStorage.setItem(JWT_CONSTANTS, value);
	}

	// чек токена
	React.useEffect(() => {
		const token = getTokenFromLocalStorage();
		if (!token) {
			return;
		}
		storeValueInLocalStorage(true);
		setIsLoggedIn(true);
	}, []);

	// логика изминения isLoggedIn
	React.useEffect(() => {
		const savedLoggedIn = getValueFromLocalStorage();
		if (!savedLoggedIn) {
			return;
		}
		const token = getTokenFromLocalStorage();
		if (savedLoggedIn) {
			Promise.all([mainApi.getUserToken(token), mainApi.getMovies(token)])
				.then(([dataUser, dataMovies]) => {
					setCurrentUser(dataUser);
					if (dataMovies.length !== 0) {
						setSavedMovies(dataMovies.reverse());
					} else {
						setSavedMovies([]);
					}
				})
				.catch((error) => console.error(`${defaultError} ${error}`));
		} else {
			setIsLoggedIn(false);
			localStorage.clear();
		}
	}, [isLoggedIn]);

	// функция обновления профиля
	function updateProfile(name, email) {
		const token = getTokenFromLocalStorage();
		if (!token) {
			setProfileMessage({
				showText: `${authErrorMessage}`,
				isItSuccessfully: false,
			});
			return;
		}
		mainApi.loadProfile(name, email, token)
			.then((data) => {
				const loadUser = {
					name: data.name,
					email: data.email,
				};
				setCurrentUser(loadUser);
				setProfileMessage({
					showText: `${successfullyEditProfile}`,
					isItSuccessfully: true,
				});
			})
			.catch((error) => {
				setProfileMessage({
					showText: `${errorUpdatingProfile} ${error}`,
					isItSuccessfully: false,
				});
			});
	}

	// функция добавления фильма
	function addMovie(movieData) {
		const isItLiked = savedMovies.some((item) => item.movieId === movieData.movieId);
		if (!isItLiked) {
			const token = getTokenFromLocalStorage();
			mainApi
				.createMovie(movieData, token)
				.then((addedMovie) => {
					setSavedMovies([...savedMovies, addedMovie]);
				})
				.catch((error) => console.error(`${errorWhenAddingMovie} ${error}`));
		} else {
			const token = getTokenFromLocalStorage();
			const id = savedMovies.find((item) => item.movieId === movieData.movieId)._id;
			mainApi
				.deleteMovie(id, token)
				.then(() => {
					setSavedMovies((movies) => movies.filter((item) => item._id !== id));
				})
				.catch((error) => console.error(`${errorWhenRemovingMovie} ${error}`));
		}
	}

	// функция удаления фильма
	function removeMovie(deleteTheMovie) {
		const token = getTokenFromLocalStorage();
		mainApi.deleteMovie(deleteTheMovie, token)
			.then(() => {
				setSavedMovies(
					savedMovies.filter((movie) => {
						return movie._id !== deleteTheMovie;
					})
				);
			})
			.catch((error) => console.error(`${errorWhenRemovingMovie} ${error}`));
	}

	// signin 
	function onLogin({ email, password }) {
		mainApi.login({ email, password })
			.then((data) => {
				if (data.token) {
					storeValueInLocalStorage(true);
					setIsLoggedIn(true);
					saveTokenInLocalStorage(data.token);
					navigate(moviesPathname);
				}
			})
			.catch((error) => console.error(`${loginFailed} ${error}`));
	}

	// signup
	function onRegister({ name, email, password }) {
		mainApi.register({ name, email, password })
			.then((data) => {
				if (data) {
					onLogin({ email, password });
				}
			})
			.catch((error) => console.error(`${registerFailed} ${error}`))
			.finally(() => setIsLoading(false));
	}

	// logout
	function handleSignOut() {
		localStorage.clear();
		setIsLoggedIn(false);
		setCurrentUser({});
		setSavedMovies([]);
		navigate(homePathname);
	}

	const handleOpenNavBar = () => {
		setIsNavBarOpen(true);
	}

	const handleCloseNavBar = () => {
		setIsNavBarOpen(false);
	}

	const mainComponent = <Main />

	const profileComponent = <ProtectedRoute
		component={Profile}
		updateProfile={updateProfile}
		isLoggedIn={isLoggedIn}
		messageState={[profileMessage, setProfileMessage]}
		handleSignOut={handleSignOut}
	/>

	const moviesComponent = <ProtectedRoute
		name={MOVIES_CONSTANTS}
		component={Movies}
		savedMovies={savedMovies}
		onAddMovie={addMovie}
	/>

	const savedMoviesComponent = <ProtectedRoute
		name={SAVEDMOVIES_CONSTANTS}
		component={SavedMovies}
		loggedIn={isLoggedIn}
		savedMovies={savedMovies}
		onDeleteMovie={removeMovie}
	/>

	const signinComponent = <Login
		isLoading={isLoading}
		onLogin={onLogin}
	/>

	const signupComponent = <Register
		isLoading={isLoading}
		onRegister={onRegister}
	/>

	const pageNotFoundComponent = <PageNotFound />

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='app'>
				{showPathHeader([homePathname, moviesPathname, savedMoviesPathname, profilePathname]) && (
					<Header
						isLoggedIn={isLoggedIn}
						isNavBarOpen={isNavBarOpen}
						onOpenNavBar={handleOpenNavBar}
						onCloseNavBar={handleCloseNavBar}
					/>)}
				<Routes>
					<Route path={homePathname} element={mainComponent} />
					<Route path={profilePathname} element={profileComponent} />
					<Route path={moviesPathname} element={moviesComponent} />
					<Route path={savedMoviesPathname} element={savedMoviesComponent} />
					<Route path={signinPathname} element={signinComponent} />
					<Route path={signupPathname} element={signupComponent} />
					<Route path={pageNotFoundPathname} element={pageNotFoundComponent} />
				</Routes>
				{showPathFooter([homePathname, moviesPathname, savedMoviesPathname]) && <Footer />}
			</div>
		</CurrentUserContext.Provider >
	)
}

export default App;



