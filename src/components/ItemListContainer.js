import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Datos from './Datos'
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify"
import { db } from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"


console.log(db)
const productosIniciales = Datos()
    
const ItemListContainer = (prop) =>{
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const {id} = useParams()
	useEffect(() => {
        if (id == undefined){

		const productsCollection = collection(db,"productos")
        const documentos = getDocs(productsCollection)
		documentos
		.then((respuesta)=>{
			const aux = []
			respuesta.forEach((documento)=>{
				const producto = {
					id: documento.id,
					...documento.data()
				}
				aux.push(producto)
			})
			console.log(aux)
			setProductos(aux)
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

	if (id !== undefined){

		const productsCollection = query(collection(db,"productos"), where ("category", "==", id) );
		/* getDocs(productsCollection) */
        const documentos = getDocs(productsCollection)
		documentos
		.then((respuesta)=>{
			const aux = []
			respuesta.forEach((documento)=>{
				const producto = {
					id: documento.id,
					...documento.data()
				}
				aux.push(producto)
			})
			console.log(aux)
			setProductos(aux)
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


		/* const promesa = new Promise((res, rej) => {
			setTimeout(() => {
				let filtrado = [];
				if (id != undefined){
					filtrado =productosIniciales.filter(el => el.category==id);
				} else {filtrado = productosIniciales};
				res(filtrado);
				
			}, 1500);
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
			}); */
	},[id]);
	
    return (
			<>
				{ loading?   <div className='d-flex display-row justify-content-start m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
						    </div> : " "}
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5" />
			</>
	);
}

export default ItemListContainer