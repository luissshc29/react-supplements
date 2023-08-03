import React from 'react'
import styles from './Opcao.module.scss'
import opcoes from 'assets/json/filtros.json'

interface Props {
	opcao: typeof opcoes[0]
	filtro: string|null|undefined
	setFiltro: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

export default function Opcao({opcao, filtro, setFiltro}: Props) {

	function defineFiltro (categoria: string) {
		if (filtro === categoria) {
			return setFiltro(null)
		} 
		return setFiltro(categoria)	
	}

	return (
		<button 
			key={opcao.id} 
			className={`${styles.opcao} ${opcao.categoria === filtro ? styles.opcao__ativa : ''}`} 
			onClick={() => defineFiltro(opcao.categoria)}
		>
			{opcao.nome}
		</button>
	)
}
