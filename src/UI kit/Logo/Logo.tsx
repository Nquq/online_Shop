import primaryLogo from '../images/primary-logo.png';
import primaryWhiteLogo from '../images/whiteLogo.png';
import style from './Logo.module.scss';

type LogoProps = {
	isWhite: boolean;
};

const Logo = ({ isWhite }: LogoProps) => {
	const src = isWhite ? primaryWhiteLogo : primaryLogo;
	const whiteClass = isWhite ? style.logoWhiteTitle : style.logoTitle;
	return (
		<div className={style.logo}>
			<img src={src} />
			<div className={whiteClass}>СУЛТАН</div>
		</div>
	);
};

export default Logo;
