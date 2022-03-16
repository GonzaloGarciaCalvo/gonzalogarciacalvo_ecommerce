import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito"
import { ToastContainer } from "react-toastify"




function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}
export default App

