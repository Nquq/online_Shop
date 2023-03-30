import { FC } from 'react';
import { IProductItemType } from '../../types/ProductType';
import Card from '../Card/Card';
type ListCardProps = {
	products: IProductItemType[];
};

const ListCard: FC<ListCardProps> = ({ products }) => {
	return (
		<>
			{products.map((product: IProductItemType) => {
				return <Card key={product.code} product={product} />;
			})}
		</>
	);
};

export default ListCard;
