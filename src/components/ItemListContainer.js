import Container from 'react-bootstrap/Container'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'

const productosIniciales = Datos()
console.log(productosIniciales, "hola")
    
const ItemListContainer = (prop) =>{
        /* const miOnAdd = () => {
            console.log("agregado al carrito")
        } */
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const {id} = useParams()
	useEffect(() => {
		const promesa = new Promise((res, rej) => {
			setTimeout(() => {
				//aca filtrar por category
				let filtrado = [];
				if (id != undefined){
					filtrado =productosIniciales.filter(el => el.category==id);
				} else {filtrado = productosIniciales};
			
				/* res(productosIniciales); */
				
				res(filtrado);
			}, 1000);
		});
		promesa
			.then((respuestaDeLaApi) => {
				setProductos(respuestaDeLaApi);
			})
			.catch((errorDeLaApi) => {
				console.log(errorDeLaApi);
			})
			.finally(() => {
				setLoading(false);
			});
	},[id]);
    
    return (
        <>
           

            <h2 className='pt-5' >{prop.greeting}</h2>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5"/>
        </> 
    )
}

export default ItemListContainer