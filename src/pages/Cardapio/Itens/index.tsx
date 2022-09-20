import style from "./Itens.module.scss";
import cardapio from "./itens.json";
import Item from "./Item";

export default function Itens() {
	return (
		<div className={style.itens}>
			{cardapio.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}
