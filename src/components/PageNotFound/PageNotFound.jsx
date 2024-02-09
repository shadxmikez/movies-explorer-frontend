import './PageNotFound.css';
import { Link, useNavigate } from 'react-router-dom';
import { PAGE_NOT_FOUND } from '../../utils/constants';

const {
	pageNotFoundTitle,
	pageNotFoundSubtitle,
	pageNotFoundComeBack } = PAGE_NOT_FOUND;

export default function PageNotFound() {

	const navigate = useNavigate();
	return (
		<main className='main-content'>
			<section className='page-not-found'>
				<h1 className='page-not-found__title'>{pageNotFoundTitle}</h1>
				<p className='page-not-found__subtitle'>{pageNotFoundSubtitle}</p>
				<Link onClick={() => navigate(-1)} className='page-not-found__link'>{pageNotFoundComeBack}</Link>
			</section>
		</main>
	)
}