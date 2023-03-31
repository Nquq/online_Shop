import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import Modal from '../../UI kit/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';

type Props = {};

const Cart: FC = (props: Props) => {
	const cart = useTypedSelector(state => state.cart);
	const [isOrdered, setIsOrdered] = useState<boolean>(false);
	const { removeAll } = useAction();

	const handleClickOpen = () => {
		setIsOrdered(true);
		removeAll();
	};

	const handleClickClose = () => {
		setIsOrdered(false);
	};

	return (
		<div className={style.cart}>
			{isOrdered ? <Modal handleClick={handleClickClose} /> : null}
			<div className={style.container}>
				<div className={style.breadCrumbs}>
					<div className={style.mainMenu}>Главная</div>
					<div className={style.line}></div>
					<div className={style.category}>Корзина</div>
				</div>
				<div className={style.header}>Корзина</div>
				{cart.productsInCart.length ? <div className={style.primaryLine}></div> : <div className={style.empty}>Нет товаров в корзине</div>}
				{cart.productsInCart.map(product => {
					return <CartItem product={product.product} key={product.product.code} />;
				})}
				<div className={style.order}>
					<button onClick={handleClickOpen}>Оформить заказ</button>
					<div className={style.price}>
						{
							+cart.productsInCart
								.reduce((prev, current) => {
									return prev + current.product.price * current.count;
								}, 0)
								.toFixed(2)
						}{' '}
						₸
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
