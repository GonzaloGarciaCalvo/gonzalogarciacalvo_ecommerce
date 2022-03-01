/* import cart from "../../public/cart.png"; */
import cart from "../cart.png";
const CartWidget = () => {
    return (
        <a href="#" className="etiquetaAcarrito">
            <img src={cart} alt="carrito" className="cartIcon"></img>
        </a>       
    )
}
export default CartWidget
