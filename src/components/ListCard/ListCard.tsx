import { FC } from 'react';
import { IProductItemType } from '../../types/ProductType';
import Pagination from '../../UI kit/Pagination/Pagination';
import Card from '../Card/Card';
import style from './ListCard.module.scss';

type ListCardProps = {
	products: IProductItemType[];
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

const ListCard: FC<ListCardProps> = ({ products, currentPage, totalPages, onPageChange }) => {
	return (
		<div className={style.column}>
			<main className={style.cards}>
				{products.map((product: IProductItemType) => {
					return <Card key={product.code} product={product} />;
				})}
			</main>
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
		</div>
	);
};

export default ListCard;
