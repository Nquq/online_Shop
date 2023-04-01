import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../data/Product';
import { IProductItemType } from '../../types/ProductType';
interface ISort {
	products: IProductItemType[];
	sortType: string;
	sortDirection: string;
}

const initialState: ISort = {
	products: Products,
	sortType: 'title',
	sortDirection: 'up',
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
		filterByCare: (state, action: PayloadAction<{ showBodyProducts: boolean; showHandProducts: boolean }>) => {
			const { showBodyProducts, showHandProducts } = action.payload;

			state.products = Products;
			if (showBodyProducts && showHandProducts) {
				state.products = state.products.filter(item => item.careTypes.length === 2);
			} else if (showBodyProducts) {
				state.products = state.products.filter(item => item.careTypes.includes('body'));
			} else if (showHandProducts) {
				state.products = state.products.filter(item => item.careTypes.includes('hand'));
			} else {
				state.products = Products;
			}
		},
		filterByPrice: (state, action: PayloadAction<{ minPrice: number; maxPrice: number }>) => {
			const { minPrice, maxPrice } = action.payload;
			if (!minPrice && !maxPrice) {
				state.products = Products;
			} else {
				state.products = state.products.filter(item => item.price >= minPrice && item.price <= maxPrice);
			}
		},
		filterByProducer: (state, action) => {
			const { checked, title } = action.payload;

			if (checked) {
				state.products = state.products.filter(item => item.producer === title);
			} else if (!checked) state.products = Products;
		},
		resetFilters: state => {
			state.products = Products;
		},
	},
});

export const sortReducer = sortSlice.reducer;
export const sortActions = sortSlice.actions;
