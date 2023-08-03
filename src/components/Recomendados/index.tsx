import React from 'react'
import styles from './Recomendados.module.scss'
import produtos from 'assets/json/produtos.json'
import Card from 'components/Produtos/Card'

export default function Recomendados() {

	const arrayAleatorio = produtos.sort(() => 0.5 - Math.random())
	const arrayDeRecomendados = arrayAleatorio.slice(0, 3)

	return (
		<>
			<h2>Nossos recomendados!</h2>
			<div className={styles.recomendados}>
				{arrayDeRecomendados.map(produto => (
					<Card produto={produto} key={produto.id}/>
				))}
			</div>
		</>
	)
}
