import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify"



const productosIniciales = Datos()
    
const ItemListContainer = (prop) =>{
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const {id} = useParams()
	useEffect(() => {
		const promesa = new Promise((res, rej) => {
			setTimeout(() => {
				let filtrado = [];
				if (id != undefined){
					filtrado =productosIniciales.filter(el => el.category==id);
				} else {filtrado = productosIniciales};
				res(filtrado);
				
			}, 2000);
		});
		promesa
			.then((respuestaDeLaApi) => {
				setProductos(respuestaDeLaApi);
			})
			.catch((errorDeLaApi) => {
				console.log(errorDeLaApi);
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
	},[id]);
	
    return (
			<>
				{ loading?   <div className='d-flex display-row justify-content-start m-5'>
                                   <Spinner animation="border" role="status"> </Spinner>
								   <p className="ms-4 mt-1">Cargando...</p>
						    </div> : " "}
				<h2 className="pt-5">{prop.greeting}</h2>
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5" />
			</>
	);
}

export default ItemListContainer