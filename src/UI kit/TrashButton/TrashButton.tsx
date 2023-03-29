import style from './TrashButton.module.scss';
type Props = {};

const TrashButton = (props: Props) => {
	return (
		<button className={style.trash}>
			<img src='/src/UI kit/images/trash.png' alt='' />
		</button>
	);
};

export default TrashButton;
