import { FC } from 'react';
import { Products } from '../../data/Product';
import { IProductItemType } from '../../types/ProductType';
import ListCheckBox from '../../UI kit/ListCheckBox/ListCheckBox';
import Search from '../../UI kit/Search/Search';
import TrashButton from '../../UI kit/TrashButton/TrashButton';
import style from './SideBar.module.scss';

type SideBarProps = {
	isMobile: boolean;
};

const SideBar: FC<SideBarProps> = ({ isMobile }) => {
	const mobileContainer = isMobile ? style.mobileContainer : style.container;
	const maxPrice = (products: IProductItemType[]) => {
		let max: number = 0;
		products.map(product => {
			product.price > max ? (max = product.price) : null;
		});

		return `${max}`;
	};

	return (
		<div className={style.sidebar}>
			<div className={mobileContainer}>
				{isMobile ? null : <div className={style.title}>ПОДБОР ПО ПАРАМЕТРАМ</div>}
				<section className={style.price}>
					<div>
						Цена <span>₸</span>
					</div>
					<div className={style.row}>
						<input type='text' placeholder='0' />
						-
						<input type='text' placeholder={maxPrice(Products)} />
					</div>
				</section>
				<div className={style.title}>Производитель</div>
				<section className={style.producer}>
					<Search />
					<ListCheckBox isBrand={false} />
				</section>
				<div className={style.line}></div>
				<div className={style.title}>Бренд</div>
				<section className={style.producer}>
					<Search />
					<ListCheckBox isBrand={true} />
				</section>
				<section className={style.buttons}>
					<button className={style.show}>Показать</button>
					<TrashButton />
				</section>
				<div className={style.column}>
					{isMobile ? null : (
						<>
							<div className={style.sortCard}>Уход за телом</div>
							<div className={style.sortCard}>Уход за руками</div>
						</>
					)}
				</div>
				{!isMobile ? (
					<>
						<div className={style.title}>Бренды</div>
						<section className={style.brands}>
							<div>
								<img src='/src/UI kit/images/air-wick.png' alt='' />
							</div>
							<div>
								<img src='/src/UI kit/images/master.png' alt='' />
							</div>
							<div>
								<img src='/src/UI kit/images/sib.png' alt='' />
							</div>
							<div>
								<img src='/src/UI kit/images/cotton.png' alt='' />
							</div>
							<div>
								<img src='/src/UI kit/images/camay.png' alt='' />
							</div>
						</section>
					</>
				) : null}
			</div>
		</div>
	);
};

export default SideBar;
