import { useContext } from "react"
import { contextoCarrito } from "./CartContext"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Cart = () => {
    const resultado = useContext(contextoCarrito)
    const carrito = resultado.carrito
    const total = resultado.total
    const clear = resultado.clear
    const removeItem = resultado.removeItem
    
    return (
        <div>
            <h1 className="m-4" > Carrito</h1> 
            {resultado.carrito.length? <p className="totalCarrito mx-4">Total: ${total}</p> : ""}
            <div className="d-flex flex-row justify-content-evenly">
            {carrito.map(item => (
                <Card key={item.producto.id} className="card col-2 col-md-3 mx-2 pb-3 mb-4 item item2">
                    <Card.Img variant="top" src={item.producto.imagen} /> 
                    <Card.Title>
                        <h5 className="text-center">{item.producto.nombre}</h5>
                    </Card.Title>
                    <p> Cantidad {item.cantidad}</p>
                    <Button onClick={()=>removeItem(item.producto)} variant="secondary" size="sm">Borrar</Button>
                </Card>
            ))}
            </div>
            { resultado.carrito.length? <div className="d-flex flex-column justify-content-center">
                                            <Button  variant="secondary" size="sm" className="mb-4 mx-3 d-flex  align-self-center">Terminar compra</Button>
                                            <Button onClick={clear} variant="secondary" size="sm" className="mb-5 mx-3 d-flex align-self-center">Cancelar</Button>
                                            
                                        </div>:
                                        <Button as={Link} to={`/`} variant="secondary" size="sm">Ir a comprar</Button> }
        </div>
        
    )
}

export default Cart