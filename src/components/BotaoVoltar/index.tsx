import React from 'react'
import styles from './BotaoVoltar.module.scss'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function BotaoVoltar() {

	const navegar = useNavigate()

	return (
		<button className={styles.botao__voltar} onClick={() => navegar(-1)}>
			<MdKeyboardArrowLeft />
			<p>Voltar</p>
		</button>
	)
}
