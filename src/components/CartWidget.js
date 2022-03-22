import cart from "../cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { contextoCarrito } from "./CartContext"

const CartWidget = () => {
    const resultado = useContext(contextoCarrito)
    const cantidadDeItems = resultado.cantidadDeItems

    return (
        <Link  to="/cart"  className="etiquetaAcarrito">
            <img src={cart} alt="carrito" className="cartIcon"></img>
            <p className="">Cantidad de productos: {cantidadDeItems}</p>
        </Link>       
    )
}
export default CartWidget
