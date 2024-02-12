import './Promo.css';
import { PROMO } from '../../../utils/constants';

const { promoTitle } = PROMO;

export default function Promo() {
	return (
		<section className='promo'>
			<div className='promo__container'>
				<h1 className='promo__title'>{promoTitle}</h1>
			</div>
		</section>
	)
}