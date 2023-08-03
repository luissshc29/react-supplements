import React, { useEffect, useState } from 'react'
import styles from './Produtos.module.scss'
import Card from './Card'
import IProduto from 'commons/interfaces/IProdutos'
import produtos from 'assets/json/produtos.json'

export default function Produtos({filtro, busca}: {filtro: string|null|undefined, busca: string}) {

	const [lista, setLista] = useState<IProduto[]>(produtos)

	function filtraProdutos (produto: IProduto) {

		if (filtro !== null && filtro !== '') {
			return produto.categoria === filtro
		}
		return true
	}

	function pesquisaProdutos (produto: IProduto) {

		const regex = new RegExp(busca, 'i')
		return regex.test(produto.nome)
	}

	useEffect(() => {

		const novaLista = produtos.filter((produto) => pesquisaProdutos(produto) && filtraProdutos(produto))
		
		setLista(novaLista)

	},[filtro, busca])

	return (
		<>
			<h2 className={styles.titulo}>Confira abaixo todo o nosso catálogo!</h2>
			<div className={styles.produtos}>
				{lista.map(produto => (
					<Card produto={produto} key={produto.id} />
				))}
			</div>
		</>
	)
}
