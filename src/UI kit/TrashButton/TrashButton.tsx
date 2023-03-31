import { FC } from 'react';
import { useAction } from '../../hooks/useAction';
import style from './TrashButton.module.scss';
type TrashButtonProps = {
	code?: number;
};

const TrashButton: FC<TrashButtonProps> = ({ code }) => {
	const { removeItem } = useAction();

	return (
		<button className={style.trash} onClick={() => removeItem(code)}>
			<img src='/src/UI kit/images/trash.png' alt='' />
		</button>
	);
};

export default TrashButton;
