import Container from 'react-bootstrap/Container'
const ItemListContainer = (props) =>{
    
    return (
        <Container as="main">
            <br />
            <h2 className='pt-5' >{props.greeting}</h2>
        </Container> 
        
    )
}

export default ItemListContainer

