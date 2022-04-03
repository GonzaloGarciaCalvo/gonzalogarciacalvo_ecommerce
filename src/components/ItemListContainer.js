import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'

    
const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	
	const {id} = useParams() 
	useEffect(() => {
		let productsCollection;
		let documentos; 
		
		if (id === undefined) {
			productsCollection = collection(db, "productos");
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
		}
		documentos = getDocs(productsCollection); 
		documentos
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(() => MiToast()) //NO FUNCIONA
			// .catch(error => toast.error("Error al obtener los productos"))  //NOFUNCIONA
			/*  .catch(() => {  //NO FUNCIONA
				toast.error("Error en la carga, intente nuevamnete", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				})  */
			/* }) */
			.finally(() => setLoading(false));
	}, [id]);

    return (
			<>
				{ loading?  <div className='d-flex display-row justify-content-center m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
							</div> : ""}
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5" />
			</>
	);
}

export default ItemListContainer