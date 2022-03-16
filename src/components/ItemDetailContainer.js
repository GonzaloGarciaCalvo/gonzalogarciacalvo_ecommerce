import Container from 'react-bootstrap/Container'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'

const productosIniciales = Datos()

const ItemDetailContainer = (props) =>{
    let filtrado;
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
    
    const getItem =()=>{
        
        const promesa = new Promise((res,rej)=>{
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
        })
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