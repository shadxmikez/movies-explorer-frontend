import './App.css';
import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';

import listMovie from '../../utils/listMovies';

import PageNotFound from '../PageNotFound/PageNotFound';


const App = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const showPathHeader = (data) => data.includes(pathname);
	const showPathFooter = (data) => data.includes(pathname);

	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);
	const [user, setUser] = React.useState('');


	const onLogin = () => {
		setIsLoggedIn(true);
		navigate('/', { replace: true });
	};

	const onRegister = () => {
		//api
	};

	const onLogout = () => {
		setIsLoggedIn(false);
	};

	const handleOpenNavBar = () => {
		setIsNavBarOpen(true);
	}

	const handleCloseNavBar = () => {
		setIsNavBarOpen(false);
	}

	const handleSaveProfile = (data) => {
		setUser(data);
	};

	return (
		<div className='app'>
			{showPathHeader(['/', '/movies', '/saved-movies', '/profile']) && (
				<Header isLoggedIn={isLoggedIn} isNavBarOpen={isNavBarOpen} onOpenNavBar={handleOpenNavBar} onCloseNavBar={handleCloseNavBar} />)}
			<Routes>
				<Route path='/' element={<Main />}></Route>
				<Route path='/profile' element={<Profile user={user} onSave={handleSaveProfile} logout={onLogout} />}></Route>
				<Route path='/movies' element={<Movies listMovies={listMovie} />}></Route>
				<Route path='/saved-movies' element={<SavedMovies />}></Route>
				<Route path='/signin' element={<Login onSubmit={onLogin} />}></Route>
				<Route path='/signup' element={<Register onSubmit={onRegister} />}></Route>
				<Route path='*' element={<PageNotFound />}></Route>
			</Routes>
			{showPathFooter(['/', '/movies', '/saved-movies']) && <Footer />}
		</div>
	)
}

export default App;



