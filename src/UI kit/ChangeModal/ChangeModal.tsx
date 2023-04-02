import { FC } from 'react';
import { useAction } from '../../hooks/useAction';
import { IProductItemType } from '../../types/ProductType';
import style from './ChangeModal.module.scss';

type ChangeModalProps = {
	setIsOpen: (state: boolean) => void;
	isOpen: boolean;
	products: IProductItemType[];
	barcode: number;
};

const ChangeModal: FC<ChangeModalProps> = ({ setIsOpen, isOpen, products, barcode }) => {
	const [currentItem] = products.filter(item => item.code === barcode);

	const { changeProduct, addProduct } = useAction();

	const handleSubmit = (event: any, barcode: number) => {
		event.preventDefault();
		const url = event.target[0].value;
		const title = event.target[1].value;
		const sizeType = event.target[2].checked ? 'weight' : 'volume';
		const size = event.target[4].value;
		const code = +event.target[5].value;
		const producer = event.target[6].value;
		const brand = event.target[7].value;
		const description = event.target[8].value;
		const price = +event.target[9].value;
		const careTypes = event.target[10].value.split(',');

		const data = { url, title, sizeType, size, code, producer, brand, description, price, careTypes };

		if (barcode) {
			changeProduct({ barcode, data });
			setIsOpen(false);
		} else {
			addProduct({ data });
			setIsOpen(false);
		}
	};

	return (
		<>
			<div className={style.changeModal}>
				<form className={style.inputs} onSubmit={() => handleSubmit(event, barcode)}>
					<div className={style.row}>
						<label htmlFor='url'>URL картинки</label>
						<input type='text' id='url' defaultValue={barcode ? currentItem.url : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='title'>Название</label>
						<input type='text' id='title' defaultValue={barcode ? currentItem.title : ''} required />
					</div>
					<div className={style.row}>
						<div className={style.checkBox}>
							<label htmlFor='weight'>Вес</label>
							<input type='radio' id='weight' value='weight' defaultChecked={barcode ? currentItem.typeSize === 'weight' : true} name='sizeType' />
							<label htmlFor='volume'>Объем</label>
							<input type='radio' id='volume' value='volume' defaultChecked={barcode ? currentItem.typeSize === 'volume' : false} name='sizeType' />
						</div>
					</div>
					<div className={style.row}>
						<label htmlFor='size'>Размер</label>
						<input type='text' id='size' defaultValue={barcode ? currentItem.size : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='code'>Штрихкод</label>
						<input type='text' id='code' defaultValue={barcode ? currentItem.code : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='producer'>Производитель</label>
						<input type='text' id='producer' defaultValue={barcode ? currentItem.producer : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='brand'>Бренд</label>
						<input type='text' id='brand' defaultValue={barcode ? currentItem.brand : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='description'>Описание</label>
						<textarea id='description' defaultValue={barcode ? currentItem.description : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='price'>Цена</label>
						<input type='text' id='price' defaultValue={barcode ? currentItem.price : ''} required />
					</div>
					<div className={style.row}>
						<label htmlFor='care'>Тип уходы (Укажите через запятую: hand или body)</label>
						<input type='text' id='care' defaultValue={barcode ? currentItem.careTypes.join(',') : ''} required />
					</div>
					<div className={style.buttons}>
						<button type='submit'>Подтвердить</button>
						<button onClick={() => setIsOpen(!isOpen)}>Закрыть</button>
					</div>
				</form>
			</div>
			<div className={style.background}></div>
		</>
	);
};

export default ChangeModal;
