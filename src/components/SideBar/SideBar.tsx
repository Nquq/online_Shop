import { FC, useState } from 'react';
import { Products } from '../../data/Product';
import { useAction } from '../../hooks/useAction';
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

	const { filterByCare, resetFilters } = useAction();

	const [isActive, setIsActive] = useState<boolean>(false);
	const handleClick = (event: any) => {
		const target = event.target;
		const filterValue = target.dataset.value;

		if (isActive) {
			resetFilters();
			setIsActive(false);
		} else {
			filterByCare(filterValue);
			setIsActive(true);
		}

		console.log(filterValue);
		console.log(isActive);
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
					<ListCheckBox />
				</section>
				<div className={style.line}></div>
				<section className={style.buttons}>
					<button className={style.show}>Показать</button>
					<TrashButton />
				</section>
				<div className={style.column}>
					{isMobile ? null : (
						<>
							<div className={style.sortCard} data-value='body' onClick={handleClick}>
								Уход за телом
							</div>
							<div className={style.sortCard} data-value='hand' onClick={handleClick}>
								Уход за руками
							</div>
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
