import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { doc, getDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner'
import { MiToast } from './MiToast'


const ItemDetailContainer = () =>{
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
    
    useEffect(()=>{
    const docRef = doc(db, "productos", id);
    const docSnap =  getDoc(docRef);
    docSnap
    .then((respuesta) => { setProducto({id: respuesta.id, ...respuesta.data()}) })
    .catch(()=> {
        MiToast()
        console.log("error en carga de datos")
    })
    .finally(() =>  setLoading(false))
    },[id])
    
    return (
        <Container fluid as="main" className="d-flex flex-row justify-content-center pb-5 itemDetailCont" >
        { loading?   <div className='d-flex display-row  m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
					</div> : <ItemDetail producto={producto} />}
        </Container> 
    )
}
export default ItemDetailContainer 