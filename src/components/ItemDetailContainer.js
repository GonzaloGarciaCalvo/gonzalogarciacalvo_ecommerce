import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MiToast } from './MiToast' 
import Spinner from 'react-bootstrap/Spinner'
import { getItem } from './GetData'



const ItemDetailContainer = (props) =>{
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
    
    useEffect(()=>{
        getItem(id)
        .then((respuesta) => {
            const itemRespuesta = {id: respuesta.id, ...respuesta.data()}
            setProducto(itemRespuesta)
        })
        .catch(()=>MiToast())
        .finally(() => {
            setLoading(false);
        });
        
    },[id])
    return (
        <Container fluid as="section" className="d-flex flex-row justify-content-center pb-5" >
        { loading?   <div className='d-flex display-row justify-content-start m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
					</div> : <ItemDetail producto={producto} />}
        </Container> 
    )
}
export default ItemDetailContainer 