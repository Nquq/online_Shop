import { FC } from 'react';
import { useAction } from '../../hooks/useAction';
import style from './TrashButton.module.scss';
type TrashButtonProps = {
	code?: number;
	setMaxValue?: (str: string) => void;
	setMinValue?: (str: string) => void;
	setShowBodyProducts?: (state: boolean) => void;
	setShowHandProducts?: (state: boolean) => void;
	removeCheckbox?: () => void;
};

const TrashButton: FC<TrashButtonProps> = ({ code, setMaxValue, setMinValue, setShowBodyProducts, setShowHandProducts, removeCheckbox }) => {
	const { removeItem, resetFilters } = useAction();

	return (
		<button
			className={style.trash}
			onClick={() => {
				removeItem(code!);
				resetFilters();
				setMaxValue && setMaxValue('');
				setMinValue && setMinValue('');
				setShowBodyProducts && setShowBodyProducts(false);
				setShowHandProducts && setShowHandProducts(false);
				removeCheckbox && removeCheckbox();
			}}
		>
			<img src='/images/trash.png' alt='' />
		</button>
	);
};

export default TrashButton;
