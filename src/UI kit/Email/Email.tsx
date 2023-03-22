import style from './Email.module.scss';

type EmailProps = {
	emailLogo: string | null;
};

const Email = ({ emailLogo }: EmailProps) => {
	return (
		<div className={style.section}>
			{emailLogo && <img src={emailLogo} width='16px' height='13px' />}
			<div className={style.email}>
				opt.sultan@mail.ru <div>На связи в любое время</div>
			</div>
		</div>
	);
};

export default Email;
