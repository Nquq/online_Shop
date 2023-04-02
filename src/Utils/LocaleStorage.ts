import { Products } from './../data/Product';
import { IProductItemType } from './../types/ProductType';

export const setToLocaleStorage = (products: IProductItemType[]) => {
	localStorage.setItem('initialProducts', JSON.stringify(Products));
	return products;
};

export const getProductsFromLocaleStorage = () => {
	const stringifyProducts = localStorage.getItem('initialProducts');

	if (stringifyProducts !== null && JSON.parse(stringifyProducts).length !== 0) {
		return JSON.parse(stringifyProducts);
	}

	return setToLocaleStorage(Products);
};
