import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'

/* const auxiliar = Datos();
const detalleProducto = auxiliar[0]   con esto funcionaba*/
/* const detalleProducto = Datos();*/

const productosIniciales = Datos()
console.log(productosIniciales, "productos iniciales fuera de TDC en ItemDetailContainer")

const ItemDetailContainer = (props) =>{
    let filtrado = [];
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    /* const [item, setItem] = useState({}) */
    const {id} = useParams()
    
    console.log("id de ItemDetalContainer ",id)
    const getItem =()=>{
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                
				
				filtrado =productosIniciales.filter(el => el.item==id);
                console.log("filtrado en getItem",  filtrado)
                res(filtrado)
            },1000)
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
        })
    }
    useEffect(()=>{
        getItem(producto)
        
    },[id])
    console.log("producto a la salida de useEffect IDC", producto)// SALE BIEN
    console.log(producto.nombre)// SALE UNDEFINED
    console.log("filtrado a la salida de useEffect IDC ",filtrado)
return (
    <Container fluid as="div" className="d-flex flex-row justify-content-center pb-5" >
    { loading ? "":  <ItemDetail producto={producto} />}
    </Container> 
)
}
export default ItemDetailContainer 