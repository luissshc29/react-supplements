import produtos from 'assets/json/produtos.json'
import { useParams } from 'react-router-dom'
import styles from './PaginaProduto.module.scss'
import BotaoVoltar from 'components/BotaoVoltar'
import Botao from 'components/Botao'
import { useCarrinhoContext } from 'commons/context/carrinho'
import {useState} from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Banner from 'components/Banner'
import Rodape from 'components/Rodape'

export default function PaginaProduto() {
	
	const [busca, setBusca] = useState('')

	const parametros = useParams()

	let produtoSelecionado = produtos.filter(produto => produto.id === Number(parametros.id))

	let produto = Object.assign(produtoSelecionado[0],{"quantidade": 1})

	const [quantidade, setQuantidade] = useState(1)

	function adicionaItem () {
		setQuantidade(quantidade + 1)
	}

	function removeItem() {
		setQuantidade(quantidade - 1)
	}

	function enviarParaOCarrinho (quantidade: number) {
		let produto = Object.assign(produtoSelecionado[0],{"quantidade": quantidade})
		adicionaAoCarrinho(produto)
	}

	const {adicionaAoCarrinho} = useCarrinhoContext()

  	return (
		<>
			<Banner busca={busca} setBusca={setBusca} disabled={true}/>
			<div className={styles.paginaProduto}>
				<BotaoVoltar/>
				<div className={styles.container}>
					<img src={produto.imagem} alt={produto.nome} className={styles.container__imagem}/>
					<p className={styles.container__categoria}>{'> ' + produto.categoria}</p>
					<h1 className={styles.container__nome}>{produto.nome}</h1>
					<h2 className={styles.container__preco}>R$ {produto.valor.toFixed(2)}</h2>
					<div className={styles.container__quantidade__botao}>			
						<div className={styles.container__quantidade}>
							<button
								onClick={() => removeItem()}
								className={styles.container__quantidade__botao} disabled={quantidade === 0 ? true : false}
							>
								<AiOutlineMinusCircle />
							</button >
							<p className={styles.container__quantidade__numero}>
								{quantidade}
							</p>
							<button
								onClick={() => adicionaItem()}
								className={styles.container__quantidade__botao}
							>
								<AiOutlinePlusCircle/>
							</button>
						</div>
						<Botao to='/carrinho' onClick={() => enviarParaOCarrinho(quantidade)}>Comprar</Botao>
					</div>
				</div>
			</div>
			<Rodape/>
		</>
	)
}
