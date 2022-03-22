import { useContext } from "react"
import { contextoCarrito } from "./CartContext"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cart = () => {
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
                    <Button onClick={()=>removeItem(item.producto)} variant="secondary" size="sm">Borrar</Button>
                </Card>
            ))}
            </div>
            { resultado.carrito.length? <div className="d-flex flex-row justify-content-center">
                <Button onClick={clear} variant="secondary" size="sm" className="mb-5 mx-3 d-flex flex-column align-self-center">Cancelar</Button>
                <Button  variant="secondary" size="sm" className="mb-5 mx-3 d-flex flex-column align-self-center">Comprar</Button>
            </div> :""}
        </div>
        
    )
}

export default Cart