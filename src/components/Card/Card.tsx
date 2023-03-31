import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import { IProductItemType } from '../../types/ProductType';
import style from './Card.module.scss';
type CardProps = {
	product: IProductItemType;
};

const Card: FC<CardProps> = ({ product }) => {
	const sizeType = product.typeSize === 'volume' ? '/src/UI kit/images/volume.png' : '/src/UI kit/images/weight.png';

	const { addItem } = useAction();
	const { cart } = useTypedSelector(state => state);
	const isExistsInCart = cart.productsInCart.some(p => p.product.code === product.code);

	return (
		<div className={style.card}>
			<div className={style.container}>
				<div className={style.primaryColumn}>
					<div className={style.img}>
						<img src={product.url} alt='' height='200px' />
					</div>
					<div className={style.cardInfo}>
						<div className={style.size}>
							<img src={sizeType} alt='' />
							{product.typeSize === 'volume' ? `${product.size} мл` : `${product.size} г`}
						</div>
						<Link to={`/catalog/${product.code}`} style={{ textDecoration: 'none' }}>
							<div className={style.title}>
								<span>{product.title}</span> {product.description}
							</div>
						</Link>
						<div className={style.column}>
							<div>
								Штрихкод: <span className={style.primary}>{product.code}</span>
							</div>
							<div>
								Производитель: <span className={style.primary}>{product.producer}</span>
							</div>
							<div>
								Бренд: <span className={style.primary}>{product.brand}</span>
							</div>
						</div>
					</div>
					<div className={style.cartArea}>
						<div className={style.price}>{product.price} ₸</div>
						<button className={style.cart} onClick={() => !isExistsInCart && addItem({ product, count: 1 })}>
							{isExistsInCart ? (
								'УЖЕ В КОРЗИНЕ'
							) : (
								<>
									В КОРЗИНУ
									<img src='/src/UI kit/images/white-cart.png' alt='' />
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
