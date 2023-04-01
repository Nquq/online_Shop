import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSLice';
import { producersReducer } from './slices/producersSlice';
import { sortReducer } from './slices/sortAndFilterSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		sort: sortReducer,
		producer: producersReducer,
	},
});

export type TypeRootState = ReturnType<typeof store.getState>;
