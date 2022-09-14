import React from "react";
import style from "./Filtros.module.scss";
import classNames from "classnames";

type IOpcao = typeof filtros[0];

const filtros = [
	{
		label: "Massas",
		id: 1,
	},
	{
		label: "Carnes",
		id: 2,
	},
	{
		label: "Combos",
		id: 3,
	},
	{
		label: "Veganos",
		id: 4,
	},
];

interface Props {
	filtro: number | null;
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
	function selecionarFiltro(opcao: IOpcao) {
		if (filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	}
	return (
		<div className={style.filtros}>
			{filtros.map((opcao) => (
				<button
					className={classNames({
						[style.filtros__filtro]: true,
						[style["filtros__filtro--ativo"]]: filtro === opcao.id,
					})}
					onClick={() => selecionarFiltro(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}
