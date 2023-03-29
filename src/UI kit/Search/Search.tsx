import { FC } from 'react';
import style from './Search.module.scss';
type SearchProps = {};

const Search: FC<SearchProps> = () => {
	return (
		<div className={style.search}>
			<input type='text' placeholder='Поиск...' className={style.searchInput} />
			<img src='/src/UI kit/images/search-logo.png' alt='' className={style.searchLogo} />
		</div>
	);
};

export default Search;
