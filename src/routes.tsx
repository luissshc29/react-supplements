import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Carrinho from "pages/Carrinho";
import PaginaProduto from "pages/PaginaProduto";
import CarrinhoProvider from "commons/context/carrinho";
import PagamentoProvider from "commons/context/pagamento";
import NaoEncontrada from "pages/NaoEncontrada";

export default function AppRouter() {
	
	return (
		<BrowserRouter>

			<CarrinhoProvider>
			
			<PagamentoProvider>

				<Routes>

						<Route path="/" element={<Inicio />} />
						
						<Route path="/carrinho" element={<Carrinho />} />

						<Route path='/produto/:id' element={<PaginaProduto />} />

						<Route path="*" element={<NaoEncontrada/>}/>

				</Routes>			
			
			</PagamentoProvider>
		
			</CarrinhoProvider>

		</BrowserRouter>

	);
}
