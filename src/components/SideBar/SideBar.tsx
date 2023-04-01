import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import { IProductItemType } from '../../types/ProductType';
import ListCheckBox from '../../UI kit/ListCheckBox/ListCheckBox';
import Search from '../../UI kit/Search/Search';
import TrashButton from '../../UI kit/TrashButton/TrashButton';
import style from './SideBar.module.scss';

type SideBarProps = {
	isMobile: boolean;
	handleBodyClick: (event: any) => void;
	handleHandClick: (event: any) => void;
	showHandProducts: boolean;
	showBodyProducts: boolean;
	setShowHandProducts: any;
	setShowBodyProducts: any;
};

const SideBar: FC<SideBarProps> = ({
	isMobile,
	handleBodyClick,
	handleHandClick,
	showBodyProducts,
	showHandProducts,
	setShowBodyProducts,
	setShowHandProducts,
}) => {
	const mobileContainer = isMobile ? style.mobileContainer : style.container;

	const [minValue, setMinValue] = useState('');
	const [maxValue, setMaxValue] = useState('');

	const products = useTypedSelector(state => state.sort.products);
	const { filterByPrice } = useAction();

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
						<input type='text' placeholder='0' value={minValue} onChange={event => setMinValue(event.target.value)} />
						-
						<input type='text' placeholder={maxPrice(products)} value={maxValue} onChange={event => setMaxValue(event.target.value)} />
					</div>
				</section>
				<div className={style.title}>Производитель</div>
				<section className={style.producer}>
					<Search />
					<ListCheckBox />
				</section>
				<div className={style.line}></div>
				<section className={style.buttons}>
					<button className={style.show} onClick={() => filterByPrice({ minPrice: !minValue ? 0 : +minValue, maxPrice: +maxValue })}>
						Показать
					</button>
					<TrashButton
						setMaxValue={setMaxValue}
						setMinValue={setMinValue}
						setShowBodyProducts={setShowBodyProducts}
						setShowHandProducts={setShowHandProducts}
					/>
				</section>
				<div className={style.column}>
					{isMobile ? null : (
						<>
							{showBodyProducts ? (
								<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleBodyClick(event)}>
									Уход за телом
								</div>
							) : (
								<div className={style.sortCard} onClick={() => handleBodyClick(event)}>
									Уход за телом
								</div>
							)}
							{showHandProducts ? (
								<div style={{ border: '2px solid #ffc85e' }} className={style.sortCard} onClick={() => handleHandClick(event)}>
									Уход за руками
								</div>
							) : (
								<div className={style.sortCard} onClick={() => handleHandClick(event)}>
									Уход за руками
								</div>
							)}
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
