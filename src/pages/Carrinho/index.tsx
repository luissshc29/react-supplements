import styles from './Carrinho.module.scss'
import BotaoVoltar from 'components/BotaoVoltar'
import ContainerQuantidade from 'components/ContainerQuantidade'
import pagamentos from 'assets/json/pagamentos.json'
import Botao from 'components/Botao'
import { useCarrinhoContext } from 'commons/context/carrinho'
import IProduto from 'commons/interfaces/IProdutos'
import {useState} from 'react'
import { usePagamentoContext } from 'commons/context/pagamento'
import {BsFillBagCheckFill, BsCartX} from 'react-icons/bs'
import Rodape from 'components/Rodape'

export default function Carrinho() {

	const {carrinho, subtotal, setCarrinho} = useCarrinhoContext()

	const {alteraForma, juros, setPagamento} = usePagamentoContext()

	const [mensagemCompra, setMensagemCompra] = useState(false)

	const [mensagemCarrinhoVazio, setMensagemCarrinhoVazio] = useState(true)

	function efetuarCompra () {
		if (carrinho.length !== 0) {
			setCarrinho([])
			setPagamento('')
			setMensagemCompra(true)
			setMensagemCarrinhoVazio(false)
		}
	}

	return (
		<>
			<BotaoVoltar/>
			<div className={styles.paginaCarrinho}>
				<div className={styles.carrinho}>
					<h1 className={styles.carrinho__titulo}>Carrinho</h1>		
					{mensagemCompra ? 
						<div className={styles.mensagemCompra}>
							<h2>Compra efetuada com sucesso!</h2>
							<BsFillBagCheckFill className={styles.mensagemCompra__icone}/>
						</div> : ''
					}
					{mensagemCarrinhoVazio && carrinho.length === 0 ? 
						<div className={styles.mensagemCarrinhoVazio}>
							<h2>Seu carrinho está vazio ...</h2>
							<BsCartX className={styles.mensagemCarrinhoVazio__icone}/>
						</div> 
							: 
						''
					}
					<div className={styles.carrinho__itens}>
						{carrinho.map((produto: IProduto) => (	
							<div className={styles.carrinho__itens__item} key={produto.id}>
								<img src={`${produto.imagem}`} alt={produto.nome} className={styles.carrinho__itens__item__imagem}/>
								<h2 className={styles.carrinho__itens__item__titulo}>{produto.nome}</h2>
								<p className={styles.carrinho__itens__item__preco}>R$ {produto.valor.toFixed(2)}</p>
								<ContainerQuantidade produto={produto}/>	
							</div>
						))}
					</div>
				</div>
				<div className={styles.container__pagamento}>
					<div>
						<label htmlFor="pagamento">Forma de Pagamento</label>
						<select 
							className={styles.pagamento__select} 
							name='pagamento' 
							onChange={(evento) => alteraForma(evento.target.value.toString())}
						>
							<option disabled={true} className={styles.pagamento__select__option}></option>
							{pagamentos.map(opcao => (
								<option className={styles.pagamento__select__option} key={opcao.id}>
									{opcao.nome}
								</option>
							))}
						</select>
					</div>
					<p><span>Subtotal:</span> R$ {subtotal.toFixed(2)}</p>
					<p><span>Taxa de processamento:</span> {((juros - 1) * 100).toFixed(2)}%</p>
					<p><span>Total:</span> R$ {(subtotal * juros).toFixed(2)}</p>
					<Botao 
						to='/carrinho'
						onClick={() => efetuarCompra()} 
						disabled={carrinho.length === 0? true : false}
					>
						Finalizar compra
					</Botao>
				</div>
			</div>
			<Rodape/>
		</>
  )
}
