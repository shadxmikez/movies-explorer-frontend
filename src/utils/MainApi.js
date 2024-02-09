import { WORK_DEV_LOCALHOST } from './constants';

class MainApi {
	constructor(options) {
		this._url = options.baseUrl;
		this._checkResponse = (res) =>
			res.ok ? res.json() : Promise.reject(res.json());
	}

	getUserToken = (token) => {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}).then(this._checkResponse);
	};

	register = ({ name, email, password }) => {
		return fetch(`${this._url}/signup`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		}).then(this._checkResponse);
	};

	login = ({ email, password }) => {
		return fetch(`${this._url}/signin`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}).then(this._checkResponse);
	};

	loadProfile({ name, email }) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email }),
		}).then(this._checkResponse);
	}

	getMovies(token) {
		return fetch(`${this._url}/movies`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(this._checkResponse);
	}

	createMovie(movieData, token) {
		return fetch(`${this._url}/movies`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(movieData),
		}).then(this._checkResponse);
	}

	deleteMovie(movieId, token) {
		return fetch(`${this._url}/movies/${movieId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(this._checkResponse);
	}
}

const mainApi = new MainApi({
	baseUrl: WORK_DEV_LOCALHOST,
});
export default mainApi;