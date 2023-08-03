import Banner from 'components/Banner'
import styles from './NaoEncontrada.module.scss'
import React, { useState } from 'react'
import BotaoVoltar from 'components/BotaoVoltar'
import Rodape from 'components/Rodape'

export default function NaoEncontrada() {

	const [busca, setBusca] = useState('')

	return (
		<div>
			<Banner busca={busca} setBusca={setBusca} disabled={true}/>
			<div className={styles.container}>
				<h1 className={styles.numero}>404</h1>
				<h2 className={styles.mensagem}>Página não encontrada :(</h2>
				<BotaoVoltar/>
				<Rodape fixado={true}/>
			</div>
		</div>
	)
}
