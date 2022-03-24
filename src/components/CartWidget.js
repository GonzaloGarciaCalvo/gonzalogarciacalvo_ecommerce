import cart from "../cart.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { contextoCarrito } from "./CartContext"

const CartWidget = () => {
    const resultado = useContext(contextoCarrito)
    const cantidadDeItems = resultado.cantidadDeItems

    return (
        <NavLink  to="/cart"  className="linkActivo etiquetaAcarrito">
            <div className="d-flex flex-row justify-content-center ">
                <img src={cart} alt="carrito" className="cartIcon "></img>
                <p className=" pb-0">: {cantidadDeItems}</p>
            </div>
            
        </NavLink>       
    )
}
export default CartWidget
/* className={({ isActive }) => isActive ? "linkActivo" : "linkNoActivo"} */