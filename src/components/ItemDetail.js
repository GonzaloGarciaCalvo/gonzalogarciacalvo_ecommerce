import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
/* import ItemCount from './ItemCount' */

const ItemDetail = ({producto}) =>{   
    console.log(`prop nombre de itemDetail.js =  ${producto.nombre}`)
    return (
        <Card className=" col-md-6  detalleItem ">
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-1'>
                <Card.Img variant="top" src={producto.imagen} alt="foto producto"/> 
                <Card.Title className='text-center detalleItem__totulo'>{producto.nombre}</Card.Title>
                <Card.Text >$ {producto.precio}</Card.Text>
                <Button variant="secondary" size="sm" className=' d-flex flex-row justify-content-center'>Agregar</Button>
            </Card.Body>
        </Card>
    )
}


{/*  <ItemCount initial={1}  stock={5} onAdd={(value) => console.log(`se agregaron `, value ,`items al carrito`)} /> */}

export default ItemDetail