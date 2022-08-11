import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify"
import MiProvider from "./components/CartContext"



function App() {

    return (
			<MiProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer  />} />
						<Route path="/category/:categoryId" element={<ItemListContainer/>} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
					</Routes>
					<ToastContainer />
				</BrowserRouter>
			</MiProvider>
		);
}
export default App

