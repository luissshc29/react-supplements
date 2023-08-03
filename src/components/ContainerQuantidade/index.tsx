import styles from './ContainerQuantidade.module.scss'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'
import { useCarrinhoContext } from 'commons/context/carrinho'
import IProduto from 'commons/interfaces/IProdutos'

interface Props {
	produto: IProduto
}

export default function ContainerQuantidade({produto}: Props) {

	const {removeItem, adicionaAoCarrinho, carrinho} = useCarrinhoContext()

	return (
		<div className={styles.container__quantidade}>
			<button 
				onClick={() => removeItem(produto.id)} 
				className={styles.container__quantidade__botao} disabled={produto.quantidade===0 ? true : false}
			>
				<AiOutlineMinusCircle/>
			</button >
			<p className={styles.container__quantidade__numero}>
				{produto.quantidade}
			</p>
			<button 
				onClick={() => adicionaAoCarrinho(produto)}
				className={styles.container__quantidade__botao}
			>
				<AiOutlinePlusCircle/>
			</button>
		</div>
	)
}
