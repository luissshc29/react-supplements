import React from 'react'
import styles from './Menu.module.scss'
import opcoes from 'assets/json/filtros.json'
import Opcao from './Opcao'

interface Props {
	filtro: string|null|undefined
	setFiltro: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

export default function Menu({filtro, setFiltro}: Props) {
  return (
	<nav className={styles.menu}>
		{opcoes.map(opcao => (
			<Opcao opcao={opcao} filtro={filtro} setFiltro={setFiltro} key={opcao.id}/>
		))}
	</nav>
  )
}
