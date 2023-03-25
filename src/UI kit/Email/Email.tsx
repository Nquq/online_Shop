import { FC } from 'react';
import style from './Email.module.scss';

type EmailProps = {
	emailLogo?: string | null;
	isWhite: boolean;
};

const Email: FC<EmailProps> = ({ emailLogo, isWhite }) => {
	const whiteClass = isWhite ? style.whiteEmail : style.email;
	return (
		<div className={style.section}>
			{emailLogo && <img src='/src/UI kit/images/email-logo.png' width='16px' height='13px' />}
			<div className={whiteClass}>
				opt.sultan@mail.ru <div>На связи в любое время</div>
			</div>
		</div>
	);
};

export default Email;
