import { createSlice } from '@reduxjs/toolkit';
import { Products } from './../../data/Product';
import { IProductItemType } from './../../types/ProductType';

const collectProducers = (products: IProductItemType[]) => {
	const uniq = {} as { [key: string]: number };
	products.map((product: IProductItemType) => {
		const currentItem: string = product['producer'];
		uniq[currentItem] = uniq[currentItem] ? uniq[currentItem] + 1 : 1;
	});
	return Object.entries(uniq);
};

const producers = collectProducers(Products);

const initialState = {
	producers: producers,
};
export const producersSlice = createSlice({
	name: 'producers',
	initialState,
	reducers: {
		sortProducers: (state, action) => {
			if (!action.payload) {
				state.producers = producers;
			} else if (action.payload) {
				state.producers = state.producers.filter(item => item[0].toLowerCase().includes(action.payload));
			}
		},
	},
});

export const producersReducer = producersSlice.reducer;
export const producersActions = producersSlice.actions;
