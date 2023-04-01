import { FC } from 'react';
import { useAction } from '../../hooks/useAction';
import style from './TrashButton.module.scss';
type TrashButtonProps = {
	code?: number;
	setMaxValue?: any;
	setMinValue?: any;
	setShowBodyProducts?: any;
	setShowHandProducts?: any;
};

const TrashButton: FC<TrashButtonProps> = ({ code, setMaxValue, setMinValue, setShowBodyProducts, setShowHandProducts }) => {
	const { removeItem, resetFilters } = useAction();

	return (
		<button
			className={style.trash}
			onClick={() => {
				removeItem(code!);
				resetFilters();
				setMaxValue('');
				setMinValue('');
				setShowBodyProducts(false);
				setShowHandProducts(false);
			}}
		>
			<img src='/src/UI kit/images/trash.png' alt='' />
		</button>
	);
};

export default TrashButton;
