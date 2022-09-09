import style from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";

export default function Cardapio() {
	return (
		<main>
			<nav className={style.menu}>
				<Logo />
			</nav>
			<header className={Style.header}>
				<div className={Style.header__text}>
					
				</div>
			</header>
		</main>
	);
}
