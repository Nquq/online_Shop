import { FC } from 'react';
import style from './PriceListButton.module.scss';
type PriceListButtonProps = {
	isMobile?: boolean;
};

const PriceListButton: FC<PriceListButtonProps> = ({ isMobile }) => {
	const mobileView = isMobile ? style.mobileButton : style.button;
	return (
		<button className={mobileView}>
			<div>Прайс-лист</div>
			<img src='/images/dowload-logo.png' alt='' />
		</button>
	);
};

export default PriceListButton;
