import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = (prop) =>{
    return (
       
        <Card className=" col-2 col-md-3 mx-2 item">
            <Card.Body  className=' d-flex flex-column justify-content-center align-items-center px-1'>
                <Card.Img variant="top" src={prop.imagen} alt="foto producto"/> 
                <Card.Title className='text-center'>{prop.nombre}</Card.Title>
                <Card.Text >$ {prop.precio}</Card.Text>
                <Button variant="secondary" size="sm" className=' d-flex flex-row justify-content-center'>Ver más</Button>
            </Card.Body>
        </Card>
    )
    
}

export default Item