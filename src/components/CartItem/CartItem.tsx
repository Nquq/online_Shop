import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import { IProductItemType } from '../../types/ProductType';
import TrashButton from '../../UI kit/TrashButton/TrashButton';
import style from './CartItem.module.scss';

type CartItemProps = {
	product: IProductItemType;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
	const cart = useTypedSelector(state => state.cart);
	const sizeType = product.typeSize === 'volume' ? '/volume.png' : '/images/weight.png';
	const [price, setPrice] = useState(product.price);
	const { addItem } = useAction();
	const [count, setCount] = useState<number>(1);
	const { removeItem, removeCount } = useAction();
	const code = product.code;

	const increment = () => {
		setCount(count + 1);
		setPrice(price + product.price);
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
			setPrice(price - product.price);
		} else if (count <= 1) removeItem(product.code);
	};

	return (
		<div className={style.cartItem}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.image}>
						<img src={product.url} alt='' />
					</div>
					<div className={style.column}>
						<div className={style.size}>
							<img src={sizeType} alt='' />
							{product.typeSize === 'volume' ? `${product.size} мл` : `${product.size} г`}
						</div>
						<div className={style.title}>
							{product.title} {product.description}
						</div>
					</div>
					<div className={style.rowButtons}>
						<div className={style.lineMobile}></div>
						<div className={style.increment}>
							<button
								onClick={() => {
									decrement();
									removeCount({ code, count: 1 });
								}}
							>
								-
							</button>
							<div>{count}</div>
							<button
								onClick={() => {
									addItem({ product, count: 1 });
									increment();
								}}
							>
								+
							</button>
						</div>
						<div className={style.line}></div>
						<div className={style.price}>{+price.toFixed(2)} ₸</div>
						<div className={style.line}></div>
						<TrashButton code={product.code} />
					</div>
				</div>
				<div className={style.primaryLine}></div>
			</div>
		</div>
	);
};

export default CartItem;
