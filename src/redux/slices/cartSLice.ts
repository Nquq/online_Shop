import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItemType } from './../../types/ProductType';

interface ICart {
	productsInCart: { product: IProductItemType; count: number }[];
}

const initialState: ICart = {
	productsInCart: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<{ product: IProductItemType; count: number }>) => {
			const { product, count } = action.payload;
			const index = state.productsInCart.findIndex(el => el.product.code === product.code);
			if (index !== -1) {
				state.productsInCart[index].count += +count;
			} else {
				state.productsInCart.push({ product, count: +count });
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const index = state.productsInCart.findIndex(el => el.product.code === action.payload);
			state.productsInCart.splice(index, 1);
		},
		removeCount: (state, action: PayloadAction<{ code: number; count: number }>) => {
			const { code, count } = action.payload;
			const index = state.productsInCart.findIndex(el => el.product.code === code);
			if (index !== -1) {
				state.productsInCart[index].count -= count;
			}
		},
		removeAll: state => {
			state.productsInCart.splice(0, state.productsInCart.length);
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
