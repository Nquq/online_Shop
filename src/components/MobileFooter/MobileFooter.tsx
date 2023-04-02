import { FC } from 'react';
import Email from '../../UI kit/Email/Email';
import Helper from '../../UI kit/Helper/Helper';
import Logo from '../../UI kit/Logo/Logo';
import PriceListButton from '../../UI kit/PriceListButton/PriceListButton';
import style from './MobileFooter.module.scss';

type MobileProps = {};

const MobileFooter: FC<MobileProps> = () => {
	return (
		<div className={style.footer}>
			<div className={style.container}>
				<div className={style.column}>
					<section className={style.firstRow}>
						<Logo isWhite={true} isMobile={true} />
						<PriceListButton isMobile={true} />
					</section>
					<section className={style.about}>
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
					</section>
					<section className={style.subtitle}>Подпишись на скидки и акции</section>
					<section>
						<div className={style.search}>
							<input type='text' placeholder='Введите ваш E-mail' className={style.searchInput} />
							<div className={style.searchLogo}>
								<img src='/images/send.png' alt='' />
							</div>
						</div>
					</section>
					<section className={style.secondRow}>
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
					</section>
					<section className={style.thirdRow}>
						<section className={style.section}>
							<div className={style.title}>Контакты:</div>
							<Helper isWhite={true} />
							<Email isWhite={true} />
							<div className={style.icons}>
								<img src='/images/Visa.png' alt='' />
								<img src='/images/mastercard.png' alt='' />
							</div>
						</section>
						<section className={style.section}>
							<div className={style.messengers}>Связь в мессенджерах:</div>
							<div className={style.icons}>
								<img src='/images/whatsup.png' alt='' />
								<img src='/images/logos_telegram.png' alt='' />
							</div>
						</section>
					</section>
				</div>
			</div>
		</div>
	);
};

export default MobileFooter;
