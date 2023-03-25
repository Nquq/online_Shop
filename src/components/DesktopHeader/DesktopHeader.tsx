import { FC } from 'react';
import Email from '../../UI kit/Email/Email';
import Helper from '../../UI kit/Helper/Helper';
import emailLogo from '../../UI kit/images/email-logo.png';
import Logo from '../../UI kit/Logo/Logo';
import PriceListButton from '../../UI kit/PriceListButton/PriceListButton';
import style from './DesktopHeader.module.scss';

type Props = {};

const Header: FC = (props: Props) => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.firstRow}>
					<div className={style.location}>
						<div className={style.section}>
							<img src='/src/UI kit/images/akar-icons_location.png' alt='' />
							<div className={style.address}>
								г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
							</div>
						</div>
						<div className={style.line}></div>
						<Email emailLogo={emailLogo} isWhite={false} />
					</div>
					<div className={style.secondSection}>
						<div>О компании</div>
						<div className={style.line}></div>
						<div>Доставка и оплата</div>
						<div className={style.line}></div>
						<div>Возврат</div>
						<div className={style.line}></div>
						<div>Контакты</div>
					</div>
				</div>
			</div>
			<div className={style.primaryLine}></div>
			<div className={style.container}>
				<div className={style.secondRow}>
					<Logo isWhite={false} />
					<button className={style.button}>
						<div>Каталог</div>
						<img src='/src/UI kit/images/catalog-logo.png' alt='' />
					</button>
					<div className={style.search}>
						<input type='text' placeholder='Поиск...' className={style.searchInput} />
						<img src='/src/UI kit/images/search-logo.png' alt='' className={style.searchLogo} />
					</div>
					<Helper isWhite={false} />
					<div className={style.helperLogo}>
						<img src='/src/UI kit/images/helper.png' alt='' />
						<div className={style.online}></div>
					</div>
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<PriceListButton />
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<div className={style.cart}>
						<div>
							<img src='/src/UI kit/images/cart.png' alt='' />
						</div>
						<div className={style.cartTitles}>
							<div className={style.cartName}>Корзина</div>
							<div className={style.cartPrice}>0 ₸</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.primaryLine}></div>
		</header>
	);
};

export default Header;
