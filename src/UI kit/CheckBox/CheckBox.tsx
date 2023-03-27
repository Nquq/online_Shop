import { FC } from 'react';
import style from './CheckBox.module.scss';

type CheckBoxProps = {
	title: string;
	amount: number;
};

const CheckBox: FC<CheckBoxProps> = ({ title, amount }) => {
	return (
		<div className={style.checkbox}>
			<input type='checkbox' />
			<div>{title}</div>
			<div className={style.amount}>{`(${amount})`}</div>
		</div>
	);
};

export default CheckBox;
