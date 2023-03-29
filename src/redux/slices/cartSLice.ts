import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItemType } from './../../types/ProductType';

const initialState: IProductItemType[] = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IProductItemType>) => {
			state.push(action.payload);
		},

		removeItem: (state, action: PayloadAction<{ code: number }>) => {
			return state.filter(product => product.code !== action.payload.code);
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
