import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify"




function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}
export default App

