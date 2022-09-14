import style from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";

export default function Ordenador() {
	return (
		<button className={style.ordenador}>
			<span>Ordenar Por</span>
			<div className={style.ordenador__options}>
				{opcoes.map((opcao) => (
					<div className={style.ordenador__option} key={opcao.value}>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}
