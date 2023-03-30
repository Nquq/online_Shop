import { createSlice } from '@reduxjs/toolkit';
import { Products } from './../../data/Product';
import { IProductItemType } from './../../types/ProductType';
interface IFilter {
	products: IProductItemType[];
	filterCareType: string[];
}

const initialState: IFilter = {
	products: Products,
	filterCareType: [],
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterByCare: (state, action) => {
			state.filterCareType = action.payload;

			const filteredProducts = state.products.filter(item => {
				if (item.careTypes.includes('hand')) {
					return true;
				}
			});

			state.products = filteredProducts;
		},
	},
});

export const filtersReducer = filterSlice.reducer;
export const filtersActions = filterSlice.actions;
