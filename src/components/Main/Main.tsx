import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import ListCard from '../ListCard/ListCard';
import SideBar from '../SideBar/SideBar';
import style from './Main.module.scss';

type MainProps = {};

const Main: FC<MainProps> = () => {
	function menuHandler() {
		const menu = document.querySelector(`.${style.toggle}`);
		const sidebar = document.querySelector(`.${style.mobileSidebar}`);

		menu?.classList.toggle(style.open);
		sidebar?.classList.toggle(style.openMobileSidebar);
	}

	const products = useTypedSelector(state => state.sort.products);
	const { sortProducts, filterByCare, resetFilters } = useAction();

	const handleChange = (event: any) => {
		const [sortType, sortDirection] = event.target.value.split('-');
		sortProducts({ sortType, sortDirection });
	};

	const [isActive, setIsActive] = useState<boolean>(false);
	const careFilters = useTypedSelector(state => state.sort.filtersCareType);

	const handleClick = (event: any) => {
		const target = event.target;
		const filterValue = target.dataset.value;

		if (isActive) {
			setIsActive(false);
			resetFilters();
			target.style.border = '';
			return;
		}
		filterByCare(filterValue);
		setIsActive(true);
		target.style.border = '3px solid #f3a50d';
	};

	return (
		<div className={style.main}>
			<div className={style.container}>
				<div className={style.breadCrumbs}>
					<div className={style.mainMenu}>Главная</div>
					<div className={style.line}></div>
					<div className={style.category}>Косметика и гигиена</div>
				</div>
				<div className={style.header}>Косметика и гигиена</div>
				<div className={style.title}>
					ПОДБОР ПО ПАРАМЕТРАМ
					<div className={style.menu}>
						<span className={style.toggle} onClick={menuHandler}>
							&gt;
						</span>
						<div className={style.mobileSidebar}>
							<SideBar isMobile={true} />
						</div>
					</div>
				</div>
				<div className={style.rowMobile}>
					<div className={style.sortCard} data-value='body' onClick={handleClick}>
						Уход за телом
					</div>
					<div className={style.sortCard} data-value='hand' onClick={handleClick}>
						Уход за руками
					</div>
				</div>
				<div className={style.sortTitle}>
					Сортировка:
					<select name='sort' className={style.sort} onChange={handleChange}>
						<option value='title-up'>Название &uarr;</option>
						<option value='title-down'>Название &darr;</option>
						<option value='price-up'>Цена &uarr;</option>
						<option value='price-down'>Цена &darr;</option>
					</select>
				</div>
				<div className={style.row}>
					<div className={style.sortCard} data-value='body' onClick={handleClick}>
						Уход <br /> за телом
					</div>
					<div className={style.sortCard} data-value='hand' onClick={handleClick}>
						Уход <br /> за руками
					</div>
				</div>
				<div className={style.grid}>
					<aside className={style.sidebar}>
						<SideBar isMobile={false} />
					</aside>
					<main className={style.cards}>
						<ListCard products={products} />
					</main>
				</div>
			</div>
		</div>
	);
};

export default Main;
