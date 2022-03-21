import { useContext } from "react"
import { contextoCarrito } from "./CartContext"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cart = () => {
    /* const { clear, carrito, removeItem } = useContext(contextoCarrito) */
    const resultado = useContext(contextoCarrito)
    const carrito = resultado.carrito
    const clear = resultado.clear
    const removeItem = resultado.removeItem

    
    return (
        <div>
            <h1 className="m-4" > Carrito</h1>
            <div className="d-flex flex-row justify-content-evenly">
            {carrito.map(item => (
                <Card key={item.producto.id} className="card col-2 col-md-3 mx-2 pb-3 mb-4 item item2">
                    <Card.Img variant="top" src={item.producto.imagen} /> 
                    <Card.Title>
                        <h3>{item.producto.nombre}</h3>
                    </Card.Title>
                    
                    <p> Cantidad {item.cantidad}</p>
                    {/* <p>Total : ${item.producto.precio * item.producto.cantidad}</p> */}
                    <Button onClick={()=>removeItem(item.producto)} variant="secondary" size="sm">Borrar</Button>
                </Card>
            ))}
            </div>
            <Button onClick={clear} variant="secondary" size="sm" className="mb-5 mx-auto d-flex flex-column align-self-center">Cancelar</Button>
        </div>
        
    )
}

export default Cart