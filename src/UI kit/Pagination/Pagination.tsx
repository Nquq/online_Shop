import { FC } from 'react';
import style from './Pagination.module.scss';
type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className={style.pagination}>
			<div>
				<img src='/src/UI kit/images/left.png' alt='' />
			</div>
			{pages.map(page => {
				return (
					<button
						className={`${page === currentPage ? style.clickedPage : style.pageButton}`}
						key={page}
						onClick={() => {
							onPageChange(page);
						}}
					>
						{page}
					</button>
				);
			})}
			<div>
				<img src='/src/UI kit/images/right.png' alt='' />
			</div>
		</div>
	);
};

export default Pagination;
