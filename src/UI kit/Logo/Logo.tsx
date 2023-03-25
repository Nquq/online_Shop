import { FC } from 'react';
import primaryLogo from '../images/primary-logo.png';
import primaryWhiteLogo from '../images/whiteLogo.png';
import style from './Logo.module.scss';

type LogoProps = {
	isWhite: boolean;
	isMobile?: boolean;
};

const Logo: FC<LogoProps> = ({ isWhite, isMobile }) => {
	const src = isWhite ? primaryWhiteLogo : primaryLogo;
	const whiteClass = isWhite ? style.logoWhiteTitle : style.logoTitle;
	return (
		<div className={style.logo}>
			{isMobile ? <img src={src} width='30px' height='41px' /> : <img src={src} />}
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
