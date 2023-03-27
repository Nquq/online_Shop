import { FC } from 'react';
import { Products } from '../../data/Product';
import { IProductItemType } from '../../types/ProductType';
import Card from '../Card/Card';
type Props = {};

const ListCard: FC = (props: Props) => {
	return (
		<>
			{Products.map((product: IProductItemType) => {
				return <Card key={product.code} product={product} />;
			})}
		</>
	);
};

export default ListCard;
