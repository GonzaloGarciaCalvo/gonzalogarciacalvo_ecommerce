import Container from 'react-bootstrap/Container'
import ItemCount from './ItemCount'


const ItemListContainer = (props) =>{
    
    const miOnAdd = () => {
        console.log("agregado al carrito")
    }

    return (
        <Container as="main" >
            <br />
            <h2 className='pt-5' >{props.greeting}</h2>
            <ItemCount initial={1}  stock={5} onAdd={miOnAdd} /> 
        </Container> 
        
    )
}

export default ItemListContainer

