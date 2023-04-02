import { FC, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTappedSelector';
import ChangeModal from '../../UI kit/ChangeModal/ChangeModal';
import AdminCards from '../AdminsCards/AdminCards';
import style from './AdminPage.module.scss';
type Props = {};

const AdminPage: FC = (props: Props) => {
	const products = useTypedSelector(state => state.sort.products);

	const [isOpen, setIsOpen] = useState(false);
	const [code, setCode] = useState(0);
	const { deleteProduct } = useAction();

	return (
		<div className={style.adminPage}>
			{isOpen ? <ChangeModal setIsOpen={setIsOpen} isOpen={isOpen} products={products} barcode={code} /> : null}
			<div className={style.container}>
				<div
					className={style.addItem}
					onClick={() => {
						setIsOpen(!isOpen);
						setCode(0);
					}}
				>
					Создать товар
				</div>
				<div className={style.cards}>
					{products.map(item => {
						return (
							<AdminCards product={item} key={item.code} deleteProduct={deleteProduct} isOpen={isOpen} setIsOpen={setIsOpen} setCode={setCode} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
