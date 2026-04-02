import Container from 'react-bootstrap/Container'
import ItemDetail from '../components/ItemDetail'
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { useGetItem } from '../hooks/useGetItem'

const ItemDetailContainer = (props) =>{
    
    const {id} = useParams()
    const {loading, producto} = useGetItem(id)

    if (loading) {
         return (
            <Container as="main"  className="d-flex display-row justify-content-center align-items-center">
                <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem" }}/> 
                <p className="ms-4 mt-1">Cargando...</p>
            </Container>
        )
    }

    return (
        <Container fluid as="main" className="d-flex flex-row justify-content-center pb-5" >
            {/* { loading
                ?   
                <div className='d-flex display-row justify-content-start m-5'>
                    <Spinner animation="border" role="status"> </Spinner>
                    <p className="ms-4 mt-1">Cargando...</p>
                </div> 
                : 
                <ItemDetail producto={producto} />
            } */}
            <ItemDetail producto={producto} />
        </Container> 
    )
}
export default ItemDetailContainer 