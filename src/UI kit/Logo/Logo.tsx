import { FC } from 'react';
import style from './Logo.module.scss';

type LogoProps = {
	isWhite: boolean;
	isMobile?: boolean;
};

const Logo: FC<LogoProps> = ({ isWhite, isMobile }) => {
	const src = isWhite ? '/images/whiteLogo.png' : '/image/primary-logo.png';
	const whiteClass = isWhite ? style.logoWhiteTitle : style.logoTitle;
	return (
		<div className={style.logo}>
			{isMobile && isWhite && <img src='/images/whiteLogo.png' width='30px' height='41px' />}
			{isMobile && !isWhite && <img src='/images/primary-logo.png' width='30px' height='41px' />}
			{!isMobile && isWhite && <img src='/images/whiteLogo.png' />}
			{!isMobile && !isWhite && <img src='/images/primary-logo.png' />}
			{isMobile ? (
				<div className={whiteClass} style={{ fontSize: '15px' }}>
					СУЛТАН
				</div>
			) : (
				<div className={whiteClass}>СУЛТАН</div>
			)}
		</div>
	);
};

export default Logo;
