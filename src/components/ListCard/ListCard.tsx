import { FC } from 'react';
import { Products } from '../../data/Product';
import { ProductItemType } from '../../types/ProductType';
import Card from '../Card/Card';
type Props = {};

const ListCard: FC = (props: Props) => {
	return (
		<>
			{Products.map((product: ProductItemType) => {
				return <Card product={product} />;
			})}
		</>
	);
};

export default ListCard;
