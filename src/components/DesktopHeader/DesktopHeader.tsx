import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTappedSelector';
import Email from '../../UI kit/Email/Email';
import Helper from '../../UI kit/Helper/Helper';
import Logo from '../../UI kit/Logo/Logo';
import PriceListButton from '../../UI kit/PriceListButton/PriceListButton';
import style from './DesktopHeader.module.scss';

type Props = {};

const Header: FC = (props: Props) => {
	const { cart } = useTypedSelector(state => state);

	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.firstRow}>
					<div className={style.location}>
						<div className={style.section}>
							<img src='/images/akar-icons_location.png' alt='' />
							<div className={style.address}>
								г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
							</div>
						</div>
						<div className={style.line}></div>
						<Email emailLogo={true} isWhite={false} />
					</div>
					<div className={style.secondSection}>
						<div>О компании</div>
						<div className={style.line}></div>
						<div>Доставка и оплата</div>
						<div className={style.line}></div>
						<div>Возврат</div>
						<div className={style.line}></div>
						<div>Контакты</div>
						<div className={style.line}></div>
						<Link to={'/admin'} className={style.admin}>
							<div>Панель админа</div>
						</Link>
					</div>
				</div>
			</div>
			<div className={style.primaryLine}></div>
			<div className={style.container}>
				<div className={style.secondRow}>
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<Logo isWhite={false} />
					</Link>
					<button className={style.button}>
						<div>Каталог</div>
						<img src='/images/catalog-logo.png' alt='' />
					</button>
					<div className={style.search}>
						<input type='text' placeholder='Поиск...' className={style.searchInput} />
						<img src='/images/search-logo.png' alt='' className={style.searchLogo} />
					</div>
					<Helper isWhite={false} />
					<div className={style.helperLogo}>
						<img src='/images/helper.png' alt='' />
						<div className={style.online}></div>
					</div>
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<PriceListButton />
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<div className={style.cart}>
						{cart.productsInCart.length ? (
							<div className={style.count}>
								<span>
									{cart.productsInCart.reduce((prev, current) => {
										return prev + current.count;
									}, 0)}
								</span>
							</div>
						) : null}
						<div>
							<img src='/images/cart.png' alt='' />
						</div>
						<div className={style.cartTitles}>
							<Link to={'/cart'} className={style.cartName}>
								<div>Корзина</div>
							</Link>
							<div className={style.cartPrice}>
								<>
									{cart.productsInCart
										.reduce((prev, current) => {
											return prev + current.product.price * current.count;
										}, 0)
										.toFixed(2)}{' '}
									₸
								</>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.primaryLine}></div>
		</header>
	);
};

export default Header;
