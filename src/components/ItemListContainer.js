import Container from 'react-bootstrap/Container'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from "react"
import Datos from './Datos'

const productosIniciales = Datos()
console.log(productosIniciales, "hola")
    
const ItemListContainer = (prop) =>{
        /* const miOnAdd = () => {
            console.log("agregado al carrito")
        } */
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const promesa = new Promise((res, rej) => {
			setTimeout(() => {
				res(productosIniciales);
			}, 3000);
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
	});
    
    return (
        <Container fluid as="main" >
            <br />
            <h2 className='pt-5' >{prop.greeting}</h2>
            {/* <ItemCount initial={1}  stock={5} onAdd={(value) => console.log(`se agregaron `, value ,`items al carrito`)} /> */}
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} className="d-flex flex-row justify-content-center "/>
        </Container> 
    )
}

export default ItemListContainer