import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Item = ({producto}) =>{
    
    return (
        <Card as="article" className=" col-12 col-md-3 col-xl-2 mx-1   item">
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-0'>
                <Card.Img variant="top" src={producto.imagen} alt="foto producto"/> 
                <Card.Title className="text-center item__nombre">{producto.nombre}</Card.Title>
                <Card.Text >$ {producto.precio}</Card.Text>
                <Button as={Link} to={`/item/${producto.id}`} variant="secondary" size="sm" className=' d-flex flex-row justify-content-center'>Ver más</Button>
            </Card.Body>
        </Card>
    )
    
}

export default Item