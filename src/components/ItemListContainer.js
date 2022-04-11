import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
/* import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast' */
import GetData from './GetData'
/* import { ProductContext } from "./ProductContext"; */


    
const ItemListContainer = () =>{

    /* const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);  */

	/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
	const {id} = useParams() 
	let objectResponse

	useEffect(() => {
	    GetData(id);
		/* const productos = objectResponse.productos
		const loading =objectResponse.loading */
		/* let productsCollection;
		let documentos;  */
	/* 	itemId, prod, sProd, load, sLoad  */
		///* prop.GetData(id, productos, setProductos, loading, setLoading); */
		
		/* if (id === undefined) {
			productsCollection = collection(db, "productos");
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
		}
		documentos = getDocs(productsCollection); 
		documentos
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(() => MiToast()) */ //NO FUNCIONA
			/* .finally(() => setLoading(false)); */
			
	}, [id]);

    return (
			<>
				{ objectResponse.loading?  <div className='d-flex display-row justify-content-center m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
							</div> : ""
				}
				<ItemList productos={objectResponse.productos} className="d-flex flex-row justify-content-center pb-5" />
			</>
	);
}

export default ItemListContainer