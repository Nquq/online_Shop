import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../data/Product';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import style from './CardFullPage.module.scss';

type Props = {};

const CardFullPage: FC = (props: Props) => {
	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
	const [isOpenStats, setIsOpenStats] = useState<boolean>(false);

	const { code: id } = useParams();

	const [product] = Products.filter(item => {
		return item.code === +id!;
	});

	const sizeType = product.typeSize === 'volume' ? '/images/volume.png' : '/images/weight.png';

	const cart = useTypedSelector(state => state.cart);
	const { addItem, removeCount, removeItem } = useAction();
	const isExistsInCart = cart.productsInCart.some(p => p.product.code === product.code);

	const code = product.code;

	const [count, setCount] = useState<number>(0);
	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		} else if (count <= 1 && count > 0) {
			removeItem(code);
			setCount(count - 1);
		}
	};

	const toggleDesc = isOpenDesc ? style.openToggleDesc : style.toggle;
	const toggleStats = isOpenStats ? style.openToggleStats : style.toggle;

	return (
		<div className={style.cardFullPage}>
			<div className={style.container}>
				<div className={style.breadCrumbs}>
					<div className={style.mainMenu}>Главная</div>
					<div className={style.line}></div>
					<div className={style.mainMenu}>Косметика и гигиена</div>
					<div className={style.line}></div>
					<div className={style.category}>
						{product.title} {product.description}
					</div>
				</div>
				<div className={style.row}>
					<div className={style.img}>
						<img src={product.url} alt='' />
					</div>
					<div className={style.info}>
						<div style={{ color: '#1FD85D' }}>В наличии</div>
						<div className={style.title}>
							<span>{product.title}</span> {product.description}
						</div>
						<div className={style.size}>
							<img src={sizeType} alt='' />
							{product.typeSize === 'volume' ? `${product.size} мл` : `${product.size} г`}
						</div>
						<div className={style.rowButtons}>
							<div className={style.price}>{product.price} ₸</div>
							<div className={style.increment}>
								<button
									onClick={() => {
										decrement();
										count > 1 ? removeCount({ code, count: 1 }) : null;
									}}
								>
									-
								</button>
								<div>
									{cart.productsInCart.reduce((prev, current) => {
										return prev + current.count;
									}, 0)}
								</div>
								<button
									onClick={() => {
										addItem({ product, count: 1 });
										increment();
									}}
								>
									+
								</button>
							</div>
							<button className={style.cart} onClick={() => !isExistsInCart && addItem({ product, count: 1 })}>
								{isExistsInCart ? (
									'УЖЕ В КОРЗИНЕ'
								) : (
									<>
										В КОРЗИНУ
										<img src='/images/white-cart.png' alt='' />
									</>
								)}
							</button>
						</div>
						<div className={style.rowShare}>
							<div className={style.share}>
								<img src='/images/share.png' alt='' />
							</div>
							<div className={style.sale}>
								<div>
									При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
								</div>
							</div>
							<div className={style.priceList}>
								Прайс-лист <img src='/images/bx_bxs-download.png' alt='' />
							</div>
						</div>
						<div className={style.column}>
							<div>
								Производитель: <span className={style.primary}>{product.producer}</span>
							</div>
							<div>
								Бренд: <span className={style.primary}>{product.brand}</span>
							</div>
							<div>
								Артикул: <span className={style.primary}>460404</span>
							</div>
							<div>
								Штрихкод: <span className={style.primary}>{product.code}</span>
							</div>
						</div>
						<div className={style.description}>
							Описание
							<div className={toggleDesc} onClick={() => setIsOpenDesc(!isOpenDesc)}>
								{'>'}
							</div>
						</div>
						{isOpenDesc ? (
							<div className={style.openDescription}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
								vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
								Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
							</div>
						) : null}
						<div className={style.lineX}></div>
						<div className={style.description}>
							Характеристики
							<div className={toggleStats} onClick={() => setIsOpenStats(!isOpenStats)}>
								{'>'}
							</div>
						</div>
						{isOpenStats ? (
							<div className={style.column}>
								<div>
									Производитель: <span className={style.primary}>{product.producer}</span>
								</div>
								<div>
									Бренд: <span className={style.primary}>{product.brand}</span>
								</div>
								<div>
									Артикул: <span className={style.primary}>460404</span>
								</div>
								<div>
									Штрихкод: <span className={style.primary}>{product.code}</span>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardFullPage;
