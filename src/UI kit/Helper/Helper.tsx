import style from './Helper.module.scss';

type HelperProps = {
	isWhite: boolean;
};

const Helper = ({ isWhite }: HelperProps) => {
	const whiteClass = isWhite ? style.contactsWhite : style.contacts;
	return (
		<div className={style.helper}>
			<div className={whiteClass}>
				<div className={style.number}>+7 (777) 490-00-91</div>
				<div className={style.clock}>время работы: 9:00-20:00</div>
				<div className={style.phone}>Заказать звонок</div>
			</div>
		</div>
	);
};

export default Helper;
