import { createContext, useState, useContext, useEffect } from "react";
import IProduto from "commons/interfaces/IProdutos";

export const CarrinhoContext = createContext<any>({})
CarrinhoContext.displayName = 'Carrinho'

export default function CarrinhoProvider ({children}: {children: any}) {

	const [carrinho, setCarrinho] = useState([])
	const [subtotal, setSubtotal] = useState(0)

	return (
		<CarrinhoContext.Provider value={{carrinho, setCarrinho, subtotal, setSubtotal}}>
			{children}
		</CarrinhoContext.Provider>
	)
}

export const useCarrinhoContext = () => {

	const {carrinho, setCarrinho, subtotal, setSubtotal} = useContext(CarrinhoContext)

	useEffect(() => {
		setSubtotal(carrinho.reduce((acc: number , item:IProduto) => item.valor * item.quantidade + acc, 0))
	},[carrinho, subtotal, setSubtotal])

	function adicionaAoCarrinho (produtoNovo: IProduto) {
		
		const existeNoCarrinho = carrinho.some((item: IProduto) => item.id === produtoNovo.id)

		if (!existeNoCarrinho) {
			return setCarrinho((carrinhoAnterior: IProduto[]) => [...carrinhoAnterior, produtoNovo])
		}

		setCarrinho(alteraQuantidade(produtoNovo.id, 1))
	}

	function alteraQuantidade(id: number, quantidade: number) {
		return (
			carrinho.map((produto: IProduto) => {
				if(produto.id === id) produto.quantidade += quantidade
				return produto
			})
		)
	}

	function removeItem(id: number) {
		let produtoSelecionado = carrinho.find((produto: IProduto) => produto.id === id)
		const ehOUltimo = produtoSelecionado.quantidade === 1

		if(ehOUltimo) {
			return setCarrinho(carrinho.filter((item: IProduto) => item.id !== produtoSelecionado.id))
		}

		setCarrinho(alteraQuantidade(id, -1))
	}

	return {
        carrinho, 
        setCarrinho,
		alteraQuantidade,
		removeItem,
		adicionaAoCarrinho,
		subtotal
    }

}
