import { FC } from 'react';
import Email from '../../UI kit/Email/Email';
import Logo from '../../UI kit/Logo/Logo';
import PriceListButton from '../../UI kit/PriceListButton/PriceListButton';
import style from './MobileHeader.module.scss';

type Props = {};

const MobileHeader: FC = (props: Props) => {
	function handleBurgerClick(): void {
		const burger: HTMLElement = document.querySelector(`.${style.burger}`)!;
		const menu: HTMLElement = document.querySelector(`.${style.hiddenBurgerMenu}`)!;
		const background: HTMLElement = document.querySelector(`.${style.grayBackground}`)!;

		menu.classList.toggle(style.openMenu);
		burger.classList.toggle(style.openBurger);
		background.classList.toggle(style.grayBackgroundOpen);
	}

	return (
		<div className={style.header}>
			<div className={style.container}>
				<section className={style.firstRow}>
					<div className={style.burger} onClick={handleBurgerClick}>
						<span></span>
					</div>
					<Logo isWhite={false} isMobile={true} />
					<div className={style.cart}>
						<img src='/src/UI kit/images/mobile-cart.png' alt='' />
					</div>
				</section>
			</div>
			<div className={style.primaryLine}></div>
			<div className={style.container}>
				<section className={style.secondRow}>
					<div className={style.section}>
						<img src='/src/UI kit/images/dark-catalog.png' alt='' />
						<div>Каталог</div>
					</div>
					<div className={style.line}></div>
					<div className={style.section}>
						<img src='/src/UI kit/images/akar-icons_search.png' alt='' />
						<div>Поиск</div>
					</div>
				</section>
			</div>
			<div className={style.primaryLine}></div>
			<div className={style.hiddenBurgerMenu}>
				<div className={style.container}>
					<div className={style.column}>
						<section className={style.row}>
							<img src='/src/UI kit/images/akar-icons_location.png' alt='' />
							<div className={style.address}>
								г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
							</div>
						</section>
						<section className={style.row}>
							<img src='/src/UI kit/images/email-logo.png' alt='' />
							<Email isWhite={false} />
						</section>
						<section className={style.row}>
							<img src='/src/UI kit/images/phone-logo.png' alt='' />
							<div>
								<div className={style.sale}>
									<span>Отдел продаж</span> <div>+7 (777) 490-00-91</div>
								</div>
								<div className={style.time}>время работы: 9:00-20:00</div>
							</div>
						</section>
						<section className={style.row}>
							<div className={style.image}>
								<img src='/src/UI kit/images/phone-logo-white.png' alt='' />
							</div>
							<div className={style.phone}>Заказать звонок</div>
						</section>
					</div>
					<div className={style.dashedLine}></div>
					<div className={style.container}>
						<div className={style.column}>
							<section>
								<div className={style.menu}>Меню сайта:</div>
								<ul className={style.list}>
									<li>О компании</li>
									<li>Доставка и оплата</li>
									<li>Возврат</li>
									<li>Контакты</li>
								</ul>
							</section>
							<PriceListButton />
						</div>
					</div>
				</div>
			</div>
			<div className={style.grayBackground}></div>
		</div>
	);
};

export default MobileHeader;
