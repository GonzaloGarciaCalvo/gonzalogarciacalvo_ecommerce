import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useState, useContext } from "react"
import { contextoCarrito } from "./CartContext"

const ItemDetail = ({producto}) =>{ 
    const resultado = useContext(contextoCarrito)
    const addItem = resultado.addItem
    const [seleccionado, setSeleccionado] = useState(false)
    
    const onAdd = (value)=> {
        if (value !== undefined) setSeleccionado(value)
        
    };
    const getCount = () => {
        addItem(producto, seleccionado)
      }
    
    
    return (
        <Card as="article" className=" col-md-6  detalleItem mt-5">
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-1'>
                <Card.Img variant="top" src={producto.imagen} alt="foto producto"/> 
                <Card.Title className='text-center detalleItem__titulo'>
                    <h3>{producto.nombre} </h3>  
                </Card.Title>
                <Card.Text >$ {producto.precio}</Card.Text>
                <Card.Text>Disponible en otros colores </Card.Text>
                {seleccionado? <Button as={Link} to={`/Cart`} onClick={getCount} variant="secondary" size="sm">Comprar</Button> : <ItemCount initial={1}  stock={5} onAdd={onAdd} />} 
                 
                {/* <ItemCount initial={1}  stock={5} onAdd={(value) => {if (value != undefined) setSeleccionado(value)}} /> */}
            
            </Card.Body>
        </Card>
    )
}

export default ItemDetail