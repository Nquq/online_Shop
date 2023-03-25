import { FC } from 'react';
import Email from '../../UI kit/Email/Email';
import Helper from '../../UI kit/Helper/Helper';
import Logo from '../../UI kit/Logo/Logo';
import PriceListButton from '../../UI kit/PriceListButton/PriceListButton';
import style from './DesktopFooter.module.scss';

type Props = {};

const Footer: FC = (props: Props) => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.row}>
					<section className={style.logo}>
						<Logo isWhite={true} />
						<div className={style.description}>
							Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
						</div>
						<div className={style.subtitle}>Подпишись на скидки и акции</div>
						<div className={style.search}>
							<input type='text' placeholder='Введите ваш E-mail' className={style.searchInput} />
							<div className={style.searchLogo}>
								<img src='/src/UI kit/images/send.png' alt='' />
							</div>
						</div>
					</section>
					<section className={style.section}>
						<div className={style.title}>Меню сайта:</div>
						<ul className={style.list}>
							<li>О компании</li>
							<li>Доставка и оплата</li>
							<li>Возврат</li>
							<li>Контакты</li>
						</ul>
					</section>
					<section className={style.section}>
						<div className={style.title}>Категории:</div>
						<ul className={style.list}>
							<li>Бытовая химия</li>
							<li>Косметика и гигиена</li>
							<li>Товары для дома</li>
							<li>Товары для детей и мам</li>
							<li>Посуда</li>
						</ul>
					</section>
					<section className={style.section}>
						<div className={style.title}>Скачать прайс-лист:</div>
						<PriceListButton />
						<div className={style.subtitle}>Связь в мессенджерах:</div>
						<div className={style.icons}>
							<img src='/src/UI kit/images/whatsup.png' alt='' />
							<img src='/src/UI kit/images/logos_telegram.png' alt='' />
						</div>
					</section>
					<section className={style.section}>
						<div className={style.title}>Контакты:</div>
						<Helper isWhite={true} />
						<Email isWhite={true} />
						<div className={style.icons}>
							<img src='/src/UI kit/images/Visa.png' alt='' />
							<img src='/src/UI kit/images/mastercard.png' alt='' />
						</div>
					</section>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
