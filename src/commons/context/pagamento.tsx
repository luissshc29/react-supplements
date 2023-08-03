import {createContext, useState, useContext} from 'react'
import formasDePagamento from 'assets/json/pagamentos.json'

export const PagamentoContext = createContext<any>('')
PagamentoContext.displayName = 'Pagamento'

export default function PagamentoProvider({children}: {children: any}) {

	const [pagamento, setPagamento] = useState()
	const [juros, setJuros] = useState(1)

	return (
		<PagamentoContext.Provider value={{pagamento, setPagamento, juros, setJuros}}>
			{children}
		</PagamentoContext.Provider>
	)
}

export const usePagamentoContext = () => {
	const {setPagamento, setJuros, juros} = useContext(PagamentoContext)

	function alteraForma (nome: string) {
		let formaSelecionada = formasDePagamento.filter((forma) => forma.nome === nome)
		console.log(formaSelecionada[0].juros)
		setJuros(formaSelecionada[0].juros)
	} 

	return {
		setPagamento,
		alteraForma,
		juros
	}
}