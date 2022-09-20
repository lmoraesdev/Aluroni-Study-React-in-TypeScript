import React from "react";
import style from "./Item.module.scss";

export default function Item() {
	return (
		<div className={style.item}>
			<div className={style.item__imagem}>
				<img src="" alt="imagem" />
			</div>
			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h2></h2>
					<p></p>
				</div>
				<div className={style.item__tags}>
					<div className={style.item__tipo}></div>
					<div className={style.item__porcao}></div>
					<div className={style.item__qtdpessoas}></div>
					<div className={style.item_valor}></div>
				</div>
			</div>
		</div>
	);
}
