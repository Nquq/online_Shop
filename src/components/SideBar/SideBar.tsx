import { FC } from 'react';
import ListCheckBox from '../../UI kit/ListCheckBox/ListCheckBox';
import Search from '../../UI kit/Search/Search';
import style from './SideBar.module.scss';
type SideBarProps = {};

const SideBar: FC<SideBarProps> = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.container}>
				<div className={style.title}>ПОДБОР ПО ПАРАМЕТРАМ</div>
				<section className={style.price}>
					<div>
						Цена <span>₸</span>
					</div>
					<div className={style.row}>
						<input type='text' placeholder='0' />
						-
						<input type='text' placeholder='10000' />
					</div>
				</section>
				<div className={style.title}>Производитель</div>
				<section className={style.producer}>
					<Search />
					<ListCheckBox isBrand={false} />
				</section>
				<div className={style.line}></div>
				<div className={style.title}>Бренд</div>
				<section className={style.producer}>
					<Search />
					<ListCheckBox isBrand={true} />
				</section>
				<section className={style.buttons}>
					<button className={style.show}>Показать</button>
					<button className={style.trash}>
						<img src='/src/UI kit/images/trash.png' alt='' />
					</button>
				</section>
				<div className={style.column}>
					<div className={style.sortCard}>Уход за телом</div>
					<div className={style.sortCard}>Уход за руками</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
