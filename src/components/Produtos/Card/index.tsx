import React from 'react'
import styles from './Card.module.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import IProduto from 'commons/interfaces/IProdutos'
import { useCarrinhoContext } from 'commons/context/carrinho'

export default function Card({produto}: {produto: IProduto}) {

	const {adicionaAoCarrinho, carrinho, removeItem} = useCarrinhoContext()

	const produtoComQuantidade = Object.assign(produto,{"quantidade": 1})

	return (
		<Link to={`/produto/${produto.id}`} className={styles.card}>
			<img src={`${produto.imagem}`} alt={produto.nome} className={styles.card__imagem} />
			<h2 className={styles.card__titulo}>{produto.nome}</h2>
			<p className={styles.card__preco}>R$ {produto.valor.toFixed(2)}</p>
			<Link 
				to='/' 
				className={styles.card__carrinho}
				onClick={carrinho.some((item:IProduto) => item.id === produto.id) ? 
					() => removeItem(produtoComQuantidade.id) 
						: 
					() => adicionaAoCarrinho(produtoComQuantidade)
				}
			>
				{carrinho.some((item:IProduto) => 
					item.id === produto.id) ? 
						<BsFillCartCheckFill className={styles.card__carrinho__icone}/> : 
						<AiOutlineShoppingCart className={styles.card__carrinho__icone}/> 
				}
			</Link>
		</Link>
	)
}
