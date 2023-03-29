import { FC } from 'react';
import ListCard from '../ListCard/ListCard';
import SideBar from '../SideBar/SideBar';
import style from './Main.module.scss';

type Props = {};

const Main: FC = (props: Props) => {
	function menuHandler() {
		const menu = document.querySelector(`.${style.toggle}`);
		const sidebar = document.querySelector(`.${style.mobileSidebar}`);

		menu?.classList.toggle(style.open);
		sidebar?.classList.toggle(style.openMobileSidebar);
	}

	return (
		<div className={style.main}>
			<div className={style.container}>
				<div className={style.breadCrumbs}>
					<div className={style.main}>Главная</div>
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
					<div className={style.sortCard}>
						Уход <div>за телом</div>
					</div>
					<div className={style.sortCard}>
						Уход <div>за руками</div>
					</div>
				</div>
				<div className={style.sortTitle}>
					Сортировка:
					<select name='sort' id='' className={style.sort}>
						<option value='1'>Название &uarr;</option>
						<option value='2'>Название &darr;</option>
						<option value='3'>Цена &uarr;</option>
						<option value='4'>Цена &darr;</option>
					</select>
				</div>
				<div className={style.row}>
					<div className={style.sortCard}>
						Уход <div>за телом</div>
					</div>
					<div className={style.sortCard}>
						Уход <div>за руками</div>
					</div>
				</div>
				<div className={style.grid}>
					<aside className={style.sidebar}>
						<SideBar isMobile={false} />
					</aside>
					<main className={style.cards}>
						<ListCard />
					</main>
				</div>
			</div>
		</div>
	);
};

export default Main;
