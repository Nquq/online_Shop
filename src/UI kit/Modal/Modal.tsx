import { FC } from 'react';
import style from './Modal.module.scss';
type ModalProps = {
	handleClick: () => void;
};

const Modal: FC<ModalProps> = ({ handleClick }) => {
	return (
		<>
			<div className={style.modal}>
				<div className={style.message}>
					<div className={style.image}>
						<img src='/images/ok.png' alt='' />
					</div>
					<div className={style.title}>Спасибо за заказ</div>
					<div className={style.subtitle}>Наш менеджер свяжется с вами в ближайшее время</div>
					<div className={style.close} onClick={handleClick}>
						X
					</div>
				</div>
			</div>
			<div className={style.background}></div>
		</>
	);
};

export default Modal;
