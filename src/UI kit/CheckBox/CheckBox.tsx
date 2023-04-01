import { FC, useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import style from './CheckBox.module.scss';

type CheckBoxProps = {
	title: string;
	amount: number;
};

const CheckBox: FC<CheckBoxProps> = ({ title, amount }) => {
	const [checked, setChecked] = useState(false);

	const { filterByProducer } = useAction();
	useEffect(() => {
		filterByProducer({ checked, title });
	}, [checked]);

	return (
		<div className={style.checkbox}>
			<input type='checkbox' onChange={() => setChecked(!checked)} />
			<div>{title}</div>
			<div className={style.amount}>{`(${amount})`}</div>
		</div>
	);
};

export default CheckBox;
