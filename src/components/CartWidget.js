import cart from "../cart.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link  to="/cart"  className="etiquetaAcarrito">
            <img src={cart} alt="carrito" className="cartIcon"></img>
        </Link>       
    )
}
export default CartWidget
