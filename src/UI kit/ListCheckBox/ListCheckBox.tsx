import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import CheckBox from '../CheckBox/CheckBox';

type ListCheckBoxProps = {};

const ListCheckBox: FC<ListCheckBoxProps> = () => {
	const producers = useTypedSelector(state => state.producer);

	return (
		<div style={{ marginTop: '15px' }}>
			{producers.producers.map((item, index) => {
				return <CheckBox key={index} title={item[0]} amount={item[1]} />;
			})}
		</div>
	);
};

export default ListCheckBox;
