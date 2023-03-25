import { FC } from 'react';
import Logo from '../../UI kit/Logo/Logo';
import style from './MobileHeader.module.scss';

type Props = {};

const MobileHeader: FC = (props: Props) => {
	return (
		<div className={style.header}>
			<div className={style.container}>
				<section className={style.firstRow}>
					<div className={style.burger}>
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
						<img src='/src/UI kit/images/akar-icons_location.png' alt='' />
						<div>Поиск</div>
					</div>
				</section>
			</div>
			<div className={style.primaryLine}></div>
		</div>
	);
};

export default MobileHeader;
