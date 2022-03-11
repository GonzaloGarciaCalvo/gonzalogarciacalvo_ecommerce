import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import Datos from './Datos'

const auxiliar = Datos();
const detalleProducto = auxiliar[0]

const ItemDetailContainer = (props) =>{
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const getItem =()=>{
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(detalleProducto)
            },4000)
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
    })
return (
    <Container fluid as="div" className="d-flex flex-row justify-content-center " >
    { loading ? "":  <ItemDetail producto={producto} />}
    </Container> 
)
}
export default ItemDetailContainer 