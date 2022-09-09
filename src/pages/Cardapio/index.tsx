import style from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";

export default function Cardapio() {
	return (
		<main>
			<nav className={style.menu}>
				<Logo />
			</nav>
			<header className={style.header}>
				<div className={style.header__text}>
					A Casa do código e da massa
				</div>
			</header>
		</main>
	);
}
