import { createSlice } from '@reduxjs/toolkit';
import { Products } from './../../data/Product';
import { IProductItemType } from './../../types/ProductType';
interface ISort {
	products: IProductItemType[];
	sortType: string;
	sortDirection: string;
	filterCareType: string[];
}

const initialState: ISort = {
	products: Products,
	sortType: 'title',
	sortDirection: 'up',
	filterCareType: [],
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		sortProducts: (state, action) => {
			const { sortType, sortDirection } = action.payload;

			const sortedProducts = state.products.slice().sort((a: any, b) => {
				if (sortType === 'title') {
					return sortDirection === 'up' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
				} else if (sortType === 'price') {
					return sortDirection === 'up' ? a.price - b.price : b.price - a.price;
				}
			});

			state.products = sortedProducts;
			state.sortType = sortType;
			state.sortDirection = sortDirection;
		},
		filterByCare: (state, action) => {
			state.filterCareType.push(action.payload);

			const filteredProducts = state.products.filter(item => state.filterCareType.every(elem => item.careTypes.includes(elem)));

			state.products = filteredProducts;
		},
		resetFilters: state => {
			state.filterCareType = [];
			state.products = Products;
		},
	},
});

export const sortReducer = sortSlice.reducer;
export const sortActions = sortSlice.actions;
