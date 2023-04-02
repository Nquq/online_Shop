import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { sortActions } from '../redux/slices/sortAndFilterSlice';
import { cartActions } from './../redux/slices/cartSLice';

const allActions = {
	...cartActions,
	...sortActions,
};

export const useAction = () => {
	const dispatch = useDispatch();

	return bindActionCreators(allActions, dispatch);
};
