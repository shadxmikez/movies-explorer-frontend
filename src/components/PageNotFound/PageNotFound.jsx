import './PageNotFound.css';
import { Link, useNavigate } from 'react-router-dom';

export default function PageNotFound() {

	const navigate = useNavigate();
	return (
		<main className='main-content'>
			<section className='page-not-found'>
				<h1 className='page-not-found__title'>404</h1>
				<p className='page-not-found__subtitle'>Страница не найдена</p>
				<Link onClick={() => navigate(-1)} className='page-not-found__link'>Назад</Link>
			</section>
		</main>
	)
}