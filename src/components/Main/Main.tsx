import { FC, useState } from 'react';
import { Producers } from '../../data/Producers';
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

	const producers = Producers;

	const { sortProducts, filterByCare } = useAction();

	const handleChange = (event: any) => {
		const [sortType, sortDirection] = event.target.value.split('-');
		sortProducts({ sortType, sortDirection });
	};

	const [showHandProducts, setShowHandProducts] = useState<boolean>(false);
	const [showBodyProducts, setShowBodyProducts] = useState<boolean>(false);

	const handleBodyProductsClick = (event: any) => {
		setShowBodyProducts(!showBodyProducts);
		filterByCare({ showBodyProducts: !showBodyProducts, showHandProducts: showHandProducts });
	};

	const handleHandProductsClick = (event: any) => {
		setShowHandProducts(!showHandProducts);
		filterByCare({ showBodyProducts: showBodyProducts, showHandProducts: !showHandProducts });
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(12);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
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
							<SideBar
								isMobile={true}
								handleBodyClick={handleBodyProductsClick}
								handleHandClick={handleHandProductsClick}
								showBodyProducts={showBodyProducts}
								showHandProducts={showHandProducts}
								setShowBodyProducts={setShowBodyProducts}
								setShowHandProducts={setShowHandProducts}
								products={currentItems}
								producers={producers}
							/>
						</div>
					</div>
				</div>
				<div className={style.rowMobile}>
					{showBodyProducts ? (
						<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleBodyProductsClick(event)}>
							Уход за телом
						</div>
					) : (
						<div className={style.sortCard} onClick={() => handleBodyProductsClick(event)}>
							Уход за телом
						</div>
					)}
					{showHandProducts ? (
						<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleHandProductsClick(event)}>
							Уход за руками
						</div>
					) : (
						<div className={style.sortCard} onClick={() => handleHandProductsClick(event)}>
							Уход за руками
						</div>
					)}
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
					{showBodyProducts ? (
						<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleBodyProductsClick(event)}>
							Уход <br /> за телом
						</div>
					) : (
						<div className={style.sortCard} onClick={() => handleBodyProductsClick(event)}>
							Уход <br /> за телом
						</div>
					)}
					{showHandProducts ? (
						<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleHandProductsClick(event)}>
							Уход <br /> за руками
						</div>
					) : (
						<div className={style.sortCard} onClick={() => handleHandProductsClick(event)}>
							Уход <br /> за руками
						</div>
					)}
				</div>
				<div className={style.grid}>
					<aside className={style.sidebar}>
						<SideBar
							isMobile={false}
							handleBodyClick={handleBodyProductsClick}
							handleHandClick={handleHandProductsClick}
							showBodyProducts={showBodyProducts}
							showHandProducts={showHandProducts}
							setShowBodyProducts={setShowBodyProducts}
							setShowHandProducts={setShowHandProducts}
							products={currentItems}
							producers={producers}
						/>
					</aside>
					<ListCard
						products={currentItems}
						currentPage={currentPage}
						totalPages={Math.ceil(products.length / itemsPerPage)}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
