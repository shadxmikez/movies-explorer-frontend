import './PageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
	return (
		<main className='page-not-found main-content'>
			<h3 className='page-not-found__title'>404</h3>
			<p className='page-not-found__subtitle'>Страница не найдена</p>
			<Link to='/' className='page-not-found__link'>Назад</Link>
		</main>
	)
}