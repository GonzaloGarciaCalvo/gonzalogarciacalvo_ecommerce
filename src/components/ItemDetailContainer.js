import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import { doc, getDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner'



const ItemDetailContainer = (props) =>{
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
    
    const getItem =()=>{
    
    const docRef = doc(db, "productos", id);
    const docSnap =  getDoc(docRef);
    docSnap
    .then((respuesta) => {
        const itemRespuesta = {id: respuesta.id, ...respuesta.data()}
        setProducto(itemRespuesta)
    })
    .catch(()=>{
        toast.error("Error en la carga, intente nuevamnete", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            hideProgressBar: true,
        })
    })
    .finally(() => {
        setLoading(false);
    });
    }
    useEffect(()=>{
        getItem(producto)
        
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