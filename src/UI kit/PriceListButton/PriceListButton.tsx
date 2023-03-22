import style from './PriceListButton.module.scss';
type Props = {};

const PriceListButton = (props: Props) => {
	return (
		<button className={style.button}>
			<div>Прайс-лист</div>
			<img src='/src/UI kit/images/dowload-logo.png' alt='' />
		</button>
	);
};

export default PriceListButton;
