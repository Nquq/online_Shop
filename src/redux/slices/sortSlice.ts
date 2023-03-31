import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from './../../data/Product';
import { IProductItemType } from './../../types/ProductType';
interface ISort {
	products: IProductItemType[];
	sortType: string;
	sortDirection: string;
	filtersCareType: string[];
}

const initialState: ISort = {
	products: Products,
	sortType: 'title',
	sortDirection: 'up',
	filtersCareType: [],
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		sortProducts: (state, action: PayloadAction<{ sortType: string; sortDirection: string }>) => {
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
			// const { careType, active } = action.payload;
			state.filtersCareType.push(action.payload);

			const filters = state.filtersCareType.sort();

			const filteredProducts = state.products.filter(
				product => product.careTypes.length === filters.length && product.careTypes.sort().every((type, index) => filters[index] === type)
			);

			state.products = filteredProducts;
		},
		resetFilters: state => {
			state.filtersCareType = [];
			state.products = Products;
		},
	},
});

export const sortReducer = sortSlice.reducer;
export const sortActions = sortSlice.actions;

// const filteredProducts = state.products.filter(product => {
// 	if (careType === 'hand' && !active) {
// 		return product.careTypes.sort().every((el, index) => {
// 			return el === state.filterCareType.sort()[index];
// 		});
// 	} else if (careType === 'hand' && active) {
// 		state.filterCareType.shift();
// 		state.products = Products;
// 		return true;
// 	}
// });

// const filteredProducts = state.products.filter(item => state.filterCareType.every(elem => item.careTypes.includes(elem)));
