import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from './../redux/slices/cartSLice';

const allActions = {
	...cartActions,
};

export const useAction = () => {
	const dispatch = useDispatch();

	return bindActionCreators(allActions, dispatch);
};
