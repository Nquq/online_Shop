import { FC } from 'react';
import { ProductItemType } from '../../types/ProductType';
import style from './Card.module.scss';
type CardProps = {
	product: ProductItemType;
};

const Card: FC<CardProps> = ({ product }) => {
	const sizeType = product.typeSize === 'volume' ? '/src/UI kit/images/volume.png' : '/src/UI kit/images/weight.png';

	return (
		<div className={style.card}>
			<div className={style.container}>
				<div className={style.primaryColumn}>
					<div className={style.img}>
						<img src={product.url} alt='' />
					</div>
					<div className={style.cardInfo}>
						<div className={style.size}>
							<img src={sizeType} alt='' />
							{product.typeSize === 'volume' ? `${product.size} мл` : `${product.size} г`}
						</div>
						<div className={style.title}>
							<span>{product.title}</span> {product.description}
						</div>
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
						<div className={style.cartArea}>
							<div className={style.price}>{product.price} ₸</div>
							<button className={style.cart}>
								Корзина
								<img src='/src/UI kit/images/white-cart.png' alt='' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
