import React, { useState } from 'react'
import './Inicio.module.scss'
import Menu from 'components/Menu'
import Produtos from 'components/Produtos'
import Recomendados from 'components/Recomendados'
import Banner from 'components/Banner'
import Rodape from 'components/Rodape'

export default function Inicio() {
	
	const [filtro, setFiltro] = useState<string|null|undefined>(null)
	const [busca, setBusca] = useState('')

	return (
		<>		
			<Banner busca={busca} setBusca={setBusca} />
			<Menu filtro={filtro} setFiltro={setFiltro}/>
			{busca === '' || null ? <Recomendados/> : ''}
			<Produtos filtro={filtro} busca={busca}/>
			<Rodape/>
		</>
	)
}
