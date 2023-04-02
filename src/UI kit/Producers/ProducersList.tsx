import { FC, useState } from 'react';
import style from './ProducersList.module.scss';
type ProducersListProps = {
	producers: [producer: string, count: number][];
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
	checked: boolean[];
};

const ProducersList: FC<ProducersListProps> = ({ producers, handleChange, handleCheckBoxChange, checked }) => {
	const [value, setValue] = useState('');

	const filtered = producers.filter(item => item[0].toLowerCase().includes(value.toLowerCase()));

	return (
		<>
			<div className={style.search}>
				<input
					type='text'
					placeholder='Поиск...'
					className={style.searchInput}
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				/>
				<img src='/src/UI kit/images/search-logo.png' alt='' className={style.searchLogo} />
			</div>
			<div style={{ marginTop: '15px' }}>
				{filtered.map((item, index: number) => {
					return (
						<div className={style.checkbox} key={index}>
							<input
								type='checkbox'
								checked={checked[index] || false}
								onChange={event => {
									handleCheckBoxChange(event, index);
									handleChange(event);
								}}
								value={item[0]}
							/>
							<div>{item[0]}</div>
							<div className={style.amount}>{`(${item[1]})`}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProducersList;
