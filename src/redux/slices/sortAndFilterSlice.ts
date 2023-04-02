import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../data/Product';
import { IProductItemType } from '../../types/ProductType';
import { getProductsFromLocaleStorage } from './../../Utils/LocaleStorage';
interface ISort {
	products: IProductItemType[];
	sortType: string;
	sortDirection: string;
	producersFilters: string[];
}

const initialState: ISort = {
	products: getProductsFromLocaleStorage(),
	sortType: 'title',
	sortDirection: 'up',
	producersFilters: [],
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
		setProducersFilters: (state, action) => {
			if (!state.producersFilters.includes(action.payload)) {
				state.producersFilters.push(action.payload);
			} else if (state.producersFilters.includes(action.payload)) {
				const index = state.producersFilters.findIndex(item => item === action.payload);

				state.producersFilters = state.producersFilters.splice(index, 1);
			}
		},
		deleteProducersFilters: (state, action) => {
			state.producersFilters = state.producersFilters.filter(item => item !== action.payload);
		},
		filterByProducer: (state, action) => {
			if (!action.payload.length) {
				state.products = Products;
			} else {
				state.products = state.products.filter(item => action.payload.includes(item.producer));
			}
		},
		resetFilters: state => {
			state.products = getProductsFromLocaleStorage();
			state.producersFilters = [];
		},

		addProduct: (state, action) => {
			const { data } = action.payload;

			const currentState = state.products;

			currentState.push(data);
			localStorage.setItem('initialProducts', JSON.stringify(currentState));
			state.products = getProductsFromLocaleStorage();
		},

		changeProduct: (state, action) => {
			const { barcode, data } = action.payload;

			const currentState = state.products;

			const index = currentState.findIndex(item => item.code === barcode);
			currentState[index] = {
				url: data.url,
				title: data.title,
				typeSize: data.sizeType,
				size: data.size,
				code: data.code,
				producer: data.producer,
				brand: data.brand,
				description: data.description,
				price: data.price,
				careTypes: data.careTypes,
			};

			localStorage.setItem('initialProducts', JSON.stringify(currentState));

			state.products = getProductsFromLocaleStorage();
		},
		deleteProduct: (state, action) => {
			const sortedProducts = state.products.filter(item => item.code !== action.payload);
			localStorage.setItem('initialProducts', JSON.stringify(sortedProducts));

			state.products = getProductsFromLocaleStorage();
		},
	},
});

export const sortReducer = sortSlice.reducer;
export const sortActions = sortSlice.actions;
