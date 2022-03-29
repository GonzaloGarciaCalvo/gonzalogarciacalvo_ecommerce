import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify"
import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"

    
const ItemListContainer = (prop) =>{
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const {id} = useParams() 
	useEffect(() => {
		let productsCollection;
		let documentos; 
		if (id == undefined) {
			productsCollection = collection(db, "productos");
			documentos = getDocs(productsCollection); 
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
			documentos = getDocs(productsCollection); 
		}
		documentos
			.then((respuesta) => {
				const aux = [];
				respuesta.forEach((documento) => {
					const producto = {id: documento.id, ...documento.data(),};
					aux.push(producto);
				});
				setProductos(aux);
			})
			.catch(() => {
				toast.error("Error en la carga, intente nuevamnete", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					hideProgressBar: true,
				});
			})
			.finally(() => setLoading(false));
	}, [id]);

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