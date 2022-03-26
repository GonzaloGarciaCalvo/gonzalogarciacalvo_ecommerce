import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'
import { toast } from "react-toastify"
import { db } from "./Firebase"
import { doc, getDoc } from "firebase/firestore";


const productosIniciales = Datos()

const ItemDetailContainer = (props) =>{
    let filtrado;
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
    
    const getItem =()=>{
    console.log("id en IDC", id)
    
    const docRef = doc(db, "productos", id);
    const docSnap =  getDoc(docRef);
    docSnap
    .then((respuesta) => {
        /* const itemRespuesta = respuesta.data() */
        const itemRespuesta = {
            id: respuesta.id,
            ...respuesta.data()
        }
        
        setProducto(itemRespuesta)
        console.log("producto en IDC ",producto)//
        console.log("producto en IDC ",itemRespuesta) // lo muestra con id
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
        
    
        
        /* const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
				filtrado =productosIniciales.filter(el => el.item==id);
                res(filtrado[0])
            },100)
        })
        promesa
        .then((respuestaDeLaApi)=>{
            setProducto(respuestaDeLaApi)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        })
        .finally(()=>{
            setLoading(false)
        }) */
    }
    useEffect(()=>{
        getItem(producto)
        
    },[id])
    return (
        <Container fluid as="section" className="d-flex flex-row justify-content-center pb-5" >
        { loading ? "":  <ItemDetail producto={producto} />}
        </Container> 
    )
}
export default ItemDetailContainer 