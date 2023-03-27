import { FC } from 'react';
import { Products } from '../../data/Product';
import { IProductItemType } from '../../types/ProductType';
import CheckBox from '../CheckBox/CheckBox';

type ListCheckBoxProps = {
	isBrand: boolean;
};

const ListCheckBox: FC<ListCheckBoxProps> = ({ isBrand }) => {
	const collectProducers = (products: IProductItemType[]) => {
		const uniq = {} as { [key: string]: number };
		products.map((product: IProductItemType) => {
			const currentItem: string = product[isBrand ? 'brand' : 'producer'];
			uniq[currentItem] = uniq[currentItem] ? uniq[currentItem] + 1 : 1;
		});
		return uniq;
	};

	return (
		<div style={{ marginTop: '15px' }}>
			{Object.entries(collectProducers(Products)).map(([producer, count], index: number) => {
				return <CheckBox key={index} title={producer} amount={count} />;
			})}
		</div>
	);
};

export default ListCheckBox;
