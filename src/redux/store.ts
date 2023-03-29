import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSLice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export type TypeRootState = ReturnType<typeof store.getState>;
