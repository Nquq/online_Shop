import { FC, useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import style from './Search.module.scss';
type SearchProps = {};

const Search: FC<SearchProps> = () => {
	const [value, setValue] = useState('');
	const { sortProducers } = useAction();
	console.log(value);

	useEffect(() => {
		sortProducers(value.toLowerCase());
	}, [value]);

	return (
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
	);
};

export default Search;
