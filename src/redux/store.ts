import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSLice';
import { sortReducer } from './slices/sortAndFilterSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		sort: sortReducer,
	},
});

export type TypeRootState = ReturnType<typeof store.getState>;
