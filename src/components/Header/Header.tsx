import Email from '../../UI kit/Email/Email';
import Helper from '../../UI kit/Helper/Helper';
import locationLogo from '../../UI kit/images/akar-icons_location.png';
import cart from '../../UI kit/images/cart.png';
import catalogLogo from '../../UI kit/images/catalog-logo.png';
import download from '../../UI kit/images/dowload-logo.png';
import emailLogo from '../../UI kit/images/email-logo.png';
import helper from '../../UI kit/images/helper.png';
import primaryLogo from '../../UI kit/images/primary-logo.png';
import searchLogo from '../../UI kit/images/search-logo.png';
import style from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.firstRow}>
					<div className={style.location}>
						<div className={style.section}>
							<img src={locationLogo} alt='' />
							<div className={style.address}>
								г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
							</div>
						</div>
						<div className={style.line}></div>
						<Email emailLogo={emailLogo} />
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
					<div className={style.logo}>
						<img src={primaryLogo} />
						<div className={style.logoTitle}>СУЛТАН</div>
					</div>
					<button className={style.button}>
						<div>Каталог</div>
						<img src={catalogLogo} alt='' />
					</button>
					<div className={style.search}>
						<input type='text' placeholder='Поиск...' className={style.searchInput} />
						<img src={searchLogo} alt='' className={style.searchLogo} />
					</div>
					<Helper />
					<div className={style.helperLogo}>
						<img src={helper} alt='' />
						<div className={style.online}></div>
					</div>
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<button className={style.button}>
						<div>Каталог</div>
						<img src={download} alt='' />
					</button>
					<div className={style.line} style={{ margin: '0 25px 0 25px' }}></div>
					<div className={style.cart}>
						<div>
							<img src={cart} alt='' />
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
