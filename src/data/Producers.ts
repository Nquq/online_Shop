import { IProductItemType } from '../types/ProductType';
import { Products } from './Product';

const collectProducers = (products: IProductItemType[]) => {
	const uniq = {} as { [key: string]: number };
	products.map((product: IProductItemType) => {
		const currentItem: string = product['producer'];
		uniq[currentItem] = uniq[currentItem] ? uniq[currentItem] + 1 : 1;
	});
	return Object.entries(uniq);
};

export const Producers = collectProducers(Products);
