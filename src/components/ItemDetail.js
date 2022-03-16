import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) =>{ 
     
    return (
        <Card as="article" className=" col-md-6  detalleItem mt-5">
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-1'>
                <Card.Img variant="top" src={producto.imagen} alt="foto producto"/> 
                <Card.Title className='text-center detalleItem__totulo'>
                    <h3>{producto.nombre} </h3>  
                </Card.Title>
                <Card.Text >$ {producto.precio}</Card.Text>
                <Card.Text>Disponible en otros colores </Card.Text>
                <ItemCount initial={1}  stock={5} onAdd={(value) => console.log(`se agregaron `, value ,`items al carrito`)} />
            
            </Card.Body>
        </Card>
    )
}

export default ItemDetail