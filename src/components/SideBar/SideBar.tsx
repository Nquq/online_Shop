import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import { IProductItemType } from '../../types/ProductType';
import ProducersList from '../../UI kit/Producers/ProducersList';
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
	products: IProductItemType[];
	producers: [producer: string, count: number][];
};

const SideBar: FC<SideBarProps> = ({
	isMobile,
	handleBodyClick,
	handleHandClick,
	showBodyProducts,
	showHandProducts,
	setShowBodyProducts,
	setShowHandProducts,
	products,
	producers,
}) => {
	const mobileContainer = isMobile ? style.mobileContainer : style.container;

	const [minValue, setMinValue] = useState('');
	const [maxValue, setMaxValue] = useState('');

	const { filterByPrice, filterByProducer, setProducersFilters, deleteProducersFilters } = useAction();
	const filters = useTypedSelector(state => state.sort.producersFilters);

	const [checked, setChecked] = useState<boolean[]>([]);

	const handleCheckBoxChange = (event: any, index: number) => {
		const newCheckBox: boolean[] = [...checked];
		newCheckBox[index] = event.target.checked;
		setChecked(newCheckBox);
	};

	const removeCheckBox = () => {
		setChecked(checked.map(item => (item = false)));
	};

	const handleChange = (e: any) => {
		const ch = e.target.checked;
		if (ch) {
			setProducersFilters(e.target.value);
		} else if (!ch) deleteProducersFilters(e.target.value);
	};

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
					<ProducersList producers={producers} handleChange={handleChange} handleCheckBoxChange={handleCheckBoxChange} checked={checked} />
				</section>
				<div className={style.line}></div>
				<section className={style.buttons}>
					<button
						className={style.show}
						onClick={() => {
							filterByProducer(filters);
							filterByPrice({ minPrice: !minValue ? 0 : +minValue, maxPrice: !maxValue ? +maxPrice(products) : +maxValue });
						}}
					>
						Показать
					</button>
					<TrashButton
						setMaxValue={setMaxValue}
						setMinValue={setMinValue}
						setShowBodyProducts={setShowBodyProducts}
						setShowHandProducts={setShowHandProducts}
						removeCheckbox={removeCheckBox}
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
								<img src='/images/air-wick.png' alt='' />
							</div>
							<div>
								<img src='/images/master.png' alt='' />
							</div>
							<div>
								<img src='/images/sib.png' alt='' />
							</div>
							<div>
								<img src='/images/cotton.png' alt='' />
							</div>
							<div>
								<img src='/images/camay.png' alt='' />
							</div>
						</section>
					</>
				) : null}
			</div>
		</div>
	);
};

export default SideBar;
