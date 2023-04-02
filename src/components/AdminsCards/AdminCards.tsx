import { FC } from 'react';
import { IProductItemType } from '../../types/ProductType';
import style from './AdminCards.module.scss';
type AdminCardsProps = {
	product: IProductItemType;
	deleteProduct: (code: number) => void;
	setIsOpen: (state: boolean) => void;
	isOpen: boolean;
	setCode: (code: number) => void;
};

const AdminCards: FC<AdminCardsProps> = ({ product, deleteProduct, setIsOpen, isOpen, setCode }) => {
	const sizeType = product.typeSize === 'volume' ? '/images/volume.png' : '/images/weight.png';

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
					</div>
					<div className={style.cartArea}>
						<div className={style.price}>{product.price} ₸</div>
						<button
							className={style.cart}
							onClick={() => {
								setIsOpen(!isOpen);
								setCode(product.code);
							}}
						>
							Изменить
						</button>
						<button className={style.cart} onClick={() => deleteProduct(product.code)}>
							Удалить
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminCards;
